import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import userModel from "../models/userModel.js";

// Controller function to remove bg from image
const removeBgImage = async (req, res) => {
  try {
    const { clerkId } = req.body;

    // 1) Find user by clerkId
    const user = await userModel.findOne({ clerkId });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // 2) If user has 0 credits -> return success:false (no 400 status)
    if (user.creditBalance === 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    // 3) Validate file
    if (!req.file) {
      return res.json({
        success: false,
        message: "No image file uploaded",
        creditBalance: user.creditBalance,
      });
    }

    const imagePath = req.file.path;

    // 4) Read image file
    const imageFile = fs.readFileSync(imagePath);

    // 5) Build form-data for ClipDrop
    const formdata = new FormData();
    formdata.append("image_file", imageFile, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    // 6) Call ClipDrop API
    const response = await axios.post(
      "https://clipdrop-api.co/remove-background/v1",
      formdata,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
          ...formdata.getHeaders(),
        },
        responseType: "arraybuffer",
      }
    );

    // 7) Convert binary -> base64 data URL
    const base64Image = Buffer.from(response.data, "binary").toString("base64");
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    // 8) Update credits (minus 1)
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    // 9) Send response back to frontend
    return res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: "Background Removed",
    });
  } catch (error) {
    console.log("removeBgImage error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to remove background",
    });
  }
};

export { removeBgImage };
