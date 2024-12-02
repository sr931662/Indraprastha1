import { React } from "react"
import styles from './Login.module.css'
import { getImageUrl } from "../../utils"
import { Link } from "react-router-dom"
import axios from "axios"


const Login = ({ isSun }) => {

    return (
        <div className={styles.container}>
            <div className={styles.cA}>
                {/* <img src={getImageUrl('login-image.png')} className={styles.login_image} alt="" /> */}
            </div>


            <div className={isSun ? styles.cB : styles.cB_isSun}>
                <div className={isSun ? styles.login_main : styles.login_main_isSun}>
                    <img src={getImageUrl("nav/logo.png")} className={styles.logo_icon} alt="" />
                    <h3 className={styles.login_header}>Welcome to IEA!</h3>
                    <h2 className={styles.login_motive}>Please sign-in to your account and start the adventure</h2>

                    <form action="POST">
                        <input type="email" 
                        placeholder="Enter email" 
                        name="email"
                        className={styles.input}
                        autoComplete="off"/>

                        <input type="password" 
                        placeholder="Enter password" 
                        className={styles.input}
                        name="password"/>

                        <input type="submit" className={styles.login_btn}/>

                        <p>OR</p>

                        <Link to="/sign-up" className={styles.login_btn}>SignUp Page</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login