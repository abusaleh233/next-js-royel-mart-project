import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa"; 
import logoImg from '../../public/logo.jpg';

const Footer = () => {
  return (
    <footer className="text-center py-6 bg-gray-100 border-t flex flex-col items-center gap-2">
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

      <Link
        href="https://www.facebook.com/royalmartshopbd"
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors text-3xl"
      >
        <FaFacebook />
      </Link>

      <p className="text-gray-600">
        © {new Date().getFullYear()} Royel Mart. All rights reserved.
      </p>


    </footer>
  );
};

export default Footer;