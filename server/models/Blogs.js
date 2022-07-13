module.exports = (sequelize, DataTypes) => {
  const Blogs = sequelize.define('Blogs', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Blogs.associate = (models) => {
    Blogs.hasMany(models.Comments, {
      onDelete: 'cascade',
    });

    Blogs.hasMany(models.Likes, {
      onDelete: 'cascade',
    });
  };

  return Blogs;
};
