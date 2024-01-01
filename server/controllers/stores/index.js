import { getStoreService, putStoreService, postStoreService , deleteStoreService } from "../../service/store";  //also write index.js in services/store to export all services

const postStore = async (req, res) => {

    try {
        const userId = req.user;
        const name = req.body.name;
        
        const stores = await postStoreService.create({
            name,
            userId,
          }}
        );
        res.status(200).json({ success: true, data: stores });
    } catch (err) {
        res.status(500).json(err);
    }
}


export default { postStore };
