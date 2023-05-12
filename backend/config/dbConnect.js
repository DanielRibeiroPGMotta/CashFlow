const mongoose = require("mongoose");

//connect

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Louie99:lmlSPCxmhLL123@mangodb-demo.vnqj0x9.mongodb.net/income-expenses-app?retryWrites=true&w=majority"
    );
    console.log("Db connected Successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

dbConnect();
