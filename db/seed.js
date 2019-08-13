const Profile = require("../models.js/profile")
const info = require("./info.json")

Profile.deleteMany({})
  .then(() => {
    Profile.create(info)
      .then((profile) => {
        console.log(profile)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })