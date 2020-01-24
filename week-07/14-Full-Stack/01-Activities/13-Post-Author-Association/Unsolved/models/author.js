module.exports = function(sequelize, DataTypes) {
  const Author = sequelize.define("Author", {
    name: DataTypes.STRING
  });

  Author.associate = function(models) {
    Author.hasMany(models.Post, {
      onDelete: "CASCADE"
    });
  };

  return Author;
};
