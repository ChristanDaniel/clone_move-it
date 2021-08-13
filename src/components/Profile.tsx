import { useChallenges } from "../hooks/useChallenges";

import styles from '../styles/components/Profile.module.css'

import Image from 'next/image'
import profilePic from '../../public/icons/level.svg'

const myLoader = () => {
    return `https://github.com/ChristanDaniel.png`
}

export function Profile() {
    const { level } = useChallenges();

    return(
        <div className={styles.profileContainer}>
            <Image
              loader={myLoader}
              src="me.png"
              alt="Christan Daniel"
              width={88}
              height={88} 
            />
            <div>
                <strong>Christian Daniel</strong>
                <p>
                    <Image src={profilePic} alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}