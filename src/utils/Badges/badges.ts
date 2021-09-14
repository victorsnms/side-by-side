import join from '../assets/badges/0.png'
import waste from '../assets/badges/1.png'
import event from '../assets/badges/2.png'
import first from '../assets/badges/3.png'
import second from '../assets/badges/4.png'
import third from '../assets/badges/5.png'
import fourth from '../assets/badges/6.png'
import fifth from '../assets/badges/7.png'
import sixth from '../assets/badges/8.png'
import { User } from '../../types/userData'

const img = [
    join, // Criou conta
    waste, // Criar ponto de coleta
    event, // Criar evento
    first, // Participou de 1 evento
    second, // Participou de 2 eventos
    third, // Participou de 5 eventos
    fourth, // Participou de 8 eventos
    fifth, // Participou de 12 eventos
    sixth, // Participou de 15 eventos
]

interface IBadge {
    title: string
    txt: string
    img: string
}

const allBadges = {
    join: {},
    waste: {},
    event: {},
    first: {},
    second: {},
    third: {},
    fourth: {},
    fifth: {},
    sixth: {},
}



const updateBadges = () => {
    const user = {} as User


}