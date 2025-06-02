# I Ching Web Application

This project is a web application based on the I Ching (易经), also known as the Book of Changes. It provides users with the ability to explore hexagrams, perform divination, and access classic texts related to the I Ching.

## Project Structure

```
i-ching-app
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── assets
│   │   └── styles
│   │       └── main.css    # Main styles for the application
│   ├── components
│   │   ├── HexagramDisplay.tsx  # Displays hexagram based on user input
│   │   ├── LineDetail.tsx        # Provides details about a specific line of a hexagram
│   │   └── Navigation.tsx        # Handles navigation between pages
│   ├── data
│   │   ├── hexagrams.ts          # Array of hexagram objects
│   │   └── trigrams.ts           # Array of trigram objects
│   ├── pages
│   │   ├── DivinationPage.tsx    # Allows users to perform divination
│   │   ├── ClassicsPage.tsx      # Displays classic texts related to the I Ching
│   │   ├── HexagramDetailPage.tsx # Shows detailed information about a hexagram
│   │   ├── ProfilePage.tsx       # Manages user profiles and preferences
│   │   └── AboutPage.tsx         # Provides information about the application
│   ├── services
│   │   ├── divinationService.ts   # Functions related to the divination process
│   │   └── dataService.ts         # Functions for managing hexagram and trigram data
│   ├── utils
│   │   └── helpers.ts             # Utility functions for various tasks
│   ├── App.tsx                    # Main application component
│   └── index.tsx                  # Entry point for the React application
├── package.json                   # npm configuration file
├── tsconfig.json                  # TypeScript configuration file
└── README.md                      # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd i-ching-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Explore hexagrams and their meanings.
- Perform divination to receive insights based on the I Ching.
- Access classic texts and learn more about the philosophy behind the I Ching.
- Manage your profile and preferences within the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.