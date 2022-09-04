import NextNProgress from "nextjs-progressbar";
import '../styles/main.scss'


export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNProgress
                color="green"
                startPosition={0.3}
                stopDelayMs={200}
                height={1}
                showOnShallow={true} />
            <Component {...pageProps} />
        </>
    )

}