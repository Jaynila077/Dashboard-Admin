import db from "../../../models/index.js";

const remove = async (id) => {
    const stores = await db.store.destroy({ where: { id } });
    return stores;
}

export default {
    remove,
}