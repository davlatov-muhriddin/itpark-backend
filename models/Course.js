import { model, Schema } from "mongoose";

const CourseSchema = new Schema({
  image: { type: String, required: String },
  title: { type: String, required: String },
  description: { type: String, required: String },
  price: { type: String, required: String },
});

const Courses = model("Course", CourseSchema);

export default Courses;
