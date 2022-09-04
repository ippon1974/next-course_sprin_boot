import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title="Next App"}) {
    return(
            <>
                <Head>
                    <title>{title} | Next course</title>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Free Web tutorials" />
                    <meta name="keywords" content="HTML, CSS, JavaScript" />
                </Head>
                <nav>
                    <Link href={'/'}><a>Home</a></Link>
                    <Link href={'/about'}><a>About</a></Link>
                    <Link href={'/posts'}><a>Posts</a></Link>
                </nav>
                <main>
                    {children}
                </main>
            </>
    )
}