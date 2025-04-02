import { randomUUID } from "crypto"
export const pets = [
    {
        id: randomUUID(),
        nome: "kelvin",
        idade: 12,
        nomeTutor: "Anderson"
    },
    {
        id: randomUUID(),
        nome: "jojo",
        idade: 5,
        nomeTutor: "Joelma"
    }
]