export default function user (Sequelize, DataTypes) {
  const User = Sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    paranoid: true,
    tableName: "tb_user"
  });
  User.associate = (models) => {
    User.hasMany(models.store, {
      foreignKey: 'userId',
      as: 'stores',
    })
  };

  return User;
};
