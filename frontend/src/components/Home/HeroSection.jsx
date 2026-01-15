import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    return (
        <div>
            {/*Hero Section */}
            <section className="h-[70vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-purple-900 to-indigo-500 text-white px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Welcome to Royel Mart
                </h1>
                <p className="text-xl md:text-2xl font-bold mb-6">
                    It is a trusted company for digital marketing
                </p>
                <Link
                    href="/items"
                    className="bg-white text-indigo-600 px-6 py-3 rounded font-semibold"
                >
                    View Items
                </Link>
            </section>
        </div>
    )
}
