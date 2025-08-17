# 📝 To-Do List App
##Description
A simple full-stack to-do list application, built with Node.js, Express, MongoDB, and vanilla JS. It is a learning project thanks to [John Smilga from Coding Addict](https://youtu.be/qwfE7fSVaZM?si=_ayY8VvJ3nfGdRb-)
##Features
- Add,Edit,Delete tasks
- Mark tasks as compelted
- Persist data with the help of MongoDB Atlas

##Tech stack
- **Frontend**: HTML, CSS and Javascript
- **Backend**: NodeJS, ExpressJS
- **Database**: MongoDB Atlas
- **Tools**: Axios, Nodemon, Dotenv, Mongoose
---
 ## ⚡ Getting Started

### Prerequisites
- Node.js installed
- MongoDB instance (Atlas or local)


### Installation
```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
npm install
npm start
```
###Connecting to the database
You need to be running a mongoDB server locally or use atlas. Set that up.
`nano .env` in the directory. 
Get the connection string if you are running Atlas or if you are running locally and write `MONGO_URI="Connection_String"` inside the .env file (replace Connection_String with your connection string).

Now open [http://localhost:3000] in your browser. (You can change the port inside app.js).

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.
