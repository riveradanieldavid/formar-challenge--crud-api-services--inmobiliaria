import { Router } from "express";
import { deletePropiedadController, getAddSolvedController, getAllPropiedadesController, getIdPropiedadesController, getPropiedad, patchPropiedadController } from "../controllers/propiedades.js";


export const propiedadesRouter = Router();

// solicitudes http
propiedadesRouter.get('/',getAllPropiedadesController,getPropiedad);
propiedadesRouter.get('/:id',getIdPropiedadesController,getPropiedad);
propiedadesRouter.post('/agregar',getAddSolvedController);
propiedadesRouter.patch('/:id',patchPropiedadController);
propiedadesRouter.delete('/:id',deletePropiedadController);