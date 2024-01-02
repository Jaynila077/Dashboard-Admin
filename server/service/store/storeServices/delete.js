import db from "../../../models/index.js";

const remove = async (id , userId) => {
    const stores = await db.store.destroy(userId,{ where: { id } });
    return stores;
}

export default {
    remove,
}