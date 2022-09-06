import NextNProgress from "nextjs-progressbar";
import '../styles/main.scss'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNProgress
                color="red"
                startPosition={0.3}
                stopDelayMs={2}
                height={1}
                showOnShallow={true} />
            <Component {...pageProps} />
        </>
    )

}