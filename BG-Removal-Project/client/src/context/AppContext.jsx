import { useState } from "react";
import { createContext } from "react";
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  // Load credits of the logged-in user
  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });

      if (data.success) {
        setCredit(data.credits);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Background Removal Logic
  const removeBg = async (image) => {
    try {
      if (!isSignedIn) {
        return openSignIn();
      }

      setImage(image);
      setResultImage(false);
      navigate("/result");

      const token = await getToken();
      const formData = new FormData();
      image && formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/image/remove-bg",
        formData,
        {
          headers: { token },
        }
      );

      // ---- SUCCESS CASE ----
      if (data.success) {
        setResultImage(data.resultImage);
        data.creditBalance && setCredit(data.creditBalance);

        // User has used their LAST credit → show result, then redirect
        if (data.creditBalance === 0) {
          toast.error("You have 0 credits left. Please buy more.");
          setTimeout(() => navigate("/buy"), 500);
        }
      }

      // ---- FAILURE CASE ----
      else {
        toast.error(data.message);
        data.creditBalance && setCredit(data.creditBalance);

        // No credits BEFORE uploading
        if (data.creditBalance === 0) {
          setTimeout(() => navigate("/buy"), 500);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
    image,
    setImage,
    removeBg,
    resultImage,
    setResultImage,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
