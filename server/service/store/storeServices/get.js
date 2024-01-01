import db from "../../../models/index.js";

const all = async () => {
  const stores = await db.store.findAll();
  return stores;
};

const byId = async (id) => {
  const stores = await db.store.findAll({ where: { id } });
  return stores;
};

export default {
  all,
  byId,
};
