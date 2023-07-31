async function getCharacters() {
    return await (await fetch("https://rickandmortyapi.com/api/character")).json();
}

// getStaticPaths in Next13
export async function generateStaticParams() {
    const characters = await getCharacters();
    console.log("TTTTTTTTT")
    return characters?.results.map(c => ({
        id: c?.name.replace(/\s+/g, "-").toLowerCase()
    }))
}

export default function Staticpage(props) {
    console.log("ZZZZZZZZZZ",props)
    return (
        <>
            <h1>The character name is: {props.params.id}</h1>
        </>
    )
}