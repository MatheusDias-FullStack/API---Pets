import {pets} from './dados.js'

export const validateToCreatePet = (req, res, next)=>{
    try{
        const body = req.body
        if(!body.nome){
            return res.status(400).send({
                ok: false, 
                mensagem: "Está falando o campo nome"
            })
        }
        if(!body.idade){
            return res.status(400).send({
                ok: false, 
                mensagem: "Está falando o campo idade"
            })
        }
        if(!body.raca){
            return res.status(400).send({
                ok: false, 
                mensagem: "Está falando o campo raca"
            })
        }
        if(!body.nomeTutor){
            return res.status(400).send({
                ok: false, 
                mensagem: "Está falando o campo nomeTutor"
            })
        }
        next()
    }catch(error){
        res.status(500).send({
            ok: false,
            mensagem: error.toString()
    })
    }
}