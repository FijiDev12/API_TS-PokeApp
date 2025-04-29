import { Router } from "express";
import { generatePayment, generateWithdrawal } from "../controllers/payments-ext.controller";

const router = Router();

router.post('/payments/generate', generatePayment);
router.post('/payments/disbursement', generateWithdrawal);

export default router;