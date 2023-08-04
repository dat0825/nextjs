'use client'
import {ReactNode, useState} from "react";
import ServerComponent from "@/app/rsc-rcc/ServerComponent";

export default function ClientComponent({children}: { children: ReactNode }) {
    const [text, setText] = useState<string>('AAAAAAaa')
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <div>Client Component {text} - {count}</div>
            <button
                onClick={() => {
                    setCount((prev) => (prev + 1))
                    // console.log("PPPPPPPPPPPPp 111")
                }}
            >
                Button
            </button>
            {children}
        </div>
    )
}