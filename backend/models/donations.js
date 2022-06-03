const mongoose = require("mongoose");

const DonationPaymentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    amount: {
      type: Number,
      required: true,
      default: 499,
    },
    date: {
      type: Date,
      default: new Date(),
      required: true,
    },
    razorpay_payment_id: {
      type: String,
      required: true,
    },
    razorpay_order_id: {
      type: String,
      required: true,
    },
    razorpay_signature: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DonationPayment = mongoose.model(
  "DonationPayment",
  DonationPaymentSchema
);

module.exports = DonationPayment;
