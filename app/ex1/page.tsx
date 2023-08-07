'use client'

import React, {Suspense, useEffect, useState} from "react";

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
const getDataWithNoCache = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list", {cache: "no-store"})
    return await res.json();
}

export default function Page() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        const getData = async () => {
            let users = await getDataWithNoCache()
            setUsers(users)
        }
        getData()
    }, [])

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <h1>{"No Cache"}</h1>
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
