import { json } from "@sveltejs/kit";

export class ApiResponse<T> {
    constructor(
        public success: boolean,
        public message: string,
        public data: T,
        public responseTime: String = new Date().toLocaleString()
    ) { }

    toJson() {
        return json({
            success: this.success,
            message: this.message,
            data: this.data,
            responseTime: this.responseTime
        })
    }
}