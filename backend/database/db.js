import mongoose from "mongoose";
const Connection = async (userName, password) => {
  try {
    const URL = `mongodb://${userName}:${password}@ac-fesdxqt-shard-00-00.sj5lgtc.mongodb.net:27017,ac-fesdxqt-shard-00-01.sj5lgtc.mongodb.net:27017,ac-fesdxqt-shard-00-02.sj5lgtc.mongodb.net:27017/?ssl=true&replicaSet=atlas-7rm4nx-shard-0&authSource=admin&retryWrites=true&w=majority`;
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected Successfully:)\n\n");
  } catch (error) {
    console.log(`Error while connecting with database\n${error.message}`);
  }
};

export default Connection;
// freakinCode
