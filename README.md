# Currency Converter 💱

The **Currency Converter** is a ReactJS-based web application that allows users to convert currency values between different currencies in real-time. The app leverages the ExchangeRate API to fetch live exchange rates and provides an intuitive interface for accurate conversions. 

---

## Features ✨
- **Real-Time Conversion**: Fetches live exchange rates from the ExchangeRate API.
- **Currency Selection**: Choose from a wide range of currency options.
- **Amount Input**: Input the amount to convert with validations in place.
- **Swap Functionality**: Easily switch between "From" and "To" currencies.
- **Responsive Design**: Optimized for various screen sizes with a modern UI.
- **Interactive UI**: Features hover effects, transitions, and a visually appealing background.

---

## Tech Stack 🛠️
- **Frontend**: ReactJS, TailwindCSS, CSS Modules
- **API Integration**: ExchangeRate API
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Custom Hooks**: `useCurrencyInfo` for fetching currency options

---

## Getting Started 🚀

### Prerequisites
- Node.js installed on your system
- A code editor like VS Code

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/DarshanKumarBhandari11/Currency_Converter.git

2. **Navigate to the project directory:**
   ```bash
   cd Currency_Converter

3. **Install dependencies:**
    ```bash
    npm install

4. **Run the app:**
    - For development:
    ```bash
    npm run dev
    ```
    - For production:
    ```bash
    npm start
    ```

5. **Open your browser and navigate to:**
    - For development: http://localhost:5173 (default for Vite).
    - For production: http://localhost:3000.

---

## Folder Structure 📂
   ```
   Currency_Converter/
   ├── public/
   ├── src/
   │   ├── assets/
   │   ├── components/
   │   │   ├── InputBox.jsx          # InputBox component for input fields and dropdowns
   │   │   └── index.js              # Index file for exporting components
   │   ├── hooks/
   │   │   └── useCurrencyInfo.js    # Custom hook for fetching currency info
   │   ├── App.css                   # Styling for App component
   │   ├── App.jsx                   # Main App component
   │   ├── index.css                 # TailwindCSS utilities
   │   ├── main.jsx                  # Entry point for React app
   ├── .gitignore                    # Files to ignore in Git
   ├── README.md                     # Project documentation
   ├── eslint.config.js              # ESLint configuration for code quality and consistency
   ├── index.html                    # Main HTML file that serves as the entry point for the app
   ├── package-lock.json             # Automatically generated file to lock dependencies
   ├── package.json                  # Project dependencies and scripts
   ├── postcss.config.js             # Configuration file for PostCSS, used for processing CSS with plugins
   ├── tailwind.config.js            # TailwindCSS configuration
   └── vite.config.js                # Vite configuration file for build and development setup
   ```

---

## Contributing 🤝

Contributions are welcome!
If you'd like to contribute, please fork the repository and submit a pull request.

## Contact 📞

For questions or feedback, feel free to reach out to me at darshankumarbhandari11@gmail.com .
