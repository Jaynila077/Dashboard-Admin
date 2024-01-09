import db from "../../../models/index.js";

const remove = async (id , userId) => {
    const categories = await db.category.destroy(userId,{ where: { id } });
    return categories;
}

export default {
    remove,
}