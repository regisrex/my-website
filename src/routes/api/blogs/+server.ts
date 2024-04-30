import { ApiResponse } from "$lib/@types/apiResponse"
import prisma from "$lib/server/prisma"
import type { RequestEvent } from "./$types"
import z from 'zod'

const postSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubId: z.string(),
    views: z.number()
})
export async function POST(event: RequestEvent) {
    try {
        const data = postSchema.parse(await event.request.json())
        console.log(data)
        const post = await prisma.post.create
            ({
                data: {
                    ...data,
                    releaseDate: new Date()
                }
            })
        return new ApiResponse(true, "Saved", post).toJson()

    } catch (error) {
        return new ApiResponse(false, "Save post failed", null).toJson()
    }
}