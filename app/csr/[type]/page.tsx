'use client'
import React, {useEffect, useState} from "react";
import {requestDataFromServer} from "@/app/utils/lib-server";
import {requestDataFromClient} from "@/app/utils/lib-client";
import Head from "next/head";
import {Metadata} from "next";
import {wait} from "@/app/utils/utils";

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