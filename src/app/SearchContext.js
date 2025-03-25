'use client'

import { createContext, useState, useContext, useEffect } from 'react';
import { getSandwichShops, getSandwichShopByName } from './data/api';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchAllShops = async () => {
            try {
                const shops = await getSandwichShops();
                setSearchResults(shops);
                console.log("Initial shops loaded:", shops);
            } catch (error) {
                console.error("Error fetching all sandwich shops:", error);
            }
        };

        fetchAllShops();
    }, []);


    const fetchSearchResults = async (query) => {
        console.log("Fetching search results: ", query);
        if (!query) {
            try {
                const shops = await getSandwichShops();
                setSearchResults(shops);
                console.log("Resetting search, showing all shops:", shops);
            } catch (error) {
                console.error("Error fetching all sandwich shops:", error);
            }
        }
        else {
            try {
                const shop = await getSandwichShopByName(query);
                setSearchResults([shop]);
                console.log("Search results updated:", [shop]);
            } catch (error) {
                console.error("Error fetching search result: ", error);
            }
        }
    };

    return (
        <SearchContext.Provider value={{ searchResults, fetchSearchResults }}>
            {children}
        </SearchContext.Provider>
    )
};


export const useSearch = () => useContext(SearchContext);