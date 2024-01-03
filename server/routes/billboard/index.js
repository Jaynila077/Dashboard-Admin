import express from "express";
import billboardController from "../../controllers/billboards/index.js";
import authenticateToken from "../../middleware/auth.js";

const Billboard = express.Router();

Billboard.get("/:storeId", authenticateToken, billboardController.getBillboard);
Billboard.get("/:id", authenticateToken, billboardController.getBillboardById);
Billboard.post("/:storeId", authenticateToken, billboardController.postBillboard);
Billboard.put("/:id", authenticateToken, billboardController.putBillboard);
Billboard.delete("/:id", authenticateToken, billboardController.removeBillboard);

export default Billboard;