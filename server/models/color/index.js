export default function color(Sequelize, DataTypes) {
    const Color = Sequelize.define("color", {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      storeId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      indexes: [
        {
          fields: ['storeId'],
        },
      ],
    });
  
    Color.associate = (models) => {
      Color.belongsTo(models.store, {
        foreignKey: 'storeId',
        as: 'store',
      });
      Color.hasMany(models.product, {
        foreignKey: 'colorId',
        as: 'products',
      });
    };
  
    return Color;
  };
  