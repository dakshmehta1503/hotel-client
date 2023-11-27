import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function LoginPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function submitRegister(ev){
        ev.preventDefault(); // it will not reload the page after adding this
        try{
            await axios.post('/register', {
                name,
                email,
                password,
            });
            alert('Succesfully Registered. Now you can log in.')
        }catch(e){
            alert('Registration Failed. Please try again later.')
        }
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-5">Welcome to HotelBear!</h1>
                <form className="max-w-md mx-auto" onSubmit={submitRegister}>
                    <input type="text" 
                    placeholder="Enter name" 
                    value={name} 
                    onChange={ev => setName(ev.target.value)}/>

                    <input type="email" 
                    placeholder="Enter email" 
                    value={email} 
                    onChange={ev=> {setEmail(ev.target.value)}}/>

                    <input type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={ev=> setPassword(ev.target.value)}/>

                    <button className="primary">Sign up</button>
                    <div className="py-2 text-center text-gray-500">
                        Already a member? <Link className="text-black underline" to={'/login'}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}