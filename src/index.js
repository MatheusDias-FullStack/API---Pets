import express from 'express'
import * as dotenv from 'dotenv'
import { randomUUID } from 'crypto'
import cors from 'cors'
import {pets} from './dados.js'
import { validateToCreatePet } from './middlewares.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const porta = process.env.PORT
app.listen(porta, ()=>{
    console.log('servidor rodando na porta: '+ porta);
    
})
// Listar pets
app.get("/pets", (req, res)=>{
    try{
        res.status(200).send({
            ok: true,
            mensagem: "Pets listados",
            dados: pets
        })
    }catch(error){
        res.status(500).send({
            ok:false,
            mensagem: error.toString()
        })
    }
})
app.post("/pets", [validateToCreatePet], (req, res)=>{
    try{
        const body = req.body
    
        const newPet = {
            id: randomUUID(),
            nome: body.nome,
            idade: body.idade,
            nomeTutor: body.nomeTutor
        }
        pets.push(newPet)
        res.status(201).send({
            ok:true,
            mensagem: "Pet inserido com sucesso",
            dados: newPet
        })
    }catch(error){
        res.status(500).send({
            ok:false,
            mensagem: error.toString()
        })
    }
    
})
app.get("/pets/:id", (req, res)=>{
    try{
        const {id} = req.params
        const pet = pets.find(item=> item.id === id)
        res.status(200).send({
            ok:true, 
            mensagem: "Pet encontrado",
            dados: pet
        })
    }catch(error){
            res.status(500).send({
                ok:false,
                mensagem: error.toString()
            })
        }
})  
app.put("/pets/:id", (req, res)=>{
    try{
        const {id} = req.params
        const pet = pets.find(item=> item.id === id)
        if(!pet){
            return res.status(404).send({
                ok:false,
                mensagem: "Pet nao encontrado"
            })
        }
        const body = req.body

        pet.nome = body.nome
        pet.idade = body.idade
        pet.nomeTutor = body.nomeTutor
        
        res.status(200).send({
            ok:true,
            mensagem: "Pet atualizado com sucesso",
            dados: pet
        })
    }catch(error){
        res.status(500).send({
            ok:false,
            mensagem: error.toString()
        })
    }
})
app.delete("/pets/:id", (req, res)=>{
    try{
        const {id} = req.params
        const petIndex = pets.findIndex(item=> item.id === id)
        if(petIndex < 0 ){
             return res.status(404).send({
                 ok:false,
                 mensagem: "Pet nao encontrado"
             })
        }
        pets.splice(petIndex, 1)
    }catch(error){
        res.status(500).send({
            ok:false,
            mensagem: error.toString()
        })
    }
})