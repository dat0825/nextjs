'use client'
import {experimental_useFormStatus as useFormStatus} from "react-dom";

export default function AddButton() {
    const {pending} = useFormStatus();
    return (
        <button
            disabled={pending}
            type="submit"
        >
            Add Todo
        </button>
    )
}