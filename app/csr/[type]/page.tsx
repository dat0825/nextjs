'use client'
import React, {useEffect, useState} from "react";
import {requestDataFromServer} from "@/app/utils/lib-server";
import {requestDataFromClient} from "@/app/utils/lib-client";


type User = {
    name: string,
}

// export async function generateStaticParams(props: any) {
//     return [
//         {type: 'req-server'},
//         {type: 'req-client'}
//     ]
// }

export default function CRS({params}: { params: any }) {
    const {type} = params;
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        const fetchFunc = async (): Promise<void> => { 
            const data = type === "req-server" ? await requestDataFromServer() : await requestDataFromClient()
            setUsers(data)
        }
        fetchFunc()
        document.cookie = "token=Token 123 456; path=/; secure= true";
    }, [])

    return (
        <div>
            <div>AAAAAA</div>
            <ul>
                {
                    users.map((user, index) => {
                        return (
                            <li key={index} style={{marginBottom: 16}}>
                                {user.name}
                                <span>LLLL</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div>BBBBBBBBBBBBBB</div>
        </div>
    )
}