import {Metadata} from "next";
import React, {Suspense} from "react";
import {revalidatePath} from "next/cache";

export type User = {
    name: string,
}
type Users = {
    users: Array<User>
}

type Params = {
    params: {
        type: string
    }
}

export async function generateMetadata({params: {type}}: Params): Promise<Metadata> {
    return {
        title: `SSR - ${type}`,
        description: `This is the page of ${type}`
    }
}

const getData = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list", {next: {tags: ['get-list']}})
    return await res.json();
}

const getDataWithNoCache = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list", {cache: "no-store"})
    return await res.json();
}

const todos: string[] = ["Learn React"];

export default async function SSR({params}: { params: { type: string } }) {

    async function addTodo(data: FormData) {
        "use server";

        await new Promise((resolve) => setTimeout(resolve, 3000));

        const todo = data.get("todo") as string;
        todos.push(todo);
        revalidatePath("/");
    }


    const {type} = params
    let users = type === 'cache' ? await getData() : await getDataWithNoCache()
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <h1>{type === 'cache' ? "Force Cache" : "No Cache"}</h1>
            <div style={{marginTop: 32}}>
                <ul>
                    {
                        users.map((user: User, index: number) => {
                            return (
                                <li key={index} style={{marginBottom: 16}}>
                                    {user.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Suspense>
    )
}
