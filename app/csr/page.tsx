'use client'
import React, {useEffect, useState} from "react";

type User = {
    name: string,
}
export default function CRS() {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")
            const data = await res.json()
            setUsers(data)
        }
        getData()
    }, [])
    return (
        <div>
            <div>List users</div>
            {
                users.map((user, index) => {
                    return (
                        <div key={index} style={{marginBottom: 16}}>
                            {user.name}
                        </div>
                    )
                })
            }
        </div>
    )
}