import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dummy items data
const items = [
    {
        id: "1",
        name: "Metallic Glasses",
        description: `Premium Quality Eyewear Frames at Only ৳350!
                    Now offering even better quality and highly durable frames. 
                    Free Home Delivery all across the country!
                    High-quality frames for just ৳650.
                    We are the first to offer Retail at Wholesale Prices!
                    Note: We customize all power glasses, including Blue Cut and White glass.
                    Wholesale Inquiries: We are direct importers. For wholesale orders, please call us directly. Minimum order quantity: 100 pieces (assorted colors and designs available).
                    Why Choose Us?
                    Superior quality frames.

                    Complimentary accessories with every frame:
                    1. 1 Pouch Bag
                    2. 1 Beautiful Plastic Box
                    3. 1 Premium Microfiber Cleaning Cloth (Selvet)

                    Variety: Choose from 40 different colors across 28 unique designs!`,
        price: 650, 
        image: "https://i.ibb.co.com/FqgcJHWn/image1.jpg",
    },
    {
        id: "2",
        name: "Metallic Glasses",
        description: `Premium Quality Eyewear Frames at Only ৳350!
                    Now offering even better quality and highly durable frames. 
                    Free Home Delivery all across the country!
                    High-quality frames for just ৳650.
                    We are the first to offer Retail at Wholesale Prices!
                    Note: We customize all power glasses, including Blue Cut and White glass.
                    Wholesale Inquiries: We are direct importers. For wholesale orders, please call us directly. Minimum order quantity: 100 pieces (assorted colors and designs available).
                    Why Choose Us?
                    Superior quality frames.

                    Complimentary accessories with every frame:
                    1. 1 Pouch Bag
                    2. 1 Beautiful Plastic Box
                    3. 1 Premium Microfiber Cleaning Cloth (Selvet)

                    Variety: Choose from 40 different colors across 28 unique designs!`,
        price: 650,
        image: "https://i.ibb.co.com/BK4SjcBw/image2.jpg",
    },
    {
        id: "3",
        name: "Sun Glasses",
        description: `Premium Quality Eyewear Frames at Only ৳1800!
                    Now offering even better quality and highly durable frames. 
                    Free Home Delivery all across the country!
                    High-quality frames for just ৳650.
                    We are the first to offer Retail at Wholesale Prices!
                    Note: We customize all power glasses, including Blue Cut and White glass.
                    Wholesale Inquiries: We are direct importers. For wholesale orders, please call us directly. Minimum order quantity: 100 pieces (assorted colors and designs available).
                    Why Choose Us?
                    Superior quality frames.

                    Complimentary accessories with every frame:
                    1. 1 Pouch Bag
                    2. 1 Beautiful Plastic Box
                    3. 1 Premium Microfiber Cleaning Cloth (Selvet)

                    Variety: Choose from 40 different colors across 28 unique designs!`,
        price: 1800,
        image: "https://i.ibb.co.com/HTxRg6pR/image3.jpg",
    },
    {
        id: "4",
        name: "Spiderman Black Costume",
         description: `Premium Quality Character Costumes for Your Little Superheroes! 🦸‍♂️✨
                        Bring a smile to your child’s face with our Original China Jersey Fabric costumes. Specially designed for comfort and style, these are the perfect choice for your little ones!
                        Available Characters: 🕷️ Spiderman 🦇 Batman 🦸‍♂️ Superman
                        Why Choose Our Costumes? ✅ Made with Original China Fabrics (Premium Quality) ✅ Ultra-comfortable & Breathable Jersey Material ✅ Soft on skin, perfect for all-day play!
                        Sizes Available: 📏 For ages 2 years to 10 years (All sizes available)
                        Make your child's superhero dream come true! Order Now to give them the best gift ever. 🎁`,
        price: 350,
        image: "https://i.ibb.co.com/fGX6tvRM/spiderman3.jpg",
    },
    {
        id: "5",
        name: "Spiderman Black Costume",
        description: `Premium Quality Character Costumes for Your Little Superheroes! 🦸‍♂️✨
                        Bring a smile to your child’s face with our Original China Jersey Fabric costumes. Specially designed for comfort and style, these are the perfect choice for your little ones!
                        Available Characters: 🕷️ Spiderman 🦇 Batman 🦸‍♂️ Superman
                        Why Choose Our Costumes? ✅ Made with Original China Fabrics (Premium Quality) ✅ Ultra-comfortable & Breathable Jersey Material ✅ Soft on skin, perfect for all-day play!
                        Sizes Available: 📏 For ages 2 years to 10 years (All sizes available)
                        Make your child's superhero dream come true! Order Now to give them the best gift ever. 🎁`,
        price: 380,
        image: "https://i.ibb.co.com/1fX8vSqz/spiderman2.jpg",
    },
    {
        id: "6",
        name: "Superman Costume",
        description: `Premium Quality Character Costumes for Your Little Superheroes! 🦸‍♂️✨
                        Bring a smile to your child’s face with our Original China Jersey Fabric costumes. Specially designed for comfort and style, these are the perfect choice for your little ones!
                        Available Characters: 🕷️ Spiderman 🦇 Batman 🦸‍♂️ Superman
                        Why Choose Our Costumes? ✅ Made with Original China Fabrics (Premium Quality) ✅ Ultra-comfortable & Breathable Jersey Material ✅ Soft on skin, perfect for all-day play!
                        Sizes Available: 📏 For ages 2 years to 10 years (All sizes available)
                        Make your child's superhero dream come true! Order Now to give them the best gift ever. 🎁`,
        price: 500,
        image: "https://i.ibb.co.com/zVfWghF4/seuperman3.jpg",
    },
];

export default items;

// Root test
app.get("/", (req, res) => {
  res.send("Express API is running");
});

// GET all items
app.get("/items", (req, res) => {
  res.json(items);
});

// GET single item
app.get("/items/:id", (req, res) => {
  const item = items.find((i) => i.id === req.params.id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
});

// POST add new item
app.post("/items", (req, res) => {
  const newItem = {
    id: Date.now().toString(),
    ...req.body,
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
