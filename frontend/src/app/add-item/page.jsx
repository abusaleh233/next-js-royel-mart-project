"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddItemPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price || !image) {
      setError("All fields are required");
      return;
    }

    const newItem = { name, description, price, image };

    try {
      const res = await fetch("http://localhost:5000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (res.ok) {
        toast.success("Item added successfully!");
        router.push("/items");
      } else {
        toast.error("Failed to add item");
      }
    } catch (err) {
      toast.error("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg border rounded p-6 shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Add New Item
        </h1>

        {error && (
          <p className="text-red-500 text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Item Name"
            className="w-full border px-4 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="w-full border px-4 py-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full border px-4 py-2 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            placeholder="Image URL"
            className="w-full border px-4 py-2 rounded"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <button className="w-full bg-black text-white py-2 rounded">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
