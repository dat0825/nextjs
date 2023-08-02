import {Metadata} from "next";
import {User} from "@/app/ssr/[type]/page";

async function getCharacters() {
    return await (await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")).json();
}

// getStaticPaths in Next13
export async function generateStaticParams(props: any) {
    const characters = await getCharacters();
    return characters.map((c: any) => ({
        id: c?.name.replace(/\s+/g, "-").toLowerCase()
    }))
}

export type Params = {
    params: {
        id: string
    }
}

export async function generateMetadata({params: {id}}: Params): Promise<Metadata> {

    return {
        title: `SSG - ${id}`,
        description: `This is the page of ${id}`
    }
}

export default function Staticpage(props: any) {
    return (
        <>
            <h1>The character name is: {props.params.id}</h1>
        </>
    )
}