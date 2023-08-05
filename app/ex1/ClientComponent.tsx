'use client'

// import {useState} from "react";

import {Suspense, useState} from "react";

export default function ClientComponent({component}: { component: any }) {
    const [value, setValue] = useState<number>(0)
    return (
        <Suspense fallback={<div>Loading....</div>}>
            {
                value > 10
                    ? (<div>Client Component &gt; 10 - {value}</div>)
                    : (<div>Client Component - {value}</div>)
            }
            {component}
            <button onClick={() => {
                setValue(value + 1)
            }}>Button
            </button>
        </Suspense>
    )
}