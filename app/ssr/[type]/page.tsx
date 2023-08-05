import {Button} from "@/app/ssr/[type]/Button";
import {Metadata} from "next";
import React, {Suspense} from "react";
import styles from "@/app/ssr/style.module.css";
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
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")
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
        // <div>
            <Suspense fallback={<h1>Loading...</h1>}>
            {/*<h1 className="text-4xl font-bold">Todos</h1>*/}
            {/*<ul>*/}
            {/*    {todos.map((todo, index) => (*/}
            {/*        <li key={index}>{todo}</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            {/*<form action={addTodo}>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        name="todo"*/}
            {/*    />*/}
            {/*    <AddButton/>*/}
            {/*</form>*/}
            <div className={styles.title}>AAAAAAAAAAAA</div>
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
                <Button/>
            </ul>
            </Suspense>
        // </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")
    const data = await res.json();

    return {
        props: {
            data, // will be passed to the page component as props
        },
    };
}