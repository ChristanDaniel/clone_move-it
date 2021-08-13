import { useChallenges } from '../hooks/useChallenges'
import { useCountdown } from '../hooks/useCountdown';

import styles from '../styles/components/ChallengesBox.module.css'


export function ChallengesBox() {
    const { activeChallenge, completeChallenge, resetChallenge } = useChallenges();
    const { resetCountdown } = useCountdown();

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }


    return(
        <div className={styles.challengeContainer}>

        </div>
    );
}