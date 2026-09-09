# Artify

Artify is a full-stack web application for browsing, creating, and managing art listings, built with Node.js, Express, and MongoDB using server-side rendering (EJS). It supports user authentication, image uploads, and full CRUD functionality for listings.

## ✨ Features

- User authentication (sign up, log in, log out) with hashed passwords
- Create, read, update, and delete art listings
- Image upload with Cloudinary integration
- Server-side input validation with Joi
- Flash messages for user feedback (success/error notifications)
- Authorization checks so only listing owners can edit/delete their own listings
- Responsive, server-rendered views with reusable layouts

## 🛠️ Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- Passport.js (`passport-local`, `passport-local-mongoose`) for authentication
- Joi for schema validation
- Multer + `multer-storage-cloudinary` for file uploads
- Cloudinary for image hosting
- `connect-flash` for flash messaging
- `method-override` for supporting PUT/DELETE in forms

**Frontend**
- EJS with `ejs-mate` for templating and layouts
- CSS (see `public/` for static assets)

## 📁 Folder Structure

```
Artify-Final-Project/
├── controllers/     # Route handler logic
├── init/            # Database seeding / initialization scripts
├── models/          # Mongoose schemas
├── public/          # Static assets (CSS, images, client JS)
├── routes/          # Express route definitions
├── utils/           # Helper functions (e.g. async error wrapper)
├── views/           # EJS templates
├── app.js           # App entry point
├── cloudConfig.js   # Cloudinary configuration
├── middleware.js     # Custom middleware (auth checks, etc.)
├── schema.js         # Joi validation schemas
└── package.json
```

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/salonig16/Artify-Final-Project.git
   cd Artify-Final-Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with the following:
   ```
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ```
   > Adjust variable names above to match what your `cloudConfig.js`/`app.js` actually expect.

4. **Run the app**
   ```bash
   node app.js
   ```
   or, if you have nodemon set up:
   ```bash
   npx nodemon app.js
   ```

5. Visit `http://localhost:3000` (or your configured port) in your browser.

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `ATLASDB_URL` | MongoDB connection string |
| `SECRET` | Session secret used by `express-session` |
| `CLOUD_NAME` | Cloudinary cloud name |
| `CLOUD_API_KEY` | Cloudinary API key |
| `CLOUD_API_SECRET` | Cloudinary API secret |

## 🧪 Usage

- Sign up for a new account or log in.
- Browse existing art listings on the homepage.
- Create a new listing with title, description, price, and an image.
- Edit or delete listings you own.
- Log out when done.

## 👤 Author

**Saloni G**
GitHub: [@salonig16](https://github.com/salonig16)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
