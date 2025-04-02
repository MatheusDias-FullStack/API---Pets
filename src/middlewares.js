import {pets} from './dados.js'

export const validateToCreatePet = (req, res, next)=>{
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
    if(!body.nomeTutor){
        return res.status(400).send({
            ok: false, 
            mensagem: "Está falando o campo nomeTutor"
        })
    }
}