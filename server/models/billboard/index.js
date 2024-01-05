export default function billboard(Sequelize, DataTypes) {
    const Billboard = Sequelize.define("billboard", {
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
      label: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      indexes: [
        {
          fields: ['storeId'],
        }
      ],
    });
    
    Billboard.associate = (models) => {
      Billboard.belongsTo(models.store, {
        foreignKey: 'storeId',
        as: 'store',
      });
      Billboard.hasMany(models.category, {
        foreignKey: 'billboardId',
        as: 'categories',
      });
    };
  
    return Billboard;
  };
  