import { Router } from "express";
import { getAllTrainers, registerTrainer, loginTrainer, getTrainerBySession } from "../controllers/pokemonTrainerController";

const router = Router();

router.post('/trainer/registerTrainer', registerTrainer);
router.get('/trainer/getAllTrainers', getAllTrainers);
router.post('/trainer/trainerLogin', loginTrainer);
router.get('/trainer/trainerSession', getTrainerBySession);


export default router;