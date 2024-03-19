require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT;

const DB = process.env.DATABASE;

mongoose.connect(DB, {
  useNewUrlParser: true,
  

}).then((con) => {
  console.log("connection ke database sukses");
  console.log(con.connection);
});

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
  },
  email: {
    type: String,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  city: String,
  country: {
    type: String,
    required: true,
    default: "indonesia",
  },
});

const Customer = mongoose.model("Custumer", customerSchema);

const customerTest = new Customer({
  name: "Naufalady",
  email: "naufal123@gmail.com",
  phoneNumber: "0820203934",
});

customerTest
.save()
.then((doc) => {
  console.log(doc);
})
.catch((err) => {
  console.log("ERROR : " + err);
});

app.listen(PORT, () => {
  console.log(`APP running on port : ${PORT}`);
});
