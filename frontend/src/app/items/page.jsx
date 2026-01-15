import Link from "next/link";


export default async function ItemsPage() {
    const res = await fetch("https://royel-mart-backend.vercel.app/items", {
        cache: "no-store",
    });

    const items = await res.json();
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold text-center mb-10">
                Items List
            </h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded shadow hover:shadow-lg transition"
                    >
                        <img
                            src={item.image}
                            width={400} 
                            height={250}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">
                                {item.name}
                            </h3>

                            <p className="font-bold mb-4">
                                ৳ {item.price}
                            </p>

                            <Link
                                href={`/items/${item.id}`}
                                className="inline-block bg-black text-white px-4 py-2 rounded"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
