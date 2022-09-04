import Link from "next/link";
import classes from '../styles/error.module.scss';

export default function ErrorPage() {
    return (
        <>
            <h1 className={classes.error}>Ошибка 404</h1>
            <p>Страница не найдена</p>
            <p>Go to <Link href={'/'}><a>Home</a></Link></p>
        </>
    )
}