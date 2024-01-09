import db from "../../../models/index.js";

const update = async (id, data) => {
    const categories = await db.category.update(data, { where: { id } });
    return categories;
}

export default {
    update,
}