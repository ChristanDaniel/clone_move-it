import { useChallenges } from "../hooks/useChallenges";
import styles from '../styles/components/LevelUpModal.module.css'

import Image from 'next/image'
import profilePic from '../../public/icons/close.svg'


export function LevelUpModal() {
    const { level, closeLevelUpModal } = useChallenges();

    return (
        <div className={styles.overlay}>
            <div className={styles.content}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <Image src={profilePic} alt="Level" />
                </button>
            </div>
        </div>
    );
}