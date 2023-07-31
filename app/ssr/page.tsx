import {Button} from "@/app/ssr/Button";
import {Metadata} from "next";

type User = {
    name: string,
}
type Users = {
    users: Array<User>
}
// export const metadata: Metadata = {
//     title: 'Users',
// }

const getData = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list", {next: {revalidate: 100}})
    return await res.json();
}

export async function generateMetadata({params, searchParams}: { params: any, searchParams: any }) {
    console.log("MMMMMMMMMMM", params, searchParams)
    return {
        title: '...',
    }
}

export default async function SSR() {
    let users = await getData()
    console.log("KKKKKKKKKKKKKkk", users)
    // const {data} = props
    return (
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