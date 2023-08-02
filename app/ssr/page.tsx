import {Button} from "@/app/ssr/Button";
import {Metadata} from "next";
import {Suspense} from "react";

export type User = {
    name: string,
}
 type Users = {
    users: Array<User>
}
export const metadata: Metadata = {
    title: 'SSR',
}

const getData = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")
    return await res.json();
}


export default async function SSR() {
    let users = await getData()
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <div>
                <div>List users</div>
                {
                    users.map((user: User, index: number) => {
                        return (
                            <div key={index} style={{marginBottom: 16}}>
                                {user.name}
                            </div>
                        )
                    })
                }
                <Button/>
            </div>
        </Suspense>
    )
}

// export async function getServerSideProps() {
//     const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")
//     const data = await res.json();
//
//     return {
//         props: {
//             data, // will be passed to the page component as props
//         },
//     };
// }