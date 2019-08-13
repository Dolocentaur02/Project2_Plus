const mongoose = require("../connection")
const Schema = mongoose.Schema

const Profile = new Schema({
	name: String,
	orderOfThePhoenix: Boolean,
	bloodStatus: String,
	species: String

})

module.exports = mongoose.model("Profile", Profile)