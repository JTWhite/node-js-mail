# Node JS Contact From

Provides a backend to sent an email using Node JS, and Nodemailer module which is a SMTP methods 


# Getting Started 

After cloning the repo you will need to add a `.env` file into the project folder which contains your email and password secrets 
```
EMAIL_USER=<your email>
EMAIL_PASS=<your_password>
```
Note that the current setup is to use Gmail, thus if you wish to use another email you will need to amend the nodemailer transporter object `createTransporter()`.

To run the applicaiton in development mode, run the following command in the terminal 
```
npm run dev
```
This should spin up a localhost server on port 8000
