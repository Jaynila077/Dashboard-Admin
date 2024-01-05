export default function size(Sequelize, DataTypes) {
    const Size = Sequelize.define("size", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      storeId: {
        type: DataTypes.UUID,
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

    Size.associate = (models) => {
      Size.belongsTo(models.store, {
        foreignKey: 'storeId',
        as: 'store',
      });
      Size.hasMany(models.product, {
        foreignKey: 'sizeId',
        as: 'products',
      });
    };
  
    return Size;
  };
  