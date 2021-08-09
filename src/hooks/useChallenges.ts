import { useContext } from 'react';
import { ChallengesContext } from '../contexts/challengesContext';

export function useChallenges() {
    const context = useContext(ChallengesContext)

    return context
}