
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from  'dotenv';

import userRoute from './route/user.route.js'
// import cors from 'cors'
const app = express();

app.use(cors({origin:true}));
app.use(express.json());
// Router.use();
dotenv.config();



const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

// connect to mongoDB server
try {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true,
    });
    console.log("connected mongodb");
} catch (error) {
    console.log("error:",error);
}

app.use("/contactus",userRoute);
app.use("/appointmentus",userRoute);
app.use('/ambulenceus',userRoute)

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
});