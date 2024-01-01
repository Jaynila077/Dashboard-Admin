export default function store(Sequelize, DataTypes) {
    const Store = Sequelize.define("store", {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Store.associate = (models) => {
      Store.hasMany(models.billboard, {
        foreignKey: 'storeId',
        as: 'billboards',
      });
      Store.hasMany(models.category, {
        foreignKey: 'storeId',
        as: 'categories',
      });
      Store.hasMany(models.product, {
        foreignKey: 'storeId',
        as: 'products',
      });
      Store.hasMany(models.size, {
        foreignKey: 'storeId',
        as: 'sizes',
      });
      Store.hasMany(models.color, {
        foreignKey: 'storeId',
        as: 'colors',
      });
      Store.hasMany(models.order, {
        foreignKey: 'storeId',
        as: 'orders',
      });
    };
  
    return Store;
  };
  