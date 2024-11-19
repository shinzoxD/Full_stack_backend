import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "didzyox00",
  api_key: "398772418677731",
  api_secret: "QjZTwTwrcW05rWrhmU21-7Erp8",
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
