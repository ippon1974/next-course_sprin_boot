import Link from "next/link";
import classes from '../styles/error.module.scss';

export default function ErrorPage500() {
    return (
        <>
            <h1 className={classes.error}>Ошибка 500</h1>
            <p>Ошибка сервера</p>
            <p>Go to <Link href={'/'}><a>Home</a></Link></p>
        </>
    )
}