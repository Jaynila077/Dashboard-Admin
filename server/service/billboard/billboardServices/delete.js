import db from "../../../models/index.js";

const remove = async (id , userId) => {
    const billboards = await db.billboard.destroy(userId,{ where: { id } });
    return billboards;
}

export default {
    remove,
}