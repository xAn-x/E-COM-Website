// This flie is to vaidate the data inserting in db using mongoose
import mongoose from "mongoose";
const product_schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    // If id will repeat data will not be inserted to our db hence acting as a primary key
    unique: true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const Product = mongoose.model("Product", product_schema);

export default Product;
