import prisma from "@/lib/prisma"

export const getUser = async({id}: {id:string}) => {
    try {
        const res = await prisma.account.findFirst({where: {id}, include: {user: true}})
        return res
    } catch (error) {
        console.error(error)
    }
}
