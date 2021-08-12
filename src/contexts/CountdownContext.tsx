import { useEffect, useState } from "react";
import { useChallenges } from "../hooks/useChallenges";


let countdownTimeout: NodeJS.Timeout

export function CountdownContext() {
    const { startNewChallenge } = useChallenges();

    const [ time, setTime ] = useState(0.1 * 60);
    const [ isActive, setIsActive ] = useState(false);
    const [hasFinished, setHasFinished ] = useState(false);

    useEffect(() => {
        window.onbeforeunload = () => {
            if (isActive) {
                return 'Você perderá o progresso do countdown até aqui, tem certeza?'
            }
        }
    }, [isActive])

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            startNewChallenge();
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])



    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        
        setIsActive(false);
        setTime(0.1 * 60);
        setHasFinished(false);
    }

}