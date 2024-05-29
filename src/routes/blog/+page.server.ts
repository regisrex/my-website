import prisma from '$lib/server/prisma'

export async function load() {


    const blogs = await prisma.post.findMany({
        orderBy: {
            number: 'asc'
        }
    })
    return {
        blogs
    }
}