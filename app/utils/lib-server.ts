'use server'

import {cookies} from "next/headers";

export const requestDataFromServer = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list", {cache: "no-store"})
    return await res.json()
}