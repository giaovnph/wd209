import mongoose from "mongoose";

const schemaAuth = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "member",
    enum: ["member", "admin"],
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  userName: {

    type: String,
  },
}, { timestamps: true, versionKey: false });

// Kiểm tra xem model đã tồn tại chưa trước khi tạo mới
const Auth = mongoose.models.Auth || mongoose.model("Auth", schemaAuth);

export default Auth;
