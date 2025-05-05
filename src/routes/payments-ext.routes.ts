import { Router } from "express";
import { generatePayment, generatePayment2, generateWithdrawal, generateWithdrawal2 } from "../controllers/payments-ext.controller";

const router = Router();

router.post('/payments/generate', generatePayment);
router.post('/payments/disbursement', generateWithdrawal);

router.post('/pre-prod/payments/generate', generatePayment2);
router.post('/pre-prod/payments/disbursement', generateWithdrawal2);

export default router;