'use client'
import Image from "next/image";

export default function ClientComponentPassProps(props: any) {
    const {data} = props
    return (
        <div>
            <div>Client component pass props - {data?.name}</div>
            <Image src={"https://res.cloudinary.com/soict-hust/image/upload/v1614666350/tacljo4yl02wgzx3ktnf.jpg"}
                   alt={"img"} width={25} height={25}/>
            <Image src={"/next.svg"} alt={"img"} width={25} height={25}/>
        </div>
    )
}