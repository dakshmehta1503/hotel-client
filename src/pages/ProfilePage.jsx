import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function ProfilePage(){
    const[redirect, setRedirect] = useState(null);
    const {ready,user,setUser, setReady} = useContext(UserContext);
    let {subpage} = useParams();
    if(subpage === undefined){
        subpage = 'profile'
    }

    async function logout(){
        await axios.post('/logout');
        setRedirect('/');
        setUser(null)
    }
    
    if(!ready){ //if we are not ready
        return 'Loading...'
    }
    
    if(ready && !user  && !redirect){ //if we dont have a user 
        return <Navigate to={'/login'}/>
    }
    
    if(redirect){
        return <Navigate to={redirect}/>
    }  
    return(
        <div>
            <AccountNav/>
            {subpage ==='profile' && (
                <div className=" text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email}) <br/>
                    <button onClick={logout} className="primary max-w-sm mt-3">Log out</button>
                </div>
            )}
            {subpage === 'places' && (
                <PlacesPage/>
            )}
        </div>
    );
}