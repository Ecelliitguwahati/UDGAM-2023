const PORT = process.env.PORT || 8000;
const express = require('express'); 
const app = express();
const {mongoClient, MongoClient} = require('mongodb');
const {v4: uuidv4} = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
const Razorpay = require('razorpay');
const saltRounds = 10;
const mongoose = require('mongoose');
require('dotenv').config();

// const url = process.env.URI
const url =PROCESS.env.URI
app.use(express.json());
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(url,connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


app.use(cors());

app.use(express.json({exrended:false}));


app.get('/',(req,res)=>{
    res.json('hello this is raj');
})

//schema for payment
const OrderSchema = new mongoose.Schema({
     isPaid: Boolean,
     amount: Number,
     razorpay:{
        orderId: String,
        paymentId: String,
        signature: String
     },
   }); 

const Order = mongoose.model('Order', OrderSchema);

app.get('get-razorpay-key',(req,res)=>{
    res.send({key:process.env.RAZORPAY_KEY_ID});
})
app.get('/get-razorpay-key', (req, res) => {
    res.send({ key: process.env.RAZORPAY_KEY_ID });
  });
  
app.post('/create-order', async (req, res) => {
    try {
      const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
      });
      const options = {
        amount: req.body.amount,
        currency: 'INR',
      };
      const order = await instance.orders.create(options);
      if (!order) return res.status(500).send('Some error occured');
      res.send(order);
    } catch (error) {
      res.status(500).send(error);
    }
});
  
app.post('/pay-order', async (req, res) => {
    try {
      const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
        req.body;
      const newOrder = Order({
        isPaid: true,
        amount: amount,
        razorpay: {
          orderId: razorpayOrderId,
          paymentId: razorpayPaymentId,
          signature: razorpaySignature,
        },
      });
      await newOrder.save();
      res.send({
        msg: 'Payment was successfull',
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
});
//register

app.post('/register',async(req,res)=>{
    const client = new MongoClient(url);
    const  {lastName,firstName,outlook,rollNo,email,password} = req.body;

    const generatedId = uuidv4();
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password,salt);
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            try{
                 client.connect();
                const database = client.db('app-data');
                const users = database.collection('usersData');
      
                const existingUser =  users.findOne({email});
      
                if(existingUser){
                    console.log('user already exists');
                    return res.status(409).send('User already exists');
                   
                }
                 const sanitizedEmail =  email// === 'string' ? email.toLowerCase() : '';

                const sanitizedName = firstName
                const sanitizedLastname = lastName 
                
      
                const data = {
                    
                    user_id : generatedId,
                    firstName:sanitizedName,
                    lastName:sanitizedLastname,
                    outlook:outlook,
                    rollno:rollNo,
                    email:sanitizedEmail,
                    hashedPassword:hash,
                }
                 users.insertOne(data);

      
                res.status(201).json({userId:generatedId});
                console.log('user created');
                console.log(data);
          }catch(err){
              console.log(err);
          }
        });
    });
    

    // try{
    //       await client.connect();
    //       const database = client.db('app-data');
    //       const users = database.collection('usersData');

    //       const existingUser = await users.findOne({email});

    //       if(existingUser){
    //           return res.status(409).send('User already exists');
    //       }
    //       const sanitizedEmail = email.toLowerCase();
    //       const sanitizedName = name.toLowerCase();
    //       const sanitizedLastname = lastname.toLowerCase();
    //       const sanitizedOutlook = outlook.toLowerCase();
    //       const sanitizedRollno = rollno.toString();

    //       const data = {
              
    //           user_id : generatedId,
    //           firstName:sanitizedName,
    //           lastName:sanitizedLastname,
    //           outLook:sanitizedOutlook,
    //           rollNo:sanitizedRollno,
    //           email:sanitizedEmail,
    //           hashedPassword:hashedPassword
    //       }
    //       const insertedUser = await users.insertOne(data);

    //       const token = jwt.sign(insertedUser,sanitizedEmail,{
    //         expiresIn:60*24
    //       })

    //       res.status(201).json({token,userId:generatedId});
    // }catch(err){
    //     console.log(err);
    // }finally{
    //     await client.close();
    // }

})


app.listen(PORT,()=> {
    console.log('server is running on port '  + PORT);
})