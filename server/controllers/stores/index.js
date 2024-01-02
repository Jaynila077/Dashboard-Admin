import { getStoreService, putStoreService, postStoreService , deleteStoreService } from "../../service/store"; 

const getStore = async (req, res) => {
    try {
        const userId = req.user;
        const stores = await getStoreService.byUserId(userId);
        res.status(200).json({ success: true, data: stores });
    } catch (err) {
        res.status(500).json(err);
    }
}
const getStoreById = async (req, res) => {
    try {
        const id = req.params.id;
        const stores = await getStoreService.byId(id);
        res.status(200).json({ success: true, data: stores });
    } catch (err) {
        res.status(500).json(err);
    }
}
const postStore = async (req, res) => {

    try {
        const userId = req.user;
        const name = req.body.name;
        
        const stores = await postStoreService.create({
            name,
            userId,
          }
        )
        res.status(200).json({ success: true, data: stores });
    } catch (err) {
        res.status(500).json(err);
    }
}

const putStore = async (req, res) => {
    try{
        const userId = req.user;
        const name = req.body.name;
        const id = req.params.id;

        const stores = await putStoreService.update(id, {
            name,
            userId,
          }
        )
        res.status(200).json({ success: true, data: stores });
    }
    catch(err){
        res.status(500).json(err);
    }
}

const removeStore = async (req, res) => {
    try{
        const userId = req.user;
        const id = req.params.id;
        const stores = await deleteStoreService.remove(id, userId);
        res.status(200).json({ success: true, message: "Store deleted" });
    }
    catch(err){
        res.status(500).json(err);
    }
}


export default { 
  postStore, 
  getStore,
  getStoreById,
  putStore,
  removeStore, 
};
