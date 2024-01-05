export default function category(Sequelize, DataTypes) {
    const Category = Sequelize.define("category", {
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
    }, {
      indexes: [
        {
          fields: ['storeId'],
        },
      ],
    });
  
    Category.associate = (models) => {
      Category.belongsTo(models.store, {
        foreignKey: 'storeId',
        as: 'store',
      });
      Category.hasMany(models.product, {
        foreignKey: 'categoryId',
        as: 'products',
      });
    };
  
    return Category;
  };
  