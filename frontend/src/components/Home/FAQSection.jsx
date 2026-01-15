import React from 'react'

export default function FAQSection() {
    return (
        <div>
            {/* FAQ Section */}
            <section className="py-16 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold">
                           Can i order now?
                        </h4>
                        <p className="text-gray-600">
                            Yes.you can order now.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold">
                           How many day will it take to recive the prodduct.
                        </h4>
                        <p className="text-gray-600">
                            You will receive the product within 3 days.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}
