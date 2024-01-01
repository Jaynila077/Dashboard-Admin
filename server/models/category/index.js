export default function category(Sequelize, DataTypes) {
    const Category = Sequelize.define("category", {
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
      billboardId: {
        type: DataTypes.STRING,
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
        {
          fields: ['billboardId'],
        },
      ],
    });
  
    Category.associate = (models) => {
      Category.belongsTo(models.store, {
        foreignKey: 'storeId',
        as: 'store',
      });
      Category.belongsTo(models.billboard, {
        foreignKey: 'billboardId',
        as: 'billboard',
      });
      Category.hasMany(models.product, {
        foreignKey: 'categoryId',
        as: 'products',
      });
    };
  
    return Category;
  };
  