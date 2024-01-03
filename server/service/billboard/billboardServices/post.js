import db from "../../../models/index.js";

const create = async (data) => {
    const billboards = await db.billboard.create(data);
    return billboards;
}

export default{
    create,
 };