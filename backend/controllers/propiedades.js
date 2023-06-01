import { addPropiedad, deletePropiedad, getAllPropiedades,getIdPropiedades,patchPropiedad } from "../services/propiedades.js";

// consulta get
export const getAllPropiedadesController = (req,res,next)=>{
    getAllPropiedades(req,res,next)
}
export const getIdPropiedadesController = (req,res,next)=>{
    getIdPropiedades(req,res,next)
}
export const getPropiedad = (req, res) => {
    const results = req.results;
    res.json(results)
}

// consulta add
export const getAddSolvedController= (req,res,next)=>{
    addPropiedad(req,res,next);
    res.json({status:'ok'})
}

// consulta update
export const patchPropiedadController = (req,res,next)=>{
    patchPropiedad(req,res,next);
    res.json({status:"ok"})
}

// consulta eliminar
export const deletePropiedadController = (req,res,next)=>{
    deletePropiedad(req,res,next)
    res.json({status:'ok'})
}