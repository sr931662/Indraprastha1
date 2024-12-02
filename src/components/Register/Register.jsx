import { React, useState } from "react";
import styles from "./Register.module.css"
import { getImageUrl } from "../../utils"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'


export const Register = ({ isSun }) => {
  const navigate = useNavigate()

  const [ user, setUser ] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    pass: "",
    repass: ""
  })

  const handleChange = e => {
    console.log(e)
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value})
  }

  const register = async (e) => {
    e.preventDefault()

    const { fname, lname, phone, email, pass, repass } = user
    
    const res = await fetch('/sign-up', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname:fname, lname:lname, phone:phone, email:email, pass:pass, repass:repass
      })
    })

    const data = await res.json()

    if (data.status === 422 || !data) {
      alert("Invalid Registration")
      console.log("Invalid Registration")
    } else {
      alert("Registration Successful")
      console.log("Registration Successful")

      navigate("/login")
    }
  }
    
    return (
        <div className={styles.container}>
          {console.log("Users = ", user)}
            <div className={isSun ? styles.cA : styles.cA_isSun}>
                {/* <img src={getImageUrl("nav/logo.png")} className={styles.logo_icon} alt="" /> */}
                <h3 className={isSun ? styles.login_header : styles.login_header_isSun}>Kindly, register here!</h3>
                <h2 className={isSun ? styles.login_motive : styles.login_motive_isSun}>A registered account can give more benefits</h2>

                <form method="POST">
                    <div className={styles.name_section}>
                    <input type="text"
                    placeholder="First Name*"
                    className={isSun ? styles.ninput : styles.ninput_isSun}
                    name="fname"
                    value={user.fname}
                    autoComplete="off"
                    onChange={ handleChange }
                    required
                    />

                    <input type="text"
                    placeholder="Last Name*"
                    className={isSun ? styles.ninput : styles.ninput_isSun}
                    name="lname"
                    autoComplete="off"
                    value={user.lname}
                    onChange={ handleChange }
                    required />
                    </div>

                    <input type="text"
                    name="phone"
                    placeholder="Phone Number*"
                    className={isSun ? styles.input : styles.input_isSun}
                    autoComplete="off"
                    value={user.phone}
                    onChange={ handleChange }
                    required />
                    
                    <input type="email" 
                    placeholder="Enter email*" 
                    name="email"
                    className={isSun ? styles.input : styles.input_isSun}
                    autoComplete="off"
                    value={user.email}
                    onChange={ handleChange }
                    required/>

                    <input type="password" 
                    placeholder="Enter password*" 
                    className={isSun ? styles.input : styles.input_isSun}
                    name="pass"
                    value={user.pass}
                    onChange={ handleChange }
                    required/>

                    <input type="password" 
                    placeholder="Renter password*" 
                    className={isSun ? styles.input : styles.input_isSun}
                    name="repass"
                    value={user.repass}
                    onChange={ handleChange }
                    required/>

                    <p className={isSun ? styles.p : styles.p_isSun}><input type="checkbox" name="agreement" className={styles.check} />By clicking this checkbox, you agree with our <a href="#" className={isSun ? styles.terms : styles.terms_isSun}>Terms and Conditions</a></p>

                    <div className={styles.name_section}>
                    <button type="submit" onClick={ register } className={styles.login_btn}>Register</button>

                    <Link to="/login" className={styles.login_btn}>Login</Link>
                    </div>
                </form>
                
            </div>
            <div className={styles.cB}>
            </div>
        </div>
    )
}