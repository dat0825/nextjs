async function getCharacters() {
    return await (await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")).json();
}

// getStaticPaths in Next13
export async function generateStaticParams() {
    const characters = await getCharacters();
    console.log("TTTTTTTTT", characters)
    return characters.map((c: any) => ({
        id: c?.name.replace(/\s+/g, "-").toLowerCase()
    }))
}

export default function Staticpage(props: any) {
    console.log("ZZZZZZZZZZ", props)
    return (
        <>
            <h1>The character name is: {props.params.id}</h1>
        </>
    )
}