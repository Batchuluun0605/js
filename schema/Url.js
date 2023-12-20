import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
  url: String,
});
const Urls = mongoose.model("Url", UrlSchema);
export default Urls;
