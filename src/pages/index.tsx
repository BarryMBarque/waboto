import Head from 'next/head'

import Image from '../assets/image.svg';
import { Container } from '../styles/pages/Home';
const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


       <main>
       <h1>Hello world</h1>
       <p>Hello World for next level</p>
       </main>
    </Container>
  )
}
export default Home;
