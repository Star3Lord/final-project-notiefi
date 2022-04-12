const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    university: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'University',
    },
    classCode: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
  },
  { timestamps: true }
);

const Class = mongoose.model('Class', schema);

module.exports = Class;