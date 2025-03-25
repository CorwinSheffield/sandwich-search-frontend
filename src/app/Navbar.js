'use client';

import Link from 'next/link';
import Search from './Search';
import { useSearch } from './SearchContext';



function Navbar (){
    console.log("Navbar rerendered");
  
    const {fetchSearchResults} = useSearch();


    return (
        <nav className="flex  items-center justify-between p-2.5  bg-black ">
            <div className="flex items-center space-x-4">
                <Link href="/">Home</Link>
                <Link href="/data">Sandwich Shops</Link>
            </div>
            <div className="flex items-center">
                <Search onSearchResults={fetchSearchResults} />
            </div>
       
        </nav>

    )
}

export default Navbar;