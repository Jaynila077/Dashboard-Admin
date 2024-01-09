import db from "../../../models/index.js";

const create = async (data) => {
    const categories = await db.category.create(data);
    return categories;
}

export default{
   create,
};