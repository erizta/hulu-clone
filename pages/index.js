import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({results}) {
  // console.log(results)
  return (
    <div>
      <Head>
        <title>Stream TV and Movies Live and Online | Hulu</title>
        <meta name="description" content="Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more." />
        <link rel="icon" href="/hulu.png" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />

    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json())

  return{
    props:{
      results: request.results,
    }
  }

}