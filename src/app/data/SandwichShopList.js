'use client';

import { useState } from 'react';
import { getShopRatings } from './api';

export default function SandwichShopList({ shops }) {
    const [shopRatings, setShopRatings] = useState({});
    const toggleRatings = (shopId) => {
        if (shopRatings[shopId]) {
            setShopRatings({ ...shopRatings, [shopId]: null });
        } else {
            getShopRatings(shopId).then(ratings => setShopRatings({ ...shopRatings, [shopId]: ratings }));
        }
    };

    return (
        <ul className="grid grid-cols-3 justify-center gap-3 font-[family-name:var(--font-ubuntu-mono)]">
            {shops.map(shop => (
                <li key={shop.id}>
                    <strong>{shop.name}</strong> - Rating: {shop.rating}
                    <br></br>
                    <button className = "rounded-full border border-solid transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bd-[#1a1a1a] hover:border-transparent p-1.5" onClick={() => toggleRatings(shop.id)}>
                        {shopRatings[shop.id] ? 'Hide Ratings':'Show Ratings'}
                    </button>
                    {shopRatings[shop.id] && (
                        <ul>
                            {shopRatings[shop.id].map(rating => (
                                <div key={rating.id}>
                                <li >
                                    Rating: {rating.rating}
                                </li>
                                <li>
                                    Comments: {rating.review}
                                </li>
                                </div>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}