import join from '../assets/badges/0.png'
import waste from '../assets/badges/1.png'
import event from '../assets/badges/2.png'
import first from '../assets/badges/3.png'
import second from '../assets/badges/4.png'
import third from '../assets/badges/5.png'
import fourth from '../assets/badges/6.png'
import fifth from '../assets/badges/7.png'
import sixth from '../assets/badges/8.png'

interface IBadge {
    title: string
    txt: string
    img: string
}

interface IAllBadges {
    [key: string]: IBadge
}

export const allBadges: IAllBadges = {
    join: {
        title: 'Join',
        txt: 'Created an account!',
        img: join,
    },
    waste: {
        title: 'Waste',
        txt: 'Created an waste collection point!',
        img: waste,
    },
    event: {
        title: 'Event',
        txt: 'Created an Event!',
        img: event,
    },
    first: {
        title: 'First',
        txt: 'Join your first event!',
        img: first,
    },
    second: {
        title: 'Second',
        txt: 'Join your second event!',
        img: second,
    },
    third: {
        title: 'Third',
        txt: 'Join your fifth event!',
        img: third,
    },
    fourth: {
        title: 'Fourth',
        txt: 'Join your eighth event!',
        img: fourth,
    },
    fifth: {
        title: 'Fifth',
        txt: 'Join your twelfth event!',
        img: fifth,
    },
    sixth: {
        title: 'Sixth',
        txt: 'Join your fiftieth event!',
        img: sixth,
    },
}