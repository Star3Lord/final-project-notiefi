const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
      uid: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
    name: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
  },
  { timestamps: true }
);

const University = mongoose.model('Class', schema);

module.exports = University;