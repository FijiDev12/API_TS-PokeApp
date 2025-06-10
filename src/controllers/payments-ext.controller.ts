import crypto from 'crypto';
import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { validatePaymentData } from '../validators/paymentValidator';

dotenv.config();

const algorithm = process.env.ALGORITHM || 'aes-256-cbc';
const keyHex = process.env.KEY || '';
const ivHex = process.env.IV || '';

const key = Buffer.from(keyHex, 'hex');
const iv = Buffer.from(ivHex, 'hex');

if (key.length !== 32) {
    throw new Error('Invalid KEY length. Expected 32 bytes for AES-256.');
}
if (iv.length !== 16) {
    throw new Error('Invalid IV length. Expected 16 bytes for AES-CBC.');
}

function aesDecrypt(encryptedHex: string): string {
    const encryptedBuffer = Buffer.from(encryptedHex, 'hex');

    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const decrypted = Buffer.concat([
        decipher.update(encryptedBuffer),
        decipher.final(),
    ]);

    return decrypted.toString('utf8');
}

export const generatePayment = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;
    
    try {
        if (!body?.data) {
            res.status(400).json({
                code: 400,
                message: 'Bad request. Missing "data" field.',
            });
            return;
        }

        const decryptedText = aesDecrypt(body.data);
        const parsedData = JSON.parse(decryptedText);
        
        const validationError = validatePaymentData(parsedData);
        if (validationError) {
            res.status(400).json({
                code: 400,
                message: validationError,
            });
            return;
        }

        res.status(200).json({
            code: 200,
            message: `${process.env.PAY_URL}/payment?d=${body.data}`
        });
    } catch (error) {
        console.error('generatePayment error:', error);

        res.status(500).json({
            code: 500,
            message: 'Internal server error.',
        });
    }
};

export const generateWithdrawal = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;
    
    try {
        if (!body?.data) {
            res.status(400).json({
                code: 400,
                message: 'Bad request. Missing "data" field.',
            });
            return;
        }

        const decryptedText = aesDecrypt(body.data);
        const parsedData = JSON.parse(decryptedText);
        
        const validationError = validatePaymentData(parsedData);
        if (validationError) {
            res.status(400).json({
                code: 400,
                message: validationError,
            });
            return;
        }

        res.status(200).json({
            code: 200,
            message: `${process.env.PAY_URL}/payout?d=${body.data}`
        });
    } catch (error) {
        console.error('generateWithdrawal error:', error);

        res.status(500).json({
            code: 500,
            message: 'Internal server error.',
        });
    }
};

export const generatePayment2 = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;
    
    try {
        if (!body?.data) {
            res.status(400).json({
                code: 400,
                message: 'Bad request. Missing "data" field.',
            });
            return;
        }

        const decryptedText = aesDecrypt(body.data);
        const parsedData = JSON.parse(decryptedText);
        
        const validationError = validatePaymentData(parsedData);
        if (validationError) {
            res.status(400).json({
                code: 400,
                message: validationError,
            });
            return;
        }

        res.status(200).json({
            code: 200,
            message: `${process.env.PREPROD_PAY_URL}/payment?d=${body.data}`
        });
    } catch (error) {
        console.error('generatePayment2 error:', error);

        res.status(500).json({
            code: 500,
            message: 'Internal server error.',
        });
    }
};

export const generateWithdrawal2 = async (req: Request, res: Response): Promise<void> => {
    const { body } = req;
    
    try {
        if (!body?.data) {
            res.status(400).json({
                code: 400,
                message: 'Bad request. Missing "data" field.',
            });
            return;
        }

        const decryptedText = aesDecrypt(body.data);
        const parsedData = JSON.parse(decryptedText);
        
        const validationError = validatePaymentData(parsedData);
        if (validationError) {
            res.status(400).json({
                code: 400,
                message: validationError,
            });
            return;
        }

        res.status(200).json({
            code: 200,
            message: `${process.env.PREPROD_PAY_URL}/payout?d=${body.data}`
        });
    } catch (error) {
        console.error('generateWithdrawal2 error:', error);

        res.status(500).json({
            code: 500,
            message: 'Internal server error.',
        });
    }
};