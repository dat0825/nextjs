async function Blog(props: any) {
    console.log("TTTTTTTTTT",props)
    const res = await fetch('https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list',{next: {revalidate: 10}})
    const posts = await res.json()
    return (
        <ul>
            {posts.map((post: any) => (
                <li key={post.name}>{post.name}</li>
            ))}
        </ul>
    )
}


// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
    const res = await fetch('https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list')
    const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post: any) => ({
        params: { id: post.name },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}

export default Blog