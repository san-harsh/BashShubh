const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    // material shape --> circle, square, triangle
    shape: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    color: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },
    length: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true,
    },
    width: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true,
    },
    text: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: 'Category',
      required: true,
    },
    stock: {
      type: Number,
    },
    sold: {
      type: Number,
      default: 0,
    },
    materialCost: {
      type: Number,
      default: 0,
    },
    setupCost: {
      type: Number,
      default: 0,
    },
    jobCost: {
      type: Number,
      default: 0,
    },
    totalCost: {
      type: Number,
      default: 0,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Product", productSchema);
