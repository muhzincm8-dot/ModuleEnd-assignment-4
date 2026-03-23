import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    contact_info: {
      type: String
    },
    status: {
      type: String,
      default: "active"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Customer", customerSchema);
