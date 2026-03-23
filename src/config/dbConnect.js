import mongoose from "mongoose";

const conectaApi = async () => {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
};

export default conectaApi;