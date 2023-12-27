import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true },
  course: { type: String, required: true },
});

const Users = model("users", UserSchema);
export default Users;
