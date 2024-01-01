export default function orderItem(Sequelize, DataTypes) {
    const OrderItem = Sequelize.define("orderItem", {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      orderId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      indexes: [
        {
          fields: ['orderId'],
        },
        {
          fields: ['productId'],
        },
      ],
    });
  
    OrderItem.associate = (models) => {
      OrderItem.belongsTo(models.order, {
        foreignKey: 'orderId',
        as: 'order',
      });
      OrderItem.belongsTo(models.product, {
        foreignKey: 'productId',
        as: 'product',
      });
    };
  
    return OrderItem;
  };
  