const express = require("express");
const router = new express.Router();

const roomsApi = require("../models/Booked");
const bookedApi = require("../models/Booked");
const { EMAIL, PASSWORD } = require("./env.js");

const User = require('../models/userLogin');



//for eamil section nodemailer
const nodemailer = require('nodemailer');






router.post("/BookedData", async (req,res) => {
    
    userEmail = req.body.email;
          
//for set detail on email 
    async function findUserByEmail() {
        try {
          const user = await User.findOne({ email: userEmail }).exec();
      
          if (!user) {
            console.log('User not found');
            // Handle the case where the user is not found
          } else {
            // console.log('Found user:', user);
            // Use the user object as needed
            const userName = user.name;
            const userEmail = user.email;
            const userAddress = user.address;
            const userNumber = user.number;
            // ... perform actions with user data
            // console.log(userName)



              //for owner email
            const ownerEmail = req.body.owneremail;
            const clientEmail = userEmail;
            const clientsNumber = userNumber;
            const clientsName = userName;
            const clientsAddress = userAddress;


    //   console.log(clientsNumber);

    
            //for sent mail
                //from doucmetn site method
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com.",
            port: 465,
            secure: true,
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: EMAIL,
              pass: PASSWORD,
            },
          });

          const info = await transporter.sendMail({
            from: 'EMAIL', // sender address
            to: ownerEmail, // list of receivers
            subject: "Room booked✔", // Subject line
            body: `Your room has been booked by`, // plain text body
            html: `<b>Your Room has been Booked by ${clientsName}</b><br>
            <b>Client Number is ${clientsNumber} </b><br>
            <b> Client emailaddress is ${clientEmail}</br><br>
            <b>from ${clientsAddress}</b>`, // html body
          });
        
          console.log("Message sent: %s", info.messageId);

  

      //  //for data store 
    
    //--to enter data in database
    try {
      // await userLog.create({   

      let bookedData = await new bookedApi({
        name: req.body.name,
        Buyername: clientsName,
        price: req.body.price,
        email: clientEmail,
        address: clientsAddress,
        image: req.body.image,
        number: clientsNumber
      }).save();


      // res.status(201).send(userLogin);
      res.json({success:true});
  } catch (err) {
      // res.status(400).send(err);
      // res.json({success:false});
      console.log(err);
  } 
    // const booked = await bookedData.save();




          }
        } catch (err) {
          console.error('Error:', err);
          // Handle the error here
        }
      }
      
      findUserByEmail();

    
    


});


module.exports = router; 
