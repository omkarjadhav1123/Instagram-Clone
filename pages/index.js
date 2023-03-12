import Head from 'next/head';
import Header from 'components/Header';
import Feed from '../components/Feed';
import Modal from "../components/Modal";


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scroll-hide">
      <Head> 
        <title>Instagram clone by Omkar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       {/*Header */}
       <Header />

       {/*feed */}
       <Feed />

       {/*Modal */}
       <Modal />
    </div>
  );
}

