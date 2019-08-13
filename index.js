const express = require("express");
const parser = require("body-parser");
const app = express();
const Profile = require('./db/models.js/profile')
const cors = require('cors')


app.use(cors())
app.use(parser.json())


app.get('/', (req,res)=> {
    res.redirect("/profile")
})

app.use("/profile", require("./db/route"));


// app.set("port", process.env.PORT || 4000);

// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });

app.listen(4000, () => {
console.log("app listening on port 4000")

})