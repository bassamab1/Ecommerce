const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: Number,
      },
    ],
    totalPrice: Number,
   status: {
  type: String,
  enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
  default: "Pending",
},

  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
