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
                        <li><Link href={'/posts'}><a>Table Test Posts</a></Link></li>
                        <li><Link href={'/testposts'}><a>Add Posts</a></Link></li>
                        <li><Link href={'/airlines'}><a>Airlines</a></Link></li>
                        <li><Link href={'/contact'}><a>Contacts</a></Link></li>
                        <li><strong><Link href={'/form'}><a>Form</a></Link></strong></li>
                        <li><strong><Link href={'/formselect'}><a>Form Select</a></Link></strong></li>
                        <li><strong><Link href={'/in_text'}><a>In Text</a></Link></strong></li>
                        <li><Link href={'/crudform'}><a>Crud Form</a></Link></li>
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