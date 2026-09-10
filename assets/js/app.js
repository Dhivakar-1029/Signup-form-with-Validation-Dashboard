const storageKey = "users";

function getUsers() {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
}

function saveUsers(users) {
    localStorage.setItem(storageKey, JSON.stringify(users));
}

const signupForm = document.getElementById("signup-form");

if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const users = getUsers();
        const emailAlreadyExists = users.some(function (user) {
            return user.email.toLowerCase() === email.toLowerCase();
        });

        if (emailAlreadyExists) {
            document.getElementById("form-message").textContent = "This email already has an account. Please log in.";
            return;
        }

        users.push({ username: username, email: email, password: password });
        saveUsers(users);

        window.location.href = "dashboard.htm";
    });
}

const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const loginEmail = document.getElementById("login-email").value.trim();
        const loginPassword = document.getElementById("login-password").value; 
        const users = getUsers();
        const userExists = users.some(function (user) {
            return user.email.toLowerCase() === loginEmail.toLowerCase() && user.password === loginPassword;
        });

        if (!userExists) {
            document.getElementById("login-message").textContent = "Invalid email or password.";
            return;
        }

        window.location.href = "dashboard.htm";
    });
}

const userTableBody = document.getElementById("user-table-body");
const emptyMessage = document.getElementById("empty-message");

if (userTableBody) {
    function showUsers() {
        const users = getUsers();
        userTableBody.innerHTML = "";

        if (users.length === 0) {
            emptyMessage.style.display = "block";
            return;
        }

        emptyMessage.style.display = "none";

        users.forEach(function (user, index) {
            const row = document.createElement("tr");
            const numberCell = document.createElement("td");
            const usernameCell = document.createElement("td");
            const emailCell = document.createElement("td");
            const actionCell = document.createElement("td");
            const deleteButton = document.createElement("button");

            numberCell.textContent = index + 1;
            usernameCell.textContent = user.username;
            emailCell.textContent = user.email;

            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-button";
            deleteButton.dataset.index = index;

            actionCell.appendChild(deleteButton);
            row.append(numberCell, usernameCell, emailCell, actionCell);
            userTableBody.appendChild(row);
        });
    }

    userTableBody.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-button")) {
            const userIndex = event.target.dataset.index;
            const users = getUsers();

            users.splice(userIndex, 1); 
            saveUsers(users);
            showUsers();
        }
    });

    showUsers();
}
