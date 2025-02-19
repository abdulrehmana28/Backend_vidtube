import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controllers.js";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = Router();

router.route("/").get(healthCheck);

export { router };

