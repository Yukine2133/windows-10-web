# Windows 10 Web Clone

**Windows 10 Web Clone** is a browser-based recreation of the Windows 10 experience, built with modern web technologies. This project replicates key Windows 10 functionalities, including a dynamic taskbar, system apps, and customizable settings, all running in a web environment.

---

## Features

- **Fully Functional Taskbar**: Displays open applications and updates the date & time in real-time.
- **Window Management**: Open, minimize, and close apps just like in Windows 10.
- **Pre-installed Apps**:
  - **Calculator**: Perform basic arithmetic operations such as addition, subtraction, multiplication, and division, with full keyboard support.
  - **Tic-Tac-Toe**: Play the classic game within the web environment.
  - **Chrome, Solitaire, Spotify, YouTube**: Embedded via iframes for seamless integration.
  - **Text Editor**: Create and edit text documents, with automatic saving in local storage.
- **Settings Panel**:
  - Change wallpaper (saved in Firebase for persistence).
  - Customize the color scheme to personalize the UI.

---

## Tech Stack

- **Vite**
- **React**
- **TypeScript**
- **Redux Toolkit**
- **Firebase**
- **Framer Motion**
- **Tailwind CSS**

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Yukine2133/windows-10-web.git
   cd windows-10-web
   ```

2. **Create an environment file**

   In the root of the project, create a `.env` file and add your Firebase configuration:

   ```bash

    VITE_API_KEY=
    VITE_AUTH_DOMAIN=
    VITE_PROJECT_ID=
    VITE_STORAGE_BUCKET=
    VITE_MESSAGING_SENDER_ID=
    VITE_APP_ID=
   ```

   > **Note:** Firebase is used to store wallpaper.

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **View the app**

   Open [http://localhost:5173](http://localhost:5173) in your browser.

---
