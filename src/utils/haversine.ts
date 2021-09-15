const radians = (degree: number) => degree * Math.PI / 180;
 
export const haversine = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6372.8 // km
    const dlat = radians(lat2 - lat1)
    const dlon = radians(lon2 - lon1)

    lat1 = radians(lat1)
    lat2 = radians(lat2)
    
    const a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.sin(dlon / 2) * Math.sin(dlon / 2) * Math.cos(lat1) * Math.cos(lat2)
    const c = 2 * Math.asin(Math.sqrt(a))

    return R * c
}