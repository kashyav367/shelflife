import { Router } from "express"
import * as controller from "./auth-controller.js"

const router = Router();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/refresh", controller.refresh);
router.get("/getme", authMiddleware, controller.getMe)
router.get("/logout", authMiddleware, controller.logout)

export default router;
