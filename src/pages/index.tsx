import Head from 'next/head'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import { ChallengesProvider } from '../contexts/challengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home() {
  return (
    <>
      <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
      ></ChallengesProvider>
      <main>
        <Head>
          <title>move.it | Início</title>
        </Head>
        
        <ExperienceBar />
        
        <Profile />
      </main>

    </>
  )
}
