require('dotenv').config();
const nodemailer = require("nodemailer");
const express = require("express");
const { getMaxListeners } = require("process");
const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/contact-form.html");
})



app.post("/", (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS 
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL_USER,
        subject: req.body.subject,
        text: req.body.content
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send("error");
        }else{
            console.log("Email Sent");
            res.send("success");
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})