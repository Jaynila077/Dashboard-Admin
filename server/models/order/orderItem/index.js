export default function orderItem(Sequelize, DataTypes) {
    const OrderItem = Sequelize.define("orderItem", {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      orderId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      productId: {
        type: DataTypes.UUID,
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
  