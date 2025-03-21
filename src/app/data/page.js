'use client';

import { useState, useEffect } from 'react';
import SandwichShopList from './SandwichShopList';
import { getSandwichShops, getAllRatings } from './api';
import ReviewForm from './ReviewForm';


export default function Data() {
 const [shops, setShops] = useState([]);
 const [allRatings, setAllRatings] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);


    useEffect(() => {
      Promise.all([getSandwichShops(), getAllRatings()])
      .then(([shopsData, allRatingsData]) => {
        setShops(shopsData);
        setAllRatings(allRatingsData);
        setLoading(false);
      }).catch(error => {
        setError(error);
        setLoading(false);
      });
    },[]);



    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <p className = "flex justify-center font-bold text-2xl">Sandwich Shops</p>
            <br></br>
            <SandwichShopList shops ={shops}/>
            <br></br>
            <ReviewForm/>
        </div>
    );
}