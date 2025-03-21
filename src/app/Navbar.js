'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{backgroundColor: '#000000', padding: '10px',display:'flex', justifyContent: 'space-around'}}>
            <Link href="/">Home</Link>
            <Link href="/data">Sandwich Shops</Link>
        </nav>
    )
}