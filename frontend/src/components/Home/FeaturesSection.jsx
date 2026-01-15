import React from 'react'

export default function FeaturesSection() {
    return (
        <div>
            {/* 3️⃣ Features Section */}
            <section className="py-16 bg-gray-100 px-6">
                <h2 className="text-3xl font-bold text-center mb-10">Features</h2>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="font-semibold text-xl mb-2">Marketing Team</h3>
                        <p className="text-gray-600">
                           We have a skilled marketing team
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="font-semibold text-xl mb-2">Delivery team</h3>
                        <p className="text-gray-600">There in manpower to deliver products all over Bangladesh
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="font-semibold text-xl mb-2">Seles Team</h3>
                        <p className="text-gray-600">
                           We have a skilled sales team 
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}
