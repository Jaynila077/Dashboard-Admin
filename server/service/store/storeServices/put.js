import db from "../../../models/index.js";

const update = async (id, data) => {
    const stores = await db.store.update(data, { where: { id } });
    return stores;
}

export default {
    update,
}