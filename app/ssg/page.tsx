export default function StaticSiteGeneration(props: any) {
    const {data} = props
    return (
        <>
            {data.map((e: any) => (
                <h2 key={e.id}>{e.name}</h2>
            ))}
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")
    const data = await res.json();

    return {
        props: {
            data, // will be passed to the page component as props
        },
    };
}