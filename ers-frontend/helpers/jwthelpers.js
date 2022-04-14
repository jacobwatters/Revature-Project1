import jwtDecode from "jwt-decode"
import useSessionStorage from "../hooks/useSessionStorage";

export function getRole(_jwt) {
    const jwt = useSessionStorage('jwt')
    
    return jwt ? jwtDecode(jwt).roles : ''
}

export function isEmployee(){
    return getRole()=='EMPLOYEE'
}
export function isManager(){
    return getRole() == 'MANAGER'
}

export function getUserId(_jwt) {
    const jwt = useSessionStorage('jwt')
    console.log('jwt' + jwtDecode(jwt))
    return jwt ? jwtDecode(jwt).userId : ''
}