import { Link, useParams } from "react-router-dom"
import AccountNav from "../AccountNav";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PlacesPage(){
    const [places,setPlaces] = useState([]);
    useEffect(() => {
    axios.get('/user-places').then(({data}) => {
      setPlaces(data);
    });
  }, []);
    return(
        <div>
            <AccountNav/>
                <div className="text-center">
                    <Link className="inline-flex bg-primary text-white px-3 py-4 rounded-full" to={'/account/places/new'} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                        Add new Places
                    </Link>
                </div>
                <div className="mt-4">
                {places.length > 0 && places.map(place => (
                    <Link to={'/account/places/'+place._id} className="flex cursor-pointer gap-3 bg-gray-100 p-4 rounded-2xl">
                    <div className="flex w-32 h-32 bg-gray-300 grow shrink-0">
                        {place.photos.length > 0 && (
                            <img className="object-cover" src={'http://localhost:4000/uploads/'+place.photos[0]} alt=""/>
                        )}
                    </div>
                    <div className="grow-0 shrink">
                        <h2 className="text-xl">{place.title}</h2>
                        <p className="text-sm mt-2">{place.description}</p>
                    </div>
                    </Link>
                ))}
                </div>
        </div>
    )
}