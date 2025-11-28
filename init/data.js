const sampleListings = [
        {
          title: "Ceramic Dotted Bowl Set",
          description:
            "Elevate your dining experience with the Ceramic Dotted Bowl Set. This set includes a range of beautifully crafted ceramic bowls with charming dotted patterns. Whether used for serving soups, salads, or desserts, these bowls add a touch of elegance to your table.",
          image: {
            filename: "listingimage",
            url : "https://plus.unsplash.com/premium_photo-1689247946001-34d1588297f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }, 
          price: 699,
          location: "Andhra Pradesh",
          country: "India",
        },

        {
          title: "Natural 2 Door Wardrobe",
          description:
            "The Natural 2 Door Wardrobe offers a timeless and versatile storage solution for your bedroom or living space.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VwYm9hcmR8ZW58MHx8MHx8fDA%3D",
          }, 
          price: 2500,
          location: "Arunachal Pradesh",
          country: "India",
        },

        {
          title: "Handwoven Bamboo Baskets",
          description:
            "Handwoven Bamboo Baskets are a sustainable and stylish storage solution.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1695391353234-ee14eba4ee2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEhhbmR3b3ZlbiUyMEJhbWJvbyUyMEJhc2tldHN8ZW58MHx8MHx8fDA%3D",
          }, 
          price: 549,
          location: "Assam",
          country: "India",
        },

        {
          title: "Crafted Drum Hanging Lights",
          description:
            "Add an element of artistry to your home with Crafted Drum Hanging Lights.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1687267045910-c6bbdafc806c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENyYWZ0ZWQlMjBEcnVtJTIwSGFuZ2luZyUyMExpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D",
          }, 
          price: 650,
          location: "Raipur",
          country: "India",
        },

        {
          title: "Perfect Pot Cups",
          description:
            "The Perfect Pot Cups are a versatile and practical addition to your kitchen.",
          image: {
            filename: "listingimage",
            url : "https://plus.unsplash.com/premium_photo-1719454275817-f247a54107d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFBlcmZlY3QlMjBQb3QlMjBDb29rZXIlMjBDdXBzfGVufDB8fDB8fHww",
          }, 
          price: 299,
          location: "Surat",
          country: "India",
        },

        {
          title: "Modern Home decoration",
          description:
            "Our Modern Home Decoration collection features a curated selection of contemporary decor items.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1645608284463-a5151d120e0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW9kZXJuJTIwSG9tZSUyMGRlY29yYXRpb24lMjBwaWVjZXxlbnwwfHwwfHx8MA%3D%3D",
          }, 
          price: 399,
          location: "Patna",
          country: "India",
        },


        {
          title: "Elegant Abstract Wall painting",
          description:
            "A stunning abstract wall painting with vibrant colors and intricate details, perfect for adding a touch of sophistication to your home or office decor.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1602587194973-c2a4ef13dc58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW9kZXJuJTIwSG9tZSUyMGRlY29yYXRpb24lMjBwaWVjZXxlbnwwfHwwfHx8MA%3D%3D",
          }, 
          price: 449,
          location: "Chandigarh",
      country: "India",
        },

        {
          title: "Men's Cotton Crew Neck T-Shirt ",
          description:
            "A soft and breathable cotton t-shirt with a classic crew neck design, perfect for everyday wear and casual styling.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRzaGlydHNjbG90aGluZyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
          }, 
          price: 249,
          location: "Punjab",
          country: "India",
        },


        {
          title: "Handcrafted Ceramic Pottery",
          description:
            "Beautifully handcrafted ceramic pottery with a smooth finish and intricate detailing, perfect for home décor or functional use",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1708054536882-44194b904589?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhhbmQlMjBtYWRlJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
          }, 
          price: 249,
          location: "Mumbai",
          country: "India",
        },

        {
          title: "Hand Embroidery Punjabi Jutti with Moti work",
          description:
            "Beautifully handcrafted juttis with intricate embroidery, combining traditional artistry with modern comfort for a stylish ethnic look.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1663010968803-09f5e2dcfc61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fEVtYnJvaWRlcnklMjBQdW5qYWJpJTIwZm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D",
          }, 
          price: 549 ,
          location: "Goa",
          country: "India",
        },

        {
          title: "Embroided handkerchief",
          description:
            "A lightweight and durable cotton handkerchief with a smooth texture, perfect for daily use and easy to carry.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1657470036063-c7e49da31393?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEhhbmQlMjBFbWJyb2lkZXJ5JTIwUHVuamFiaSUyMEp1dHRpJTIwZm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D",
          }, 
          price: 149 ,
          location: "Bhopal",
      country: "India",
        },


        {
          title: "Wooden Sculpture Owl",
          description:
            "A beautifully hand-carved wooden owl sculpture with intricate detailing, perfect for home décor or as a unique gift.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1652745028094-ac25202a3bce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdvb2RlbiUyMFNjdWxwdHVyZSUyME93bHxlbnwwfHwwfHx8MA%3D%3D",
          }, 
          price: 399,
          location: "Ranchi",
          country: "India",
        },

        {
          title: "Affluent Leather Handbag",
          description:
            "A luxurious leather handbag with a sleek design and spacious compartments, perfect for both casual and formal occasions.",
          image: {
            filename: "listingimage",
            url : "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEFmZmx1ZW50JTIwTGVhdGhlciUyMEhhbmRiYWd8ZW58MHx8MHx8fDA%3D",
          }, 
          price: 659 ,
          location: "Jaipur",
          country: "India",
        },

        {
          title: "Feng Shui Elephant Showpiece",
          description:
            "A beautifully crafted elephant showpiece, believed to attract good fortune, wisdom, and positive energy to your home or office.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1655827660718-ee2d0184d1b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZlbmclMjBTaHVpJTIwRWxlcGhhbnQlMjBTaG93cGllY2V8ZW58MHx8MHx8fDA%3D",
          }, 
          price: 499,
          location: "Shillong",
          country: "India",
        },

        {
          title: "Surreal Faces Table Planters",
          description:
            "Unique table planters featuring surreal face designs, perfect for adding a touch of creativity and elegance to your home or office décor.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1571598881152-4c8806fa7209?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFN1cnJlYWwlMjBGYWNlcyUyMFRhYmxlJTIwUGxhbnRlcnN8ZW58MHx8MHx8fDA%3D",
          }, 
          price: 799,
          location: "kohima",
          country: "India",
        },

        {
          title: "SpiraEnchanté Glass Storage Bowl",
          description:
            "A beautifully designed glass storage bowl with a swirl pattern, perfect for storing snacks, fruits, or serving in style.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1710895473781-b759e755a5cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3BpcmFFbmNoYW50JUMzJUE5JTIwR2xhc3MlMjBTdG9yYWdlJTIwQm93bHxlbnwwfHwwfHx8MA%3D%3D",
          }, 
          price: 699,
          location: "Chennai",
          country: "India",
        },

        {
          title: "Marbling All the Way Canvas (Matte Finish)",
          description:
            "A stunning canvas with mesmerizing marble patterns in a matte finish, perfect for adding a modern and artistic touch to any space.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1579965342575-16428a7c8881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D",
          }, 
          price: 499,
          location: "Lucknow",
          country: "India",
        },

        {
          title: "Vista Frame Floor Mirror",
          description:
            "A stylish full-length mirror with a sleek vista frame, perfect for adding depth and sophistication to any room.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1667610342763-7618517d9651?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }, 
          price: 799,
          location: "Dehradun",
          country: "India",
        },

        {
          title: "Serenity Sands Table Lamp",
          description:
            "The Serenity Sands Table Lamp combines a sand-textured base with a soft fabric shade, offering a warm, ambient glow for a cozy and elegant atmosphere.",
          image: {
            filename: "listingimage",
            url : "https://images.unsplash.com/photo-1693573643662-134496365638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNlcmVuaXR5JTIwU2FuZHMlMjBUYWJsZSUyMExhbXB8ZW58MHx8MHx8fDA%3D",
          }, 
          price: 789,
          location: "Kolkata",
          country: "India",
        },




];

module.exports = { data: sampleListings };
