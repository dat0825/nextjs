import ClientComponent from "@/app/ex1/ClientComponent";
import ServerComponent from "@/app/ex1/ServerComponent";

export default async function Page(props: any) {
    const component = await ServerComponent()
    console.log("ZZZZZZ", props)
    return (
        <div>
            <ClientComponent
                component={component}
            />
        </div>
    )
}