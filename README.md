[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18870045&assignment_repo_type=AssignmentRepo)

# News Aggregator API

## 📌 Project Overview
This is a **Node.js-based News Aggregator API** that fetches and serves news articles based on user preferences. The API integrates with the **GNews API** to retrieve real-time news and caches responses to optimize performance.

## 🛠 Tech Stack
- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **MongoDB** - Database for user authentication and preferences
- **JWT (JSON Web Tokens)** - User authentication
- **Bcrypt.js** - Password hashing
- **Axios** - Making API requests
- **Node-cache** - Caching news articles

## 🚀 Features
- **User Authentication:** Sign up, login, and secure routes with JWT.
- **Preferences Management:** Users can save their favorite news categories.
- **Fetch News by Category:** Retrieves news based on user-defined categories.
- **Caching:** Stores news for faster access and reduced API calls.
- **Error Handling & Validation:** Proper response messages for various scenarios.

## 📂 Project Structure
```
📁 news-aggregator-api
├── 📂 controllers
│   ├── user.controller.js
│   ├── news.controller.js
│   ├── preferences.controller.js
├── 📂 middleware
│   ├── auth.middleware.js
├── 📂 models
│   ├── user.model.js
├── 📂 routes
│   ├── auth.routes.js
│   ├── news.routes.js
│   ├── preferences.routes.js
├── 📂 lib
│   ├── db.js
│   ├── utils.js
├── app.js
├── .env
├── package.json
├── README.md
```

## 📜 API Endpoints

### 🔑 **Authentication**
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| POST   | `/users/signup` | User registration |
| POST   | `/users/login`  | User login |

### 📰 **News**
| Method | Endpoint    | Description |
|--------|------------|-------------|
| GET    | `/news`    | Fetch news based on user preferences |

### ⚙️ **User Preferences**
| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| GET    | `/users/preferences` | Get user preferences |
| PUT    | `/users/preferences` | Update user preferences |

## 🔧 Setup & Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up environment variables in `.env`:
   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_secret_key
   NEWS_API_KEY=your_gnews_api_key 
   ```
3. Run the server:
   ```bash
   npm start
   ```

## 🛠 Running Tests
To run tests, use:
```bash
npm run test
```



