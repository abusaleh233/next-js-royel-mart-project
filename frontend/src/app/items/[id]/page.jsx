import Link from "next/link";

export default async function ItemDetailsPage({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://royel-mart-backend.vercel.app/items/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <h2 className="text-center mt-10">Item Not Found</h2>;
  }

  const item = await res.json();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link href="/items" className="text-gray-500 hover:text-black transition-colors">
        ← Back to Items
      </Link>

      <div className="mt-6 flex flex-col md:flex-row gap-8 border rounded-2xl shadow-lg p-6 bg-white">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2">
          <img src={item.image} alt={item.name}
            className="w-full h-[400px] object-cover rounded-xl shadow-sm"/>
          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-8">
            <div className="flex items-center p-4 bg-blue-50 rounded-lg">
              <span className="mr-3 text-2xl">🚚</span>
              <p className="text-sm font-semibold">Free Home Delivery</p>
            </div>
            <div className="flex items-center p-4 bg-orange-50 rounded-lg">
              <span className="mr-3 text-2xl">💎</span>
              <p className="text-sm font-semibold">Premium Quality Frames</p>
            </div>
            <div className="flex items-center p-4 bg-purple-50 rounded-lg">
              <span className="mr-3 text-2xl">📦</span>
              <p className="text-sm font-semibold">Assorted Colors & Designs</p>
            </div>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            {item.name}
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-green-600">৳ {item.price}</span>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">IN STOCK</span>
          </div>

          <div className="border-t border-b py-4 mb-4">
            <h3 className="font-bold text-gray-800 mb-2">Key Highlights:</h3>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">
              {item.description}
            </p>
          </div>


          <div className="mt-auto space-y-3">
            <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition">
              Order Now
            </button>
            <button className="w-full border border-black py-3 rounded-lg font-bold hover:bg-gray-50 transition">
              Contact for Wholesale
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}
