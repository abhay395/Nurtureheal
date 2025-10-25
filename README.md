# NurtureHeal

A full-stack web application built with React and Node.js, designed to provide health and wellness services.

## 🚀 Features

- **User Authentication**: Secure login and registration system
- **User Profiles**: Personalized user profiles with role-based access
- **Modern UI**: Built with React, Tailwind CSS, and Framer Motion
- **Responsive Design**: Mobile-first approach with responsive layouts
- **State Management**: Zustand for client-side state management
- **API Integration**: React Query for efficient data fetching and caching
- **Payment Integration**: Razorpay payment gateway integration
- **File Upload**: Multer for handling file uploads
- **Security**: JWT authentication, rate limiting, and CORS protection

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **Zustand** - State management
- **React Query** - Data fetching and caching
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing
- **Express Rate Limit** - Rate limiting

## 📁 Project Structure

```
NurtureHeal/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── api/           # API configuration and endpoints
│   │   ├── assets/        # Static assets (images, logos)
│   │   ├── componente/    # Reusable components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   ├── store/         # Zustand stores
│   │   └── utils/         # Utility functions
│   ├── package.json
│   └── vite.config.js
├── server/                # Backend Node.js application
│   ├── controller/        # Route controllers
│   ├── db/               # Database connection
│   ├── middleware/       # Express middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   └── utils/            # Utility functions
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NurtureHeal
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the server directory:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=7d
   ```

   Create a `.env` file in the client directory:
   ```env
   VITE_API_URL=http://localhost:3000/api/v1
   ```

### Running the Application

1. **Start the server**
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:3000`

2. **Start the client**
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5174`

## 📝 Available Scripts

### Client Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
### Server Scripts
- `npm start` - Start the server with nodemon

## 🔧 Configuration

### CORS Configuration
The server is configured to allow requests from:
- `http://localhost:5174` (development)

### Rate Limiting
- 1000 requests per 15 minutes per IP address

## 🚀 Deployment

### Frontend Deployment

### Backend Deployment
Configure your production environment variables and deploy to your preferred hosting service (Heroku, Railway, DigitalOcean, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhay Prajapati**

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

**Note**: This is a basic README. Please update it with more specific details about your application's features, API endpoints, and deployment instructions as needed.
