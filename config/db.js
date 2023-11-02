const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.tvqfw4d.mongodb.net/social-media-project"
  )
  .then(() => console.log("Connexted to mongoDB"))
  .catch((err) => console.log("Failed to connect to mongoDB", err));
