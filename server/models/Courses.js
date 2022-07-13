module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    slogan: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    learning_outcome: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    pre_req: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(4000),
      allowNull: false,
      validate: { len: [500, 4000] },
    },
    features: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Course.associate = (models) => {
  //   Course.hasMany(models.Enroll, {
  //     onDelete: 'cascade',
  //   });
  // };

  return Course;
};
