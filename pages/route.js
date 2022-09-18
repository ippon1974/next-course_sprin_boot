import { useRouter } from 'next/router'

export default function Router() {
    const router = useRouter()

    return(
     <>
         <button type="button" onClick={() => router.push('/about')}>
             Click me
         </button>
     </>
 )

}