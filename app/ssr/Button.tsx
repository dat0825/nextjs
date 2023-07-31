'use client'

import React from 'react'
import {useRouter} from "next/navigation";
export const Button = () => {
    const router = useRouter()
    return (
        <button onClick={()=>{
            // users.push({name: 'asdad'})
            // router.replace("/asd");
            console.log("TTTTTTTTTTTTTTTTt")
        }}>increase</button>
    )
}