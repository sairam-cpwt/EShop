import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    return true;
  } catch (error: unknown) {
    console.log(error);
    return false;
  }
};

export default connect;
