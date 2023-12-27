import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
      })
      .then(() => console.log("mongodb connected"));
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;
