import './AuthPage.scss'
import React, {useState} from 'react'
import Axios from '../../Utils/axios';

const AuthPage = () => {
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {username, password} = Object.fromEntries(formData);
        setLoginCred({username:username, password:password})
        console.log(loginCred); 
        loginReq(loginCred.e);
        
      }

    const [form, setForm] = useState('login');
    const [loginCred, setLoginCred] = useState({username:'' ,password:''});

    const loginReq = async (cred,e) => {
        console.log(cred);
        await Axios.post('/auth/login',loginCred).then(response => console.log(response)).catch(error => console.log(error.response.data));
        e.target.reset()
        setLoginCred({username:'', password:''})
    }

  return (
    <div className='authpage-container'>
        <div className="left">
            <h1>Social Media</h1>
            <p>Be a socialmedian and get connected with your friends and family for free.</p>
        </div>
        <div className="right">
            <div className="form-container">
                       
             { form === 'login'?  (  <form onSubmit={(e) =>  handleSubmit(e)} method='POST' action="http://localhost:4000/api/v1/auth/login" className="login">
                    <input type="text" placeholder='Username' name='username' />
                    <input type="password" placeholder='Password' name='password'  />
                    <div className="btns">
                    <button type="submit" className='btn btn-primary login-btn ' onClick={(e) =>{ 
                        // e.preventDefault();
                        // loginReq();
                        }}>Login</button>
                    <button className='btn btn-warning register-btn' onClick={() => setForm('register')}>Create an account?</button>
                    </div>
                </form>) 

                :

                 (<form method='POST' action="http://localhost:4000/api/v1/auth/register" className="register">
                    <input type="text" placeholder='Firstname' name='firstname' />
                    <input type="text" placeholder='Lastname' name='lastname' />
                    <input type="text" placeholder='Username' name='username' />
                    <input type="email" placeholder='E-mail' name='email' />
                    <div className="date-gender">
                    <input type="date" placeholder='DOB' name='dob' />
                    <select type="select" placeholder='Gender' name='gender' >            
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                    <input type="file"  placeholder='file' />
                    </div>
                    <div className="address">
                        <input type="text" placeholder='Country' name='country' />
                        <input type="text" placeholder='City' name='city' />
                        <input type="text" placeholder='Lives in' name='livesin' />
                    </div>
                    <input type="password" placeholder='Password' name='password' />
                    <div className="btns">
                    <button type="submit" className='btn btn-primary login-btn '>Register</button>
                    <p className='text-primary already-have-an-account'   onClick={(e) =>{ 
                        e.preventDefault();
                        setForm('login');
                        }}>
                            already have an account? Login.</p>
                    </div>
                </form>)}
            </div>
        </div>
    </div>
  )
}

export default AuthPage