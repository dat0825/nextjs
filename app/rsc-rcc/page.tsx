import ServerComponent from "@/app/rsc-rcc/ServerComponent";
import ClientComponent from "@/app/rsc-rcc/ClientComponent";

export default function Page() {
    return (
        <>
            <ClientComponent>
                <ServerComponent/>
            </ClientComponent>
        </>
    )
}