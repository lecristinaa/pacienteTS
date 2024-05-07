import { Paciente, Ala, Consultorio } from "./types"
// import * as queue 

// O símbolo de array no 'Paciente' serve para que o objeto possa receber várias pessoas
const paciente: Paciente[] = [
    {
        nome: 'Alan Turing',
        setor: 'Clínico Geral',
    },
    {
        nome: 'Ada Lovelace',
        setor: 'Ortopedista',
    },
    {
        nome: 'Grace Hopper',
        setor: 'Cardiologista',
    },
    {
        nome: 'Linus Torvalds',
        setor: 'Clínico Geral',
    },
    {
        nome: 'Margaret Hamilton',
        setor: 'Clínico Geral',
    },
    {
        nome: 'Tim Berners-Lee',
        setor: 'Cardiologista',
    },
]


function triagem(paciente: Paciente) {
    const prioridades = ['emergência', 'urgente', 'preferencial', 'comum']
    const prioridade = prioridades[Math.floor(Math.random() * prioridades.length)]
    paciente.prioridade = prioridade
    return paciente
}

const consultorio: Ala[] = [
    {
        nome: "triagem",
        fila: paciente,
    },
    {
        nome: "Clínico Geral",
        fila: queue.create(5),
    },
    {
        nome: "Cardiologista",
        fila: queue.create(5),
    },
    {
        nome: "Ortopedista",
        fila: queue.create(5),
    },
]


function triar(paciente: Paciente[]) {
    // Anda por toda a triagem
    for (let i = 0; i < paciente.length; i++) {

        // Passa um paciente pela triagem e recebe uma prioridade
        const pacienteTriado = triagem(paciente[i])

        // Verifica que setor é, colocando ele na fila
        if(pacienteTriado.setor === "Clínico Geral"){
            queue.insert(pacienteTriado, consultorio[1].fila) //Insere na fila do setor
            queue.remove(paciente) //Retira da fila da triagem
            return
        }
        // Deve ter um 'if' para cada setor do consultorio
    }
}