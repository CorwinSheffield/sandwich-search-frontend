import { useState } from 'react';
import { useSearch } from "./SearchContext";
import { useRouter } from 'next/navigation';
import {MagnifyingGlassIcon} from '@heroicons/react/24/solid';

export default function Search({className}) {
    console.log("search rerendered");
    const {fetchSearchResults} = useSearch();
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    function handleSearchChange(event)  {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        console.log("Submitting search:",searchTerm);
        fetchSearchResults(searchTerm);
    }



    return (
        <form onSubmit={handleSearchSubmit} className={`relative flex items-center justify-between space-x-4 ${className}`}>
            {/* <label className="m-1"forhtml="restaurant"></label> */}
            <input className=" focus:ring-[#7c5d48] focus:outline-none rounded md:w-96 xs:w-auto ring-gray-500 ring-2 p-1" type="text" name="name" placeholder="Search Restaurants by name..." value={searchTerm} onChange={handleSearchChange}></input>
            <button type="submit" onClick={() => router.push('/data')}>

                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500"/>

            </button>
        </form>
    )
}