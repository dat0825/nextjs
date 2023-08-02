import {Suspense} from "react";

export default function Layout(
    {children, params}: { children: React.ReactNode, params: { type: string } }
) {
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <title>{`CSR - ${params.type}`}</title>
            {children}
        </Suspense>
    )
}