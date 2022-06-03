const express = require("express");

const {
  paymentsToInstructors,
  performPayment,
  payUsingRazorpay,
  payUsingRazorpayy,
} = require("../controllers/payments");

const { protect, adminProtect } = require("../middlewares/protectedRoutes");

const router = express.Router();

// get all payments
router.route("/paymentsToInstructors").get(paymentsToInstructors);

// Perform a payment
router.route("/performPayment").post(performPayment);

// Pay using Razorpay
router.route("/razorpayy").post(payUsingRazorpayy);

// Pay using Razorpay - donations
router.route("/razorpay").post(payUsingRazorpay);

module.exports = router;
