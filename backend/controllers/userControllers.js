const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../middlewares/generateToken");
const nodemailer = require("nodemailer");

/*
LIST OF CONTROLLERS
1. Register User
2. Login User
3. Get user Details
4. Update User
5. Apply for instructor
*/

// Register New user
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    isAdmin,
    profilePicture,
    description,
    mobileNumber,
  } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(404);
    throw new Error("User already exists");
  } else {
    const user = await User.create({
      name,
      email,
      password,
      isAdmin,
      profilePicture,
      description,
      mobileNumber,
    });
    // const userId = user._id;

    if (user) {
      const output = `
      '<h2>Welcome to Appname </h2>
    <p>You have registered successfully</p>
    <h3>Your Account Details:</h3>
    <ul>
      <li>Name : ${req.body.name}</li>
      <li>Email : ${req.body.email}</li>
      <li>Mobile Number : ${req.body.mobileNumber}</li>
      <li>Password : ${req.body.password}</li>
    </ul>
    <p>Please save your account details for future references</p>
    <p></p>
    <p>Regards</p>
    <p>Team AppName</p>
  `;
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "vptestemail123@gmail.com", // generated ethereal user
          pass: "BLrhZS_m$_F$48Ar", // generated ethereal password
        },
        // If on localhost
        tls: {
          rejectUnauthorized: false,
        },
        service: "gmail",
      });

      // send mail with defined transport object
      let mailOptions = {
        // from: '"Nodemailer Testing" <raj.sanghavi1@svkmmumbai.onmicrosoft.com>', // sender address
        from: "Team Appname",
        to: `${user.email}`, // list of receivers
        subject: "Registration Successful ✔", // Subject line
        // text: "Hello world?", // plain text body
        // html: "<b>Hello world?</b>", // html body
        html: output,
        // attachments: [
        //   {
        //     path: "/home/ubuntu/MYFOLDER/Cloned/E-Commerce/frontend/public/images/alexa.jpg",
        //   },
        // ],
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.json(error);
        } else {
          console.log("Message sent: %s", info.messageId);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          res.status(200).json({
            success: true,
            emailSuccess: true,
            data: user,
          });
          // res.status(200).json({
          //   _id: user._id,
          //   name: user.name,
          //   email: user.email,
          //   isInstructor: user.isInstructor,
          //   isAdmin: user.isAdmin,
          //   token: generateToken(user._id),
          //   message: "User Register Successful",
          //   emailMessage: "Email Sent",
          // });
          // res.json(req.body);
          // res.json({ msg: "Email sent" });
        }
      });
    } else {
      res.status(404);
      throw new Error("User not created");
    }
  }
});

// Login existing users
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    if (user.isAdmin === false) {
      res.status(200).json({
        success: true,
        data: user,
        token: generateToken(user._id),
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Please visit Admin page.",
      });
      // res.status(404);
      // throw new Error("Please visit Admin/Instructor page.");
    }
  } else {
    res.status(404);
    throw new Error("Invalid email or password.");
  }
});

// User can see his/her details - Protected Route
const getUserDetails = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.status(200).json({
      success: true,
      data: user,
    });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});

// User updates his/her own details - Protected Route
const updateUserDetails = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (req.body.name !== user.name) {
      user.name = req.body.name;
    }
    // if (req.body.email) {
    //   user.email = req.body.email;
    // }
    if (req.body.password) {
      user.password = req.body.password;
    }
    if (
      req.body.profilePicture !== user.profilePicture &&
      req.body.profilePicture !== ""
    ) {
      user.profilePicture = req.body.profilePicture;
    }
    if (req.body.githubLink !== user.githubLink) {
      user.githubLink = req.body.githubLink;
    }
    if (req.body.linkedInLink !== user.linkedInLink) {
      user.linkedInLink = req.body.linkedInLink;
    }
    if (req.body.mobileNumber !== user.mobileNumber) {
      user.mobileNumber = req.body.mobileNumber;
    }
    if (req.body.domains !== user.domains) {
      user.domains = req.body.domains;
    }
    if (req.body.description !== user.description) {
      user.description = req.body.description;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } else {
    res.status(404).json({
      success: false,
    });
  }
});

const sendEventRegistrationEmail = async (req, res) => {
  // get access Token
  // console.log("Logging IN");

  let output = "";

  output += `<p>Hey there,</p>
      <p>Please find the urgent requirements requested by the NGO.</p>`;

  output += `<table style="border: 1px solid #333;width:90%;border-collapse: collapse;margin-bottom:40px">
        <thead>
            <tr>
                <th style="padding-left:120px;">Event Name: Tree plantation drive</th>
                <th>  </th>
            </tr>
        </thead>`;

  output += `
              <tr style="background-color: #dddddd;">
                  <td style="border: 1px solid black;text-align: center;padding: 8px">Total volunteers required</td>
                  <td style="border: 1px solid black;text-align: center;padding: 8px">200</td>
              </tr>
              <tr style="background-color: #dddddd;">
                  <td style="border: 1px solid black;text-align: center;padding: 8px">Fund raising required</td>
                  <td style="border: 1px solid black;text-align: center;padding: 8px">Rs 2,00,000</td>
              </tr>
              <tr style="background-color: #dddddd;">
                  <td style="border: 1px solid black;text-align: center;padding: 8px">Location</td>
                  <td style="border: 1px solid black;text-align: center;padding: 8px">Juhu</td>
              </tr>
          `;
  output += "</table>";

  output =
    output +
    "<p>If you have any queries or concerns in relation to this, please feel free to reach to us.</p><p><strong>Regards</strong></p><p><strong>Team NGO Buddy</strong></p>";

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: `rajsanghavi342@gmail.com`,
      pass: `Sanghavi@_123`,
    },
    // If on localhost
    tls: {
      rejectUnauthorized: false,
    },
    service: "gmail",
  });

  // send mail with defined transport object
  let mailOptions = {
    from: `rajsanghavi342@gmail.com`,
    // to: `mrinal@pharmeasy.in,amit.bhardwaj@pharmeasy.in,somil.jain.17@gmail.com,rajsanghavi9@gmail.com`,
    to: `rajsanghavi9@gmail.com`,
    // to: "rajsanghavi9@gmail.com",
    subject: "Event Alert ✔",
    html: output,
    text: output,
  };
  // mrinal@pharmeasy.in,amit.bhardwaj@pharmeasy.in,somil.jain.17@gmail.com,
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // res.json(error);
      console.log(error);
    } else {
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      console.log("Weekly Report Sent");
      res.status(200).json({
        success: true,
        emailSuccess: true,
        // data: allVehiclesDetails,
      });
    }
  });

  // const to = `amit.bhardwaj@pharmeasy.in,mrinal@pharmeasy.in,ramesheb@pharmeasy.in,sameer.saxena@pharmeasy.in,siddharth.burman@pharmeasy.in,somil.jain.17@gmail.com`
  //   const result = await sendMail(to, "Vehicle Analysis ✔", output, output);
  //   console.log("Message sent: %s", result.messageId);
  //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
  //   console.log("Weekly Report Sent");
  //   res.status(200).json({
  //     success: true,
  //     emailSuccess: true,
  //     // data: allVehiclesDetails,
  //   });
  // res.status(200).json({
  //   success: true,
  //   emailSuccess: true,
  //   // data: temp,
  //   // recipientEmail: recipientEmail,
  // });
  //   }, 7000);
};

module.exports = {
  registerUser,
  userLogin,
  getUserDetails,
  updateUserDetails,
  sendEventRegistrationEmail,
};
