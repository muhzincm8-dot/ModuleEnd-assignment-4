import mongoose from "mongoose";

const Url = "mongodb+srv://muhzin8:muhzin8@cluster0.wv4afpx.mongodb.net/crm_system";

export const connectDB = async () => {
  try {
    await mongoose.connect(Url);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
  }
};




