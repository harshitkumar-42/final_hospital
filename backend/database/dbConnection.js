import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "HARSHIT_HOSPITAL",
    }).then(() => {
        console.log("Successfully connected to database!");
    }).catch((err) => {
        console.log(`Error occured while connecting to the database : ${err}`);
    })
}