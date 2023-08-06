import ComponentA from "@/app/memoization/[type]/ComponentA";
import ComponentB from "@/app/memoization/[type]/ComponentB";

export default async function Page({params}: { params: { type: string } }) {
    const {type} = params
    return (
        // <Suspense fallback={<h1>Loading....</h1>}>
        <>
            <h1>{type}</h1>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <ComponentA type={type}/>
                <ComponentB type={type}/>
            </div>
        </>
        // </Suspense>
    )
}