import Link from "next/link";
import {revalidatePath} from "next/cache";
import {Suspense} from "react";

const getData = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")
    return await res.json()
}

export default async function Page({params}: { params: { type: string } }) {
    const {type} = params
    const data = await getData()

    const handle = async () => {
        "use server";
        revalidatePath("/router-cache/list")
    }

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Link href={`/router-cache/${type}`}>Back</Link>
            <h1 style={{marginTop: 32}}>List</h1>
            {
                data.map((item: any, id: any) => (
                    <div key={id}>{item.name}</div>
                ))
            }
            {/*<form action={handle}>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        name="todo"*/}
            {/*    />*/}
            {/*    <button*/}
            {/*        type="submit"*/}
            {/*    >*/}
            {/*        submit*/}
            {/*    </button>*/}
            {/*</form>*/}
        </Suspense>
    )
}