import { Request, Response } from 'express';
import { pool } from '../config/db';


export const registerTrainer = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, age, hometown, badges = 0 } = req.body;
        console.log(req.body);
  if (!name || !age || !hometown) {
    res.status(400).json({ message: 'Missing required trainer information.' });
    return;
  }

  try {
    await pool.query(
      'CALL proc_register_trainer($1, $2, $3, $4)',
      [name, age, hometown, badges]
    );
    res.status(201).json({ message: `Trainer ${name} registered.` });
  } catch (err: any) {
    console.error('registerTrainer error:', err.message);
    res.status(500).json({ message: 'Failed to register trainer.' });
  }
};

export const getAllTrainers = async (req: Request, res: Response): Promise<void> => {
  const city = req.query.city || 'All';
    console.log(city);
  try {
    const { rows } = await pool.query('SELECT * FROM func_get_trainers_by_city($1)', [city]);
    res.status(200).json(rows);
  } catch (err: any) {
    res.status(500).json({Error: err.message});
    console.error('getAllTrainers error:', err.message);
    res.status(500).json({ message: 'Failed to retrieve trainers.' });
  }
};

export const loginTrainer = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      `SELECT * FROM func_login_trainer($1, $2)`,
      [username, password]
    );

    const { session_token, message } = result.rows[0];

    if (!session_token) {
      return res.status(401).json({ message });
    }

    res.status(200).json({ session_token, message });
  } catch (err: any) {
    console.error('Login error:', err.message);
    res.status(500).json({ Error: 'Login failed' });
  }
};

export const getTrainerBySession = async (req: Request, res: Response) => {
  const token = (req.query.token as string)?.trim();

  if (!token) {
    return res.status(400).json({ message: 'Session token is required.' });
  }

  try {
    const { rows } = await pool.query(
      'SELECT * FROM func_get_trainer_by_session($1)',
      [token]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid or expired session.' });
    }

    res.status(200).json(rows[0]);
  } catch (err: any) {
    console.error('Session check error:', err.message);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
