import axios from 'axios'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        console.log("data submittted")
        e.preventDefault()
        axios.post('http://localhost:4000/register/', { name, email, password })
        .then(result => {console.log(result)
            navigate("/login")})
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input type="text" placeholder='enter name' name='name' onChange={(e) => setname(e.target.value)} />

                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" placeholder='enter email' name='email' onChange={(e) => setemail(e.target.value)} />

                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password" placeholder='enter name' name='password' onChange={(e) => setpassword(e.target.value)} />
                    <button type='submit'>Register</button>

                    <p>Already have an account</p>
                    <Link to='/login'>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp