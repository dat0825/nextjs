'use client'

import {useRouter} from "next/navigation";

export default function Page({params}: { params: { type: string } }) {
    const {type} = params
    const router = useRouter()
    return (
        <div>
            {/*<Link href={"/router-cache/home"}>Home</Link>*/}
            <button
                onClick={() => {
                    router.push(`/router-cache/${type}/home`)
                }}
                style={{marginBottom: 24}}
            >
                Home
            </button>
            <div></div>
            {/*<Link href={"/router-cache/list"}>List</Link>*/}
            <button onClick={() => {
                if (type === "refresh") router.refresh()
                router.push(`/router-cache/${type}/list`)
            }}>List
            </button>
        </div>
    )
}