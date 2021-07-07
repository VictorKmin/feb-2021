const { Schema, model } = require('mongoose');

const { dataBaseTablesEnum, userRolesEnum } = require('../constants');

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  age: {
    type: Number,
    default: 15
  },
  password: {
    type: String,
    select: false
  },
  role: {
    type: String,
    enum: Object.values(userRolesEnum),
    default: userRolesEnum.USER
  }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

userSchema.virtual('fullName').get(function() {
  return `${this.name} ${this.email}`;
});

// userSchema.virtual('myCars', {
//   ref: 'Car',
//   localField: '_id',
//   foreignField: 'car_id'
// });
//
// userSchema.pre('find', function() {
//   this.populate('myCars');
// });
//
// userSchema.pre('findOne', function() {
//   this.populate('myCars');
// });

module.exports = model(dataBaseTablesEnum.USER, userSchema);
