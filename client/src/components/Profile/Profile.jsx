import React from 'react'
import styles from './Profile.module.css';

const Profile = ({ isSun, toggleTheme }) => {
    const bodyBackgroundColor = isSun ? 'black': 'white';
    document.body.style.backgroundColor = bodyBackgroundColor;
    const h2_st = isSun ? styles.h2_isSun : styles.h2;
  return (
    
    <div className={`${styles.section} ${styles.cc_home_wrap}`}>
        <div className={styles.container}>
            <h1>Profile form</h1>
            <div className={styles.project_info}>
                <h2 className={h2_st}>To be implemented soon...</h2>
            </div>
        </div>
    </div>
  )
}

export default Profile
