import { getBillboardService , postBillboardService , putBillboardService , deleteBillboardService } from "../../service/billboard";

const getBillboard = async (req, res) => {
    try {
        const storeId = req.params.storeId;
        const billboards = await getBillboardService.byStoreId(storeId);
        res.status(200).json({ success: true, data: billboards });
    } catch (err) {
        res.status(500).json(err);
    }
}

const getBillboardById = async (req, res) => {
    try {
        const billboards = await getBillboardService.byId(req.params.id);
        res.status(200).json({ success: true, data: billboards });
    } catch (err) {
        res.status(500).json(err);
    }
}

const postBillboard = async (req, res) => {
    try {
        const storeId = req.params.storeId;
        const {label , imageUrl} = req.body;

        const billboards = await postBillboardService.create({
            label, 
            imageUrl,
            storeId,
          }
        )
        res.status(200).json({ success: true, data: billboards });
    } catch (err) {
        res.status(500).json(err);
    }
}

const putBillboard = async (req, res) => {
    try{
        const storeId = req.params.storeId;
        const {label , imageUrl} = req.body;
        const id = req.params.id;

        const billboards = await putBillboardService.update(id, {
            label, 
            imageUrl,
            storeId,
          }
        )
        res.status(200).json({ success: true, data: billboards });
    }
    catch(err){
        res.status(500).json(err);
    }
}

const removeBillboard = async (req, res) => {
    try{
        const id = req.params.id;
        const billboards = await deleteBillboardService.remove(id);
        res.status(200).json({ success: true, message: "Billboard deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
}

export {
    getBillboard,
    getBillboardById,
    postBillboard,
    putBillboard,
    removeBillboard,
}