import { ApiResponse } from "$lib/@types/apiResponse"
import { json, type RequestEvent } from "@sveltejs/kit"

export async function GET(event: RequestEvent) {
    return json(new ApiResponse<null>(true, "Server is up", null))
}