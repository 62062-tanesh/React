import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Login again.",
      });
    }

    const token_decode = jwt.decode(token);

    if (!token_decode) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }

    // ✅ Make sure req.body exists
    if (!req.body) {
      req.body = {};
    }

    // depending on your Clerk JWT, this might be token_decode.sub
    req.body.clerkId = token_decode.clerkId || token_decode.sub;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Auth error",
    });
  }
};

export default authUser;
