export default function image(Sequelize, DataTypes) {
    const Image = Sequelize.define("image", {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      productId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      indexes: [
        {
          fields: ['productId'],
        },
      ],
    });
    Image.associate = (models) => {
      Image.belongsTo(models.product, {
        foreignKey: 'productId',
        as: 'product',
        onDelete: 'CASCADE', // delete image if product is deleted
      });
    };
  
    return Image;
  };
  