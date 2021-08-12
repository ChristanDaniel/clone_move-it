import { useState } from "react";
import { useChallenges } from "../hooks/useChallenges";


export function CountDownContext() {
    const { startNewChallenge } = useChallenges();

    const [ time, setTime ] = useState(0.1 * 60);
    const [ isActive, setIsActive ] = useState(false);
    const [hasFinished, setHasFinished ] = useState(false);



    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        
        setIsActive(false);
        setTime(0.1 * 60);
        setHasFinished(false);
    }

}