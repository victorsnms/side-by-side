import { api } from '../../services/api'
import { User } from '../../types/userData'


interface IAuth {
    accToken: string
    id: number
}

type getAuthType = () => IAuth | null

const getAuth: getAuthType = () => {
    const accToken = localStorage.getItem("@SideBySide:accessToken");
    const id = localStorage.getItem("@SideBySide:id");

    if (accToken && id) {
      return { accToken, id: JSON.parse(id) };
    }

    return null
}

const updateBadges = async (userAuth: IAuth, user: User) => {
    await api
        .patch(`/users/${userAuth.id}`, 
        { 
            badges: user.badges 
        }, 
        {
            headers: {
                Authorization: `Bearer ${userAuth.accToken}`
            }
        })
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
}

export const createdAnEvent = async (user: User) => {
    const userAuth = getAuth()
    let gotBadge = false

    if (userAuth === null) {
        return gotBadge
    }

    console.log(user)

    if (!user.badges.event) {
        user.badges.event = true
        await updateBadges(userAuth, user)
        gotBadge = true
    }
    if (user.my_events.length > 0) {
        gotBadge = await joinEvents(user) || gotBadge
    }

    return gotBadge
}

export const createdAWasteCollectionPoint = async (user: User) => {
    const userAuth = getAuth()
    let gotBadge = false


    if (userAuth === null) {
        return gotBadge
    }

    if (!user.badges.waste) {
        user.badges.waste = true
        await updateBadges(userAuth, user)
        gotBadge = true
    }

    return gotBadge
}

export const joinEvents = async (user: User) => {
    const userAuth = getAuth()
    let gotBadge = false


    if (userAuth == null) {
        return gotBadge
    }

    if (user.my_events.length +1 >= 1 && !user.badges.first) {
        user.badges.first = true
        await updateBadges(userAuth, user)
        gotBadge = true
    }

    if (user.my_events.length +1 >= 2 && !user.badges.second) {
        user.badges.second = true
        await updateBadges(userAuth, user)
        gotBadge = true
    }

    if (user.my_events.length +1 >= 5 && !user.badges.third) {
        user.badges.third = true
        await updateBadges(userAuth, user)
        gotBadge = true
    }

    if (user.my_events.length +1 >= 8 && !user.badges.fourth) {
        user.badges.fourth = true
        await updateBadges(userAuth, user)
        gotBadge = true
    }

    if (user.my_events.length +1 >= 12 && !user.badges.fifth) {
        user.badges.fifth = true
        await updateBadges(userAuth, user)
        gotBadge = true
    }

    if (user.my_events.length +1 >= 15 && !user.badges.sixth) {
        user.badges.sixth = true
        await updateBadges(userAuth, user)
        gotBadge = true
    }

    return gotBadge
}