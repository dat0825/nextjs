import Link from "next/link";
import {Suspense} from "react";

export default async function Page({params}: { params: { type: string } }) {
    const {type} = params
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Link href={`/router-cache/${type}`}>Back</Link>
            <h1 style={{marginTop: 32}}>Home</h1>
        </Suspense>
    )
}