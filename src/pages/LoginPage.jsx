import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from "../UserContext";

export default function LoginPage(){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[redirect, setRedirect] = useState('');


    const {setUser} = useContext(UserContext);
    async function handleLoginEvent(ev){
        ev.preventDefault(); // it will prevent loading
        try{
            const {data} = await axios.post('/login', {email,password}, {withCredentials: true});  
            setUser(data);
            alert('Logged in, Successfully!')
            setRedirect(true);
        }catch(e){
            alert('Unable to login, Please try again.')
        }
    }

    if(redirect){
        return <Navigate to={'/'}/>
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-5">Log in</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLoginEvent}>
                    <input type="email" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={ev => setEmail(ev.target.value)}/>

                    <input type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={ev => setPassword(ev.target.value)}/>

                    <button className="primary">Log in</button>
                    <div className="py-2 text-center text-gray-500">
                        Don't have an account yet? <Link className="text-black underline" to={'/register'}>Signup now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}



