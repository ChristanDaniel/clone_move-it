import Head from 'next/head'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'


export default function Home() {
  return (
    <>
      <Head>
        <title>move.it | Início</title>
      </Head>

      <h1>hello World</h1>
      <ExperienceBar />
      <Profile />
    </>
  )
}
