import mongoose from "mongoose";

const connectDB = async () => {

    if(mongoose.connection.readyState) {
        console.log("Already MongoDB Connected...!");
        return;
    }
    mongoose.connect(
        "mongodb+srv://prateeksingh6125:prateek12345@cluster0.sdvxt.mongodb.net/", {
            dbName:"Ecommerce_cartb",
        }
    )
    .then(msg=> console.log("MongoDB Connected Successfully,,,!"))
    .catch((err) => console.log(err.message));
};

export default connectDB;