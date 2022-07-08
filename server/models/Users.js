module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: { type: DataTypes.INTEGER },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    githubURL: { type: DataTypes.STRING },
    linkedinURL: { type: DataTypes.STRING },
    facebookURL: { type: DataTypes.STRING },
    bio: { type: DataTypes.STRING },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Blogs, {
      onDelete: 'cascade',
    });

    Users.hasMany(models.Likes, {
      onDelete: 'cascade',
    });
  };

  return Users;
};
