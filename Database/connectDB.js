const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB Connected : ${conn.connection.host}`.magenta);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
