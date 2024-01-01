import sequelize from "../initializer/db.js";
import { DataTypes } from "sequelize";
import user from "./user/index.js";
import store from "./store/index.js";
import billboard from "./billboard/index.js"; 
import product from "./product/index.js";
import category from "./category/index.js";
import order from "./order/index.js";
import orderItem from "./order/orderItem/index.js";
import color from "./color/index.js";
import size from "./size/index.js";
import image from "./image/index.js";

const db={};

function connectModels() {
  db.user=user(sequelize, DataTypes);
  db.store=store(sequelize, DataTypes);
  db.billboard=billboard(sequelize, DataTypes);
  db.product=product(sequelize, DataTypes);
  db.category=category(sequelize, DataTypes);
  db.order=order(sequelize, DataTypes);
  db.orderItem=orderItem(sequelize, DataTypes);
  db.color=color(sequelize, DataTypes);
  db.size=size(sequelize, DataTypes);
  db.image=image(sequelize, DataTypes);
}

connectModels();
db.sequelize = sequelize;

export default db;