import {Metadata} from "next";
import {User} from "@/app/ssr/page";

async function getCharacters() {
    return await (await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")).json();
}

// getStaticPaths in Next13
export async function generateStaticParams(props: any) {
    const characters = await getCharacters();
    console.log("TTTTTTTTT", props)
    return characters.map((c: any) => ({
        id: c?.name.replace(/\s+/g, "-").toLowerCase()
    }))
}

type Params = {
    params: {
        id: string
    }
}


export async function generateMetadata({params: {id}}: Params): Promise<Metadata> {
    console.log("MMMMMMMMMM", id)
    const user: User = {name: "LLAD"}

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}


export default function Staticpage(props: any) {
    console.log("ZZZZZZZZZZ", props)
    return (
        <>
            <h1>The character name is: {props.params.id}</h1>
        </>
    )
}