import React from 'react'

export default function TestimonialsSection() {
    return (
        <div>
            {/* Testimonials Section */}
            <section className="py-16 bg-gray-100 px-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    What Users Say
                </h2>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded shadow">
                        <p className="italic">
                            “Thank you for delivering such a fast and good quality product.”
                        </p>
                        <h4 className="mt-4 font-semibold">– Customer</h4>
                    </div>

                    <div className="bg-white p-6 rounded shadow">
                        <p className="italic">
                            “I received the product i ordered when i Saw it.”
                        </p>
                        <h4 className="mt-4 font-semibold">– Customer</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}
