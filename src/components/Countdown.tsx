import { useCountdown } from "../hooks/useCountdown";



export function Countdown() {
    const {
        isActive,
        hasFinished,
        resetCountdown,
        startCountdown,
        minutes,
        seconds
    } = useCountdown();

    const [minuteLeft, monuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

    return(
        <>
            <div>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{secondsLeft}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{monuteRight}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>





        </>
    );
}