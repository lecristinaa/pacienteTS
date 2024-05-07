export interface Paciente{
    nome: string
    setor: string
    prioridade?: string

    // prioridade?: "emergencia" | "urgencia" | "preferencial" | "normal"
    // Objeto paciente pode ou não ter o campo 'Prioridade'
}

export interface Ala{
    nome: string
    fila: Paciente[]
}

export interface Consultorio{
    nome: string
    alas: Ala[]
}