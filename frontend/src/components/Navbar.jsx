"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logoImg from '../../public/logo.jpg';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasAuth = document.cookie.includes("auth=true");
    setIsLoggedIn(hasAuth);
  }, []);

  
  const handleLogout = () => {
   
    document.cookie = "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    setIsLoggedIn(false);

    router.push("/login");
    
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-t from-purple-900 to-gray-600 text-white">
      <Link className="flex justify-between items-center gap-2" href="/">
       <Image 
          src={logoImg} 
          alt="Royel Mart Logo" 
          width={40} 
          height={40} 
          className="rounded-xl object-cover"
        />
        <h1 className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">Royel-Mart</h1>
      </Link>

      <div className="space-x-4 font-bold">
        <Link href="/">Home</Link>
        <Link href="/items">Items</Link>

        {!isLoggedIn ? (
          <Link href="/login" className="bg-blue-600 px-4 py-2 rounded">
            Login
          </Link>

        ) : (
          <>
            <Link href="/add-item">Add-items</Link>
            <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded cursor-pointer">
              LogOut
            </button>
          </>

        )}
      </div>
    </nav>
  );
};

export default Navbar;