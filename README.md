# Chronicle Ink News Server

A robust RESTful API server for the Chronicle Ink news platform, built with Node.js and Express. This backend powers article management, user authentication, subscriptions, and admin controls.

---

## 🚀 Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for building REST APIs
- **MongoDB**: NoSQL database for storing articles and user data
- **Firebase**: Authentication and user management
- **Stripe**: Payment processing for subscriptions
- **JWT**: Secure authentication for protected routes
- **Vercel**: Cloud hosting for server deployment

---

## 📂 Project Structure

```
news-server-main/
├── controller/         # Business logic for routes
├── middleware/         # Custom Express middlewares
├── models/             # Mongoose schemas
├── routes/             # API route definitions
├── .env                # Environment variables
├── server.js           # Entry point
└── README.md           # Project documentation
```

---

## 🛠️ Getting Started (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/news-server-main.git
cd news-server-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
FIREBASE_API_KEY=your_firebase_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
JWT_SECRET=your_jwt_secret
```

### 4. Run the Server

```bash
npm start
```

Server will run at `http://localhost:5000`

---

## 🌐 API Endpoints

- **Authentication:** `/auth`
- **Articles:** `/articles`, `/articles/approved`, `/articles/:id`, etc.
- **Users:** `/users/register`, `/users/user-data`, `/users/update`, etc.
- **Admin:** `/articles/approve/:id`, `/all-users`, `/users/admin/:id`, etc.
- **Subscription:** `/users/subscription`, `/users/premium/`

See the [API documentation](#) for detailed request/response formats.

---

## 🚢 Deployment

The server is deployed on Vercel:

**Live API:**  
[https://chronicle-ink-server.vercel.app/](https://chronicle-ink-server.vercel.app/)

---

## 👤 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📧 Contact

For questions or support, please open an issue or contact [your-email@example.com](mailto:your-email@example.com).

---
