import React from 'react'

export default function ServicesSection() {
    return (
        <div>
            {/*  Services Section */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="border p-6 rounded text-center">
                        Item Listing
                    </div>
                    <div className="border p-6 rounded text-center">
                        Product Recive and Delivery
                    </div>
                    <div className="border p-6 rounded text-center">
                       Fast delivey to all districts of Bangladesh
                    </div>
                </div>
            </section>
        </div>
    )
}
