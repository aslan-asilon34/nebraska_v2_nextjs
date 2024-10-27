"use client"; 
import '@/app/styles/globals.css';
import MyHighChart from '@/components/MyHighChart';

import Link from 'next/link';
import { useState } from 'react';


export default function About() {
  const [search, setSearch] = useState('');


  const items = [
    { id: 1, name: 'John Doe', age: 28 },
    { id: 2, name: 'Jane Smith', age: 34 },
    { id: 3, name: 'Sam Green', age: 23 },
    { id: 4, name: 'Alice Johnson', age: 29 },
  ];

  // Filter items based on search input
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <h1>About Us</h1>
          <p>Ini adalah halaman tentang kami.</p>


          <MyHighChart/>

          



          <nav>
            <ul>
              <li className="text-black bg-purple-700 hover:bg-purple-800 ">
                <Link href="/">Home</Link>
              </li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>

          <div className="p-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="mb-4 p-2 border rounded w-full"
            />

            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border">ID</th>
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Age</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.length > 0 ? (
                  filteredItems.map(item => (
                    <tr key={item.id}>
                      <td className="py-2 px-4 border">{item.id}</td>
                      <td className="py-2 px-4 border">{item.name}</td>
                      <td className="py-2 px-4 border">{item.age}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="py-2 px-4 border text-center">
                      No results found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
    </>

  );
}
