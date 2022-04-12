const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    text: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
    comments: [{
        text: {type: mongoose.Schema.Types.String}
    }],
    attachments: [{
      url: { type: mongoose.Schema.Types.String },
    }],
    likes: {
        type: mongoose.Schema.Types.Number,
        required: true,
        default: 0,
      },
    date: {
      type: mongoose.Schema.Types.Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model('Note', schema);

module.exports = Note;
