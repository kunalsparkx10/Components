const asyncHandler = require("express-async-handler");
const DonationPayment = require("../models/donations");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const { response } = require("express");

const razorpay = new Razorpay({
  key_id: "rzp_test_vdRitP9HytsLLm",
  key_secret: "6oZe0Fxk0CoNGDbs9BNDzk6S",
});
/*
LIST OF CONTROLLERS
1. paymentsToInstructors
2. perform a payment
3. Pay using razorpay
*/

// 1. Get all  paytments to Instructors -
const paymentsToInstructors = asyncHandler(async (req, res) => {
  const DonationPayment = await DonationPayment.find({}).populate(
    "userId",
    "name email"
  );
  res.status(200).json({
    success: true,
    data: DonationPayment,
  });
});

const performPayment = asyncHandler(async (req, res) => {
  const {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    instructorId,
    amount,
  } = req.body;
  const payment = new DonationPayment({
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    instructorId,
    amount: amount,
  });
  await payment.save();
  return res.status(200).json({
    success: true,
    data: payment,
  });
});

// Payment gateway using Razorpay
const payUsingRazorpayy = async (req, res) => {
  const { count, id } = req.body;
  console.log(count);
  const payment_capture = 1;
  const amount = count;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    // console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};

// Payment gateway using Razorpay
const payUsingRazorpay = async (req, res) => {
  const payment_capture = 1;
  const amount = 1499;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    // console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  paymentsToInstructors,
  performPayment,
  payUsingRazorpayy,
  payUsingRazorpay,
};
