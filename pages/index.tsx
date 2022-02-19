import type { NextPage } from 'next'
import Head from 'next/head'
import Particles from 'react-tsparticles';
import { particlesOptions } from '../particles';
import { ProductList } from '../components/ProductList';

const Home: NextPage = () => {

  const particlesProps = {
    id: "tsparticles",
    options: particlesOptions
  }

  return (
    <div className="bg-black min-h-screen flex justify-center">
      <Head>
        <title>Particles Nextjs</title>
        <meta name="description" content="Particles with Nextjs, Tailwind css" />
      </Head>

      <main className="">
        <Particles {...particlesProps} />
        <h1 className="text-white text-6xl font-bold p-64">Welcome to the marketplace!</h1>
        <ProductList />
      </main>
    </div>
  );
}

export default Home
