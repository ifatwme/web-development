import type { requesthandler } from "@sveltejs/kit";

// TODO: Persist in database
let todos: todo[] = [];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export const post: RequestHandler<{}, FormData> = () => {
    todos.push({
        created_at: new Date(),
        text: request.body.get("text"),
        done: false
    });

    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}

