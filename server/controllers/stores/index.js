import { getStoreService, putStoreService, postStoreService , deleteStoreService } from "../../service/user";

const postStore = async (req, res) => {

    try {
        const userId = req.user;
        const name = req.body;
        
        const stores = await postStoreService.create({data: {
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