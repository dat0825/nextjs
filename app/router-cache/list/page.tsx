import Link from "next/link";
import {revalidatePath} from "next/cache";

const getData = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")
    return await res.json()
}

export default async function Page() {
    const data = await getData()

    const handle = async () => {
        "use server";
        revalidatePath("/router-cache/list")
    }

    return (
        <div>
            <div>List</div>
            {
                data.map((item: any, id: any) => (
                    <div key={id}>{item.name}</div>
                ))
            }
            <Link href={"/router-cache"}>Back</Link>
            <form action={handle}>
                <input
                    type="text"
                    name="todo"
                />
                <button
                    type="submit"
                >
                    submit
                </button>
            </form>
        </div>
    )
}