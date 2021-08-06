import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div />
            </div>
            <span>xp</span>
        </header>
    )
}