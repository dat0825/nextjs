'use client'

import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter()
    return (
        <div>
            {/*<Link href={"/router-cache/home"}>Home</Link>*/}
            <div onClick={() => {
                router.push("/router-cache/home")
            }}>Home
            </div>
            <div></div>
            {/*<Link href={"/router-cache/list"}>List</Link>*/}
            <div onClick={() => {
                // router.refresh()
                router.push("/router-cache/list")
            }}>List
            </div>
        </div>
    )
}