# FocusFlow

FocusFlow is a productivity and team collaboration app built to help people stay organized, manage work faster, and keep their team on the same page. It brings together project management, task tracking, time logging, team updates, and productivity insights in one clean dashboard.

This project is designed for teams who want a simple but powerful workflow without dealing with heavy, complicated tools. You can create projects, assign tasks, track time, and monitor progress in a way that feels smooth and easy to use.

---

## Why this project exists

A lot of teams struggle with scattered tasks, missed deadlines, and poor visibility into how work is moving. FocusFlow tries to solve that by giving users one place to:

- create and manage projects
- assign and track tasks
- monitor deadlines and progress
- keep time on important work
- see real-time updates from the team
- understand productivity through analytics

It is built for people who want a more focused and organized way to work.

---

## What you can do in FocusFlow

### Project management
- Create new projects
- Organize work by team or client
- Add members to projects
- Keep everything in one place

### Task management
- Create tasks with titles and descriptions
- Set priorities like low, medium, high, or urgent
- Track status such as todo, in progress, or done
- Assign tasks to people
- Add due dates and keep work moving

### Time tracking
- Start and stop timers for tasks
- Track how much time is spent on each project
- Review time entries and productivity patterns
- Keep accurate records for work and deadlines

### Team collaboration
- See updates in real time
- Stay informed when tasks change
- Work together without needing constant messages or meetings
- Keep everyone aligned on progress

### Analytics
- Monitor completed tasks
- Check time usage trends
- View priority distribution
- Understand project performance and productivity levels

---

## Tech stack

### Frontend
- HTML
- CSS
- JavaScript
- Chart.js
- Socket.IO client
- Particles.js
- Font Awesome

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT for authentication
- bcrypt for password security
- Express Validator for input validation

---

## Project structure

```bash
FocusFlow/
├── config/
│   └── database.js
├── middleware/
│   ├── auth.js
│   └── validator.js
├── models/
│   ├── Notification.js
│   ├── Project.js
│   ├── Task.js
│   ├── TimeEntry.js
│   └── User.js
├── public/
│   ├── css/
│   ├── js/
│   ├── analytics.html
│   ├── dashboard.html
│   ├── index.html
│   ├── profile.html
│   ├── projects.html
│   └── register.html
├── routes/
│   ├── analytics.js
│   ├── auth.js
│   ├── notifications.js
│   ├── projects.js
│   ├── tasks.js
│   ├── timeTracking.js
│   └── users.js
├── server.js
├── package.json
├── README.md
├── install.bat
├── render.yaml
├── ARCHITECTURE.md
├── COMMANDS.md
├── PROJECT_SUMMARY.md
└── .gitignore
```

---

## Features overview

FocusFlow includes a full application flow from signup to dashboard usage:

- secure login and registration
- protected routes and user auth
- project creation and management
- task creation and update workflow
- time tracking for active tasks
- real-time updates across connected users
- analytics dashboard for productivity data
- clean modern UI with a cyber/cyan-style theme

The app is built to feel modern, useful, and easy to work with while still being practical for daily team productivity.

---

## Prerequisites

Before running this project, make sure you have:

- Node.js installed
- MongoDB running locally or using a cloud MongoDB instance
- npm package manager

Recommended version:
- Node.js 18 or above

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/focusflow.git
cd focusflow
```

2. Install dependencies

```bash
npm install
```

3. Create your environment file

Create a `.env` file in the root directory and add configuration similar to this:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/focusflow
JWT_SECRET=your_secret_key_here
JWT_REFRESH_SECRET=your_refresh_secret_here
JWT_EXPIRE=7d
JWT_REFRESH_EXPIRE=30d
NODE_ENV=development
```

4. Start MongoDB

If you are using a local MongoDB server, make sure it is running before launching the app.

---

## Run the app

### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm start
```

Then open the app in your browser:

- Frontend: http://localhost:5000
- Register page: http://localhost:5000/register

---

## How the app works

The app follows a very simple flow:

1. A user creates an account or logs in.
2. The user creates a project for their work.
3. They add tasks under that project.
4. Tasks can be assigned, updated, and completed.
5. Users can start a timer to track time spent on a task.
6. The app records time entries and productivity metrics.
7. Real-time updates keep the team aware of changes immediately.

This makes it useful for both personal productivity and team collaboration.

---

## Main features in plain language

### Authentication
The app lets users sign up, log in, and stay authenticated securely. It uses JWT tokens and password hashing so user data is protected better.

### Project dashboard
Users can manage multiple projects from one place and keep track of work across different teams or goals.

### Task system
Tasks can be created, assigned, labeled, updated, and marked complete. This gives teams a clean workflow without confusion.

### Time tracking
The timer allows users to track the time they spend on tasks, which helps with productivity monitoring and reporting.

### Analytics
The analytics page gives useful insights into task progress, duration, priorities, and project performance.

### Real-time communication
Using Socket.IO, the app can push live updates to users so everyone sees changes as they happen.

---

## API overview

FocusFlow has a backend API for authentication, projects, tasks, time tracking, analytics, and user data.

### Authentication
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- GET /api/auth/me

### Projects
- GET /api/projects
- POST /api/projects
- GET /api/projects/:id
- PUT /api/projects/:id
- DELETE /api/projects/:id

### Tasks
- GET /api/tasks
- POST /api/tasks
- GET /api/tasks/:id
- PUT /api/tasks/:id
- DELETE /api/tasks/:id

### Time tracking
- POST /api/time/start
- POST /api/time/stop/:id
- GET /api/time
- GET /api/time/active

### Analytics
- GET /api/analytics/overview
- GET /api/analytics/project/:id

---

## Security and reliability

The app includes a few important security practices:

- password hashing with bcrypt
- JWT-based authorization
- protected routes for logged-in users
- validation for user inputs
- structured backend flow for API requests

These measures help keep the application more secure and stable.

---

## Future ideas

This project is already useful, and there are a few strong next upgrades possible:

- drag and drop task organization
- file attachments
- email notifications
- calendar integration
- dark/light theme toggle
- better search and filters
- export reports to PDF or CSV
- mobile app version
- multi-team support

---

## Contributing

Contributions are welcome. If you want to improve the project:

1. Fork the repository
2. Create a new feature branch
3. Make your changes
4. Commit them with a clear message
5. Push to your branch
6. Open a pull request

---

## License

This project is licensed under the MIT License.

---

## Final note

FocusFlow is a full-stack project built to make work life more organized, more visible, and more productive. It combines the essentials of project management and team collaboration in a clean, practical app that is easy to run and easy to extend.

If you're building this for a portfolio, a demo, or a real-world product idea, it is a strong project that shows backend skills, frontend work, real-time functionality, and good product thinking.

---

Built with passion for productivity, focus, and better teamwork.
