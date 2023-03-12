// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import "../styles/globals.css";
import {SessionProvider} from "next-auth/react";
import { RecoilRoot } from "recoil";

function MyApp({Component, pageProps: {session, ...pageProps}}) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
        
    </SessionProvider>
  );
}

export default MyApp;