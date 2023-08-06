import {getData, getDataWithSignal} from "@/app/memoization/[type]/utils";
import React from "react";
import {User} from "@/app/ssr/[type]/page";

export default async function ComponentA({type}: { type: string }) {
    const data = type === "signal" ? await getDataWithSignal() : await getData()
    return (
        <div>
            <h1>Component A</h1>
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
        </div>
    )
}