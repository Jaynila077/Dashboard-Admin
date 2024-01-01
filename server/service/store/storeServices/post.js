import db from "../../../models/index.js";

const create = async (data) => {
    const stores = await db.store.create(data);
    return stores;
}

export default{
   create,
};