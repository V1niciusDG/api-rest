import { Router } from "express";
import { CidadesController } from "../../controllers";
const router = Router();

router.get("/", (req, res) => {
    return res.send("Olá, dev!");
});

router.post(
    "/cidades",
    CidadesController.createBodyValidator,
    CidadesController.createQueryValidator,
    CidadesController.create
);

export { router };
