'use client';

import { useState, useEffect, useContext } from 'react';
import SandwichShopList from './SandwichShopList';
import { getSandwichShops, getAllRatings } from './api';
// import ReviewForm from './ReviewForm';
// import Navbar from '../Navbar';



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
  }, []);

  // const handleSearchResults = (searchResults, err) => {
  //   if (err) {
  //     setError(err);
  //   } else if (searchResults) {
  //     setShops(searchResults);
  //     setError(null);
  //   }
  // };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <p className="flex justify-center font-bold text-2xl">Sandwich Shops</p>
      <br></br>
      <SandwichShopList shops={shops}/* searchResults={searchResults}*/ />
      <br></br>
      {/* <ReviewForm/> */}
    </div>
  );
}