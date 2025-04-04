import { randomUUID } from "crypto"
export const pets = [
    {
        id: randomUUID(),
        nome: "kelvin",
        idade: 12,
        raca: "golden",
        nomeTutor: "Anderson"
    },
    {
        id: randomUUID(),
        nome: "jojo",
        idade: 5,
        raca: "pincher",
        nomeTutor: "Joelma"
    }
]