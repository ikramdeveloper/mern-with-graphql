const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);

  console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
