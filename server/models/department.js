var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DepartmentSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 5000,
  },
});

DepartmentSchema.virtual('url').get(function () {
  return '/catalog/department/' + this._id;
});

//Export model
module.exports = mongoose.model('Department', DepartmentSchema);