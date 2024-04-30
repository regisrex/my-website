import prisma from "$lib/server/prisma"
import type { RequestEvent } from "@sveltejs/kit"

export async function handle({ event, resolve }: { event: RequestEvent, resolve: any }) {
    const pathArray = (event.url.pathname).split('/')
    if (pathArray.some((v, i) => v.trim() == "api")) return resolve(event)
    if (pathArray.some((v, i) => i != 0 && v.trim() == "")) return resolve(event)
    const blogPubId = pathArray[2]
    if (!blogPubId || blogPubId.trim().length == 0) return resolve(event)

    await prisma.post.update({
        where: {
            pubId: blogPubId
        },
        data: {
            views: {
                increment: 1
            }
        }
    })

    return resolve(event)
}