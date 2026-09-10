# Signup-form-with-Validation-Dashboard
Signup form with Username, Email, and Password validation. Store user details in localStorage and display them in a dashboard table.
# User Management Portal

A responsive front-end user-management demo. Visitors can create an account, sign in with saved credentials, view registered users, and remove user records from the dashboard.

## Live deployment

**Status:** `https://<your-github-username>.github.io/<repository-name>/`

## Features

- Account creation with password confirmation and duplicate-email validation
- Local browser storage for demo user data
- Sign-in validation
- Dashboard for viewing and deleting saved users
- Responsive layout for smaller screens

## Project structure

```
.
├── index.html                 # Application entry point
├── pages/                     # Application pages
│   ├── signin.html
│   ├── login.html
│   └── dashboard.htm
└── assets/
    ├── css/styles.css         # Shared styles
    ├── js/app.js              # Form and dashboard behaviour
    └── images/                # Icons and background image
```

## Run locally

1. Download or clone the repository.
2. Open `index.html` in a modern browser.
3. Create an account, then use the dashboard to view it.

All accounts are stored only in that browser's local storage. This project is a front-end demonstration and must not be used to store real passwords or personal data.

## Submission checklist

- [x] Repository is public.
- [x] Meaningful commits are present.
- [x] The live deployment URL above has been updated.
- [x] Source files are arranged by purpose.
- [x] Setup and deployment instructions are documented.
