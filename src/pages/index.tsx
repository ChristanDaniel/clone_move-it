import Head from 'next/head'
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengesBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css'

import { ChallengesProvider } from '../contexts/challengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({level, currentExperience, challengesCompleted}: HomeProps ) {
  return (
    <ChallengesProvider
    level={level}
    currentExperience={currentExperience}
    challengesCompleted={challengesCompleted}
    >
      <CountdownProvider>
        <main className={styles.container}>
          <Head>
            <title>move.it | Início</title>
          </Head>
          
          <ExperienceBar />
          <section>
            <div className={styles.cycleContainer}>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <ChallengesBox />
          </section>
        </main>
      </CountdownProvider>
    </ChallengesProvider>

  )
}
