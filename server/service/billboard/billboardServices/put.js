import db from "../../../models/index.js";

const update = async (id, data) => {
    const billboards = await db.billboard.update(data, { where: { id } });
    return billboards;
}

export default {
    update,
}