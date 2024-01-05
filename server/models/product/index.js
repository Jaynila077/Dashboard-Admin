export default function product(Sequelize, DataTypes) {
    const Product = Sequelize.define("product", {
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
      categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      isFeatured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isArchived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      sizeId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      colorId: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      indexes: [
        {
          fields: ['storeId'],
        },
        {
          fields: ['categoryId'],
        },
        {
          fields: ['sizeId'],
        },
        {
          fields: ['colorId'],
        },
      ],
    });
  
    Product.associate = (models) => {
      Product.belongsTo(models.store, {
        foreignKey: 'storeId',
        as: 'store',
      });
      Product.belongsTo(models.category, {
        foreignKey: 'categoryId',
        as: 'category',
      });
      Product.belongsTo(models.size, {
        foreignKey: 'sizeId',
        as: 'size',
      });
      Product.belongsTo(models.color, {
        foreignKey: 'colorId',
        as: 'color',
      });
      Product.hasMany(models.image, {
        foreignKey: 'productId',
        as: 'images',
      });
      Product.hasMany(models.orderItem, {
        foreignKey: 'productId',
        as: 'orderItems',
      });
    };
  
    return Product;
  };
  