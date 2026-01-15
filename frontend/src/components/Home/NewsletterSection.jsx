import React from 'react'

export default function NewsletterSection() {
    return (
        <div>
            {/* Newsletter Section */}
            <section className="py-16 bg-indigo-600 text-white text-center px-6">
                <h2 className="text-3xl font-bold mb-4">
                    Subscribe to Our Newsletter
                </h2>
                <p className="mb-6">
                    Get updates about new Service and improvements.
                </p>

                <form className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded text-black border "
                    />
                    <button className="bg-black px-6 py-2 rounded">
                        Subscribe
                    </button>
                </form>
            </section>
        </div>
    )
}
