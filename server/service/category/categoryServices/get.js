import db from "../../../models/index.js";

const all = async () => {
  const categories = await db.category.findAll();
  return categories;
};

const byStoreId = async (storeId) => {
  const categories = await db.category.findAll({where: { storeId } });
  return categories;
};

const byId = async (id) => {
  const categories = await db.category.findAll({ where: { id } });
  return categories;
};

export default {
  all,
  byStoreId,
  byId,
};
