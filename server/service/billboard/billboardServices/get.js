import db from "../../../models/index.js";

const all = async () => {
  const billboards = await db.billboard.findAll();
  return billboards;
};

const byStoreId = async (storeId) => {
  const billboards = await db.billboard.findAll({where: { storeId } });
  return billboards;
};

const byId = async (id) => {
  const billboards = await db.billboard.findAll({ where: { id } });
  return billboards;
};

export default {
  all,
  byStoreId,
  byId,
};
