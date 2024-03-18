import { USER_API } from "./urls"

export const getCurrentUser = async () => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}${USER_API}`, {method: "GET"})
        return res.json()
    } catch (error) {
        console.log(error)
    }
    
}