module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reviewText: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { len: [10, 100] },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Review;
};
