import {getData, getDataWithSignal} from "@/app/memoization/[type]/utils";
import {User} from "@/app/ssr/[type]/page";
import React from "react";
import {wait} from "@/app/utils/utils";


export default async function ComponentB({type}: { type: string }) {
    await wait(15000)
    const data = type === "signal" ? await getDataWithSignal() : await getData()
    return (
        <div>
            <h1>Component B</h1>
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