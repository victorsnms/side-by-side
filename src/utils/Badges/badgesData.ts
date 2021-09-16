import join from '../../assets/badges/0.png'
import waste from '../../assets/badges/1.png'
import event from '../../assets/badges/2.png'
import first from '../../assets/badges/3.png'
import second from '../../assets/badges/4.png'
import third from '../../assets/badges/5.png'
import fourth from '../../assets/badges/6.png'
import fifth from '../../assets/badges/7.png'
import sixth from '../../assets/badges/8.png'

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
        title: 'Join the fight',
        txt: 'Created an account!',
        img: join,
    },
    waste: {
        title: 'Collection point creator',
        txt: 'Created an waste collection point!',
        img: waste,
    },
    event: {
        title: 'Event creator',
        txt: 'Created an Event!',
        img: event,
    },
    first: {
        title: 'Long way to go',
        txt: 'Joined your first event!',
        img: first,
    },
    second: {
        title: 'Keeper of nature',
        txt: 'Joined your second event!',
        img: second,
    },
    third: {
        title: 'Getting there',
        txt: 'Joined your fifth event!',
        img: third,
    },
    fourth: {
        title: 'Care for the environment',
        txt: 'Joined your eighth event!',
        img: fourth,
    },
    fifth: {
        title: 'Award winner',
        txt: 'Joined your twelfth event!',
        img: fifth,
    },
    sixth: {
        title: 'Capitain Planet',
        txt: 'Joined your fifteenth event!',
        img: sixth,
    },
}