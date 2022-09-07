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
                    <ul>
                        <li><Link href={'/'}><a>Home</a></Link></li>
                        <li><Link href={'/about'}><a>About</a></Link></li>
                        <li><Link href={'/posts'}><a>Posts</a></Link></li>
                        <li><Link href={'/contact'}><a>Contacts</a></Link></li>
                        <li><Link href={'/airlines'}><a>Airlines</a></Link></li>
                        <li><Link href={'/contact'}><a>Contacts</a></Link></li>
                        <li><strong><Link href={'/form'}><a>Form</a></Link></strong></li>
                    </ul>
                </nav>
                <main>
                    {children}
                </main>
                <footer>
                    <hr/>
                    2022 Hello React !
                </footer>
            </>
    )
}