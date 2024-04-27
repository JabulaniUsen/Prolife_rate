export function getUserToken() {
    return localStorage.getItem('userToken')??""
}

export function StoreUserTokne(token){
    return localStorage.setItem('userToken',token)
}
export function clearUserTone() {
    return localStorage.removeItem('userToken')
}