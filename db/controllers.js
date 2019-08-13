const Profile = require("../db/models.js/profile");

module.exports = {
  index: function (req, res) {
    Profile.find({}).then(profiles => res.json(profiles));
  },
  create: function (req, res) {
    Profile.create(req.body).then(profiles => res.json(profiles));
  },
  show: function (req, res) {
    Profile.findById(req.params.id).then(profiles => res.json(profiles));
  },

  update: function (req, res) {
    Profile.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { "name": req.body.name } }).then(profiles => res.json(profiles)

      )
  },

  destroy: function (req, res) {
    Profile.findByIdAndRemove({ _id: req.params.id }).then(profiles =>
      res.send(profiles));
  }
}