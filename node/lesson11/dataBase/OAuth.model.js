const { Schema, model } = require('mongoose');

const { dataBaseTablesEnum } = require('../constants');

const oAuthSchema = new Schema({
  accessToken: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: dataBaseTablesEnum.USER
  },
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

oAuthSchema.pre('find', function() {
  this.populate('user');
});

oAuthSchema.pre('findOne', function() {
  this.populate('user');
});

module.exports = model(dataBaseTablesEnum.O_AUTH, oAuthSchema);
