import ClientComponent from "@/app/rsc-rcc/ClientComponent";
import ClientComponentPassProps from "@/app/rsc-rcc/ClientComponentPassProps";

const getData = async () => {
    const res = await fetch("https://64c24343eb7fd5d6ebcf84d0.mockapi.io/list")
    return await res.json();
}
export default async function ServerComponent() {
    const users = await getData()

    return (
        <>
            <div>Server component</div>
            {
                users.map((user: any) => (
                    // <div key={user?.name}>{user?.name}</div>
                    <ClientComponentPassProps key={user?.name} data={user}/>
                ))
            }
        </>
    )
}