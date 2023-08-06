import React, {Suspense} from "react";
import {User} from "@/app/ssr/[type]/page";

const getData = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list", {next: {tags: ['get-list']}})
    return await res.json();
}
export default async function Page() {
    const data = await getData()
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <h1>Full Route Cache</h1>
            <div style={{marginTop: 32}}>
                <ul>
                    {
                        data.map((user: User, index: number) => {
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