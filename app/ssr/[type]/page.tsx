import {Button} from "@/app/ssr/[type]/Button";
import {Metadata} from "next";
import {Suspense} from "react";

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
export async function generateMetadata({params: {type}}: Params): Promise<Metadata> {
    return {
        title: `SSR - ${type}`,
        description: `This is the page of ${type}`
    }
}

const getData = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")
    return await res.json();
}

const getDataWithNoCache = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list", {cache: "no-store"})
    return await res.json();
}


export default async function SSR({params}: { params: { type: string } }) {
    const {type} = params
    let users = type === 'cache' ? await getData() : await getDataWithNoCache()
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