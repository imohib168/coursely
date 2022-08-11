module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    slogan: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    learning_outcome: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { len: [300, 2000] },
    },
    pre_req: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { len: [2, 300] },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { len: [500, 4000] },
    },
    features: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { len: [200, 500] },
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
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Course.associate = (models) => {
    Course.hasMany(models.Review, {
      onDelete: 'cascade',
    });
  };

  return Course;
};
