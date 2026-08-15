# StudySpace

A productivity-focused web platform designed to help students organize their tasks, capture ideas, and maintain focused study sessions — all in one place.

StudySpace is a full-stack productivity platform built for students who want a simple and organized workspace for managing their daily study activities.

It combines a Todo Manager, Sticky Notes Board, and Pomodoro Timer into a single application, helping users plan what they need to do, keep important notes visible, and stay focused while studying.

## Screenshots

### Login Page

<img width="1905" height="901" alt="StudySpace Dashboard" src="https://github.com/user-attachments/assets/7467001f-a986-44d7-a24e-46b2f2bdfc12" />

### Dashboard
<img width="1870" height="907" alt="image" src="https://github.com/user-attachments/assets/4acc7243-9933-4159-bd15-0effb4184320" />


### Todo Management

<img width="1894" height="907" alt="StudySpace Todo Management" src="https://github.com/user-attachments/assets/a698f89c-c972-4357-8c44-cc51d18b22d3" />

### Sticky Notes

<img width="1895" height="901" alt="StudySpace Sticky Notes" src="https://github.com/user-attachments/assets/faa240e9-fd64-4081-89be-831dccf03404" />

### Pomodoro Timer

<img width="1897" height="913" alt="StudySpace Pomodoro Timer" src="https://github.com/user-attachments/assets/9b337c6c-b8bc-45de-8cd1-015847203872" />

## Features

### Todo Management

Manage your daily tasks with a dedicated Todo system.

* Create new todos with a deadline
* Update existing todos
* Delete todos
* Track tasks based on their due dates
* Once a todo has expired, it can no longer be edited
* Expired todos can still be deleted
* Helps users maintain a structured daily workflow

### Sticky Notes

A flexible digital workspace inspired by real-life sticky notes.

* Create multiple notes
* Edit notes
* Delete notes
* Move notes freely around the board
* Drag and position notes wherever you want
* Only one note can be opened and edited at a time
* Designed to provide a visual space for ideas, reminders, and study notes

### Pomodoro Timer

A built-in Pomodoro timer helps users maintain focused study sessions.

* Choose from predefined timer durations
* Customize study duration
* Customize short break duration
* Customize long break duration
* Automatically transitions between study and break sessions
* Plays an alarm sound when a timer finishes
* Supports both short and long breaks
* Helps users follow a structured study cycle

### User Authentication

StudySpace provides user authentication so productivity data can be associated with individual users.

* User registration and login
* JWT-based authentication
* Password hashing with bcrypt
* Protected user-specific functionality

## Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Tailwind CSS
* React Icons
* React Draggable
* React Calendar
* React Day Picker
* React Circular Progressbar
* Lottie React

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt.js
* CORS
* dotenv

## Project Structure

```text
StudySpace/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── ...
│   │   └── App.js
│   ├── package.json
│   └── tailwind.config.js
│
├── server/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Getting Started

Follow these steps to run StudySpace locally.

### 1. Clone the Repository

```bash
git clone https://github.com/RojuChitrakar/studyspace.git
cd studyspace
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `server` directory.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Replace the values with your own MongoDB connection string and JWT secret.

### 5. Start the Backend

Inside the `server` directory:

```bash
npm run dev
```

Or:

```bash
npm start
```

### 6. Start the Frontend

Inside the `client` directory:

```bash
npm start
```

The frontend will run locally at:

```text
http://localhost:3000
```

## How StudySpace Works

StudySpace brings three productivity tools together into one workflow:

```text
                 ┌─────────────────┐
                 │    StudySpace   │
                 └────────┬────────┘
                          │
          ┌───────────────┼───────────────┐
          │               │               │
          ▼               ▼               ▼
      Todo List       Sticky Notes    Pomodoro Timer
          │               │               │
          ▼               ▼               ▼
       Plan Tasks      Capture Ideas    Focus Sessions
          │               │               │
          └───────────────┼───────────────┘
                          ▼
                   Better Study Flow
```

## Author

Roju Chitrakar
