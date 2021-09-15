import { type } from 'os'
import { api } from '../../services/api'
import { User } from '../../types/userData'

export const createdAnEvent = (user: User) => {
    if (!user.badges.event) {
        user.badges.event = true
    }
}

export const createdAWasteCollectionPoint = (user: User) => {
    if (!user.badges.waste) {
        user.badges.waste = true
    }
}

interface IAuth {
    accToken: string
    id: number
}

type getAuthType = () => IAuth | null

const getAuth: getAuthType = () => {
    const accToken = localStorage.getItem("@Foobar:accessToken");
    const id = localStorage.getItem("@Foobar:id");

    if (accToken && id) {
      return { accToken, id: JSON.parse(id) };
    }

    return null
}

const updateBadges = async (userAuth: IAuth, user: User) => {
    await api
        .patch(`/users/${userAuth.id}`, user.badges, {
            headers: {
                Authorization: `Bearer ${userAuth.accToken}`
            }
        })
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
}

export const joinEvents = async (user: User) => {
    const userAuth = getAuth()

    if (userAuth == null) {
        return
    }

    if (user.my_events.length >= 1 && !user.badges.first) {
        user.badges.first = true
        await updateBadges(userAuth, user)
    }

    if (user.my_events.length >= 2 && !user.badges.second) {
        user.badges.second = true
        await updateBadges(userAuth, user)
    }

    if (user.my_events.length >= 5 && !user.badges.third) {
        user.badges.third = true
        await updateBadges(userAuth, user)
    }

    if (user.my_events.length >= 8 && !user.badges.fourth) {
        user.badges.fourth = true
        await updateBadges(userAuth, user)
    }

    if (user.my_events.length >= 12 && !user.badges.fifth) {
        user.badges.fifth = true
        await updateBadges(userAuth, user)
    }

    if (user.my_events.length >= 15 && !user.badges.sixth) {
        user.badges.sixth = true
        await updateBadges(userAuth, user)
    }
}