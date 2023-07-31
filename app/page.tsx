'use client';
import React, {useEffect} from "react";
// import Image from 'next/image'
// import Link from "next/link";
import styles from './page.module.css'

export default function Home() {
    useEffect(() => {
        console.log("PPPPPPPPppp 12323123")
    }, [])
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>app/page.tsx</code>
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{' '}
                        {/*<Image*/}
                        {/*    src="/vercel.svg"*/}
                        {/*    alt="Vercel Logo"*/}
                        {/*    className={styles.vercelLogo}*/}
                        {/*    width={100}*/}
                        {/*    height={24}*/}
                        {/*    priority*/}
                        {/*/>*/}
                    </a>
                </div>
            </div>

            <div className={styles.center}>
                {/*<div>111111111111111</div>*/}
                {/*<Image*/}
                {/*    src="https://res.cloudinary.com/soict-hust/image/upload/v1614666350/tacljo4yl02wgzx3ktnf.jpg"*/}
                {/*    alt="Picture of the author"*/}
                {/*    width={500}*/}
                {/*    height={500}*/}
                {/*    quality={100}*/}
                {/*    blurDataURL={"https://res.cloudinary.com/soict-hust/image/upload/v1614666350/tacljo4yl02wgzx3ktnf.jpg"}*/}
                {/*    placeholder={"blur"}*/}
                {/*/>*/}
                {/*/!*<img src={"https://s3.amazonaws.com/my-bucket/profile.png"} alt={"img"} width={500} height={500}/>*!/*/}
                {/*<div>AAAAAAAAAA</div>*/}
                {/*<Image*/}
                {/*    className={styles.logo}*/}
                {/*    src="/next.svg"*/}
                {/*    alt="Next.js Logo"*/}
                {/*    width={180}*/}
                {/*    height={37}*/}
                {/*    priority*/}
                {/*/>*/}
            </div>

            <div className={styles.grid}>
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p>Explore the Next.js 13 playground.</p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p>
                        Instantly deploy your Next.js site to a shareable URL with Vercel.
                    </p>
                </a>
            </div>
        </main>
    )
}