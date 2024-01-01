export default function order(Sequelize, DataTypes) {
    const Order = Sequelize.define("order", {
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
      isPaid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      phone: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      address: {
        type: DataTypes.STRING,
        defaultValue: "",
      }
    }, {
      indexes: [
        {
          fields: ['storeId'],
        },
      ],
    });
    Order.associate = (models) => {
      Order.belongsTo(models.store, {
        foreignKey: 'storeId',
        as: 'store',
      });
      Order.hasMany(models.orderItem, {
        foreignKey: 'orderId',
        as: 'orderItems',
      });
    };
  
    return Order;
  };
  