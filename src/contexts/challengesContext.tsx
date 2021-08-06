import { useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie'

interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export function ChallengesProvider( {...rest}: ChallengesProviderProps ) {
    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0 )

    useEffect(() => {
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(challengesCompleted))
        Cookies.set('challengesCompleted', String(challengesCompleted))
    }, [level, currentExperience, challengesCompleted])
}