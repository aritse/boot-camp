module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  const Todo = sequelize.define("Todo", {
=======
  var Todo = sequelize.define("Todo", {
>>>>>>> upstream/master
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Todo;
};
