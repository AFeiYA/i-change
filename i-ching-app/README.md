# I Ching Divination App (易经占卜应用)

A comprehensive I Ching (Book of Changes) web application built with React and TypeScript, featuring traditional Chinese divination methods, complete hexagram database, and modern user interface.

## 🌟 Features

### Core Functionality
- **Complete 64 Hexagram Database** - All hexagrams with Unicode symbols (䷀-䷿), Chinese names, interpretations, and advice
- **Multiple Divination Methods**:
  - Quick Method (instant random)
  - Traditional Coin Method (3-coin toss with changing lines)
  - Yarrow Stalks Method (authentic ancient method)
- **Changing Lines Support** - Full transformations with secondary hexagrams
- **Question-based Divination** - Ask specific questions for focused readings

### User Experience
- **Divination History** - Track all your readings with timestamps and questions
- **User Statistics** - View your divination patterns and method preferences
- **Data Export/Import** - Backup and restore your divination history
- **Responsive Design** - Works on desktop, tablet, and mobile devices

### Interface Features
- **Unicode Hexagram Display** - Beautiful traditional Chinese symbols
- **Trigram Information** - Upper and lower trigram compositions
- **Interactive Grid View** - Browse all 64 hexagrams in the classics section
- **Modern UI** - Clean, intuitive interface with hover effects and animations
- **Navigation** - Easy access to Divination, Classics, History, and Profile pages

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd i-ching-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

The app will open in your browser at `http://localhost:3000` (or another port if 3000 is occupied).

### Build for Production
```bash
npm run build
```

## 📱 Usage Guide

### Performing a Divination

1. **Navigate to Divination Page**
   - Click "Divination" in the navigation menu

2. **Ask Your Question**
   - Enter your question in the text area
   - Focus on a specific situation or decision

3. **Choose Your Method**:
   - **Quick**: Instant random hexagram
   - **Coin**: Traditional 3-coin method with changing lines
   - **Yarrow**: Ancient yarrow stalks method (most traditional)

4. **Interpret Results**
   - Read the main hexagram meaning
   - If present, consider the secondary hexagram (for changing lines)
   - Apply the advice to your situation

### Exploring the Classics

- Browse all 64 hexagrams in grid format
- Click any hexagram to view detailed information
- Study trigram compositions and relationships

### Managing Your History

- View all past divinations with timestamps
- Filter by method or search by question
- Sort by date or hexagram number
- Delete unwanted entries
- Export your history for backup

### Profile Management

- View your divination statistics
- See method usage patterns
- Configure preferences
- Export/import your data

## 🔧 Technical Details

### Built With
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **React Router v6** - Client-side routing
- **CSS3** - Modern styling with flexbox/grid
- **Local Storage** - Persistent data storage

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── HexagramDisplay.tsx
│   └── Navigation.tsx
├── data/               # Static data files
│   └── hexagrams.ts    # Complete hexagram database
├── pages/              # Route components
│   ├── DivinationPage.tsx
│   ├── ClassicsPage.tsx
│   ├── HistoryPage.tsx
│   └── ProfilePage.tsx
├── services/           # Business logic
│   ├── divinationService.ts
│   └── dataService.ts
├── assets/
│   └── styles/
│       └── main.css    # Global styles
└── App.tsx            # Main application component
```

### Data Models

#### Hexagram Interface
```typescript
interface Hexagram {
  number: number;
  unicode: string;        // Unicode symbol (䷀-䷿)
  chineseName: string;    // Traditional Chinese name
  englishName: string;    // English translation
  description: string;    // Meaning and interpretation
  interpretation: string; // Detailed explanation
  advice: string;        // Practical guidance
  upperTrigram: string;  // Upper trigram name
  lowerTrigram: string;  // Lower trigram name
}
```

#### Divination Result
```typescript
interface DivinationResult {
  question: string;
  method: DivinationMethod;
  hexagram: Hexagram;
  secondaryHexagram?: Hexagram;
  changingLines: number[];
  timestamp: Date;
}
```

## 🎯 Traditional I Ching Methods Implemented

### 1. Quick Method
- Instant random selection
- Good for general guidance
- No changing lines

### 2. Coin Method (Traditional)
- Uses 3-coin tosses for each line
- Generates changing lines (6 or 9)
- More authentic than quick method
- Produces secondary hexagram when lines change

### 3. Yarrow Stalks Method
- Most traditional and complex method
- Simulates ancient divination process
- Higher probability of changing lines
- Considered most accurate by traditionalists

## 🌐 I Ching Background

The I Ching (易经), or Book of Changes, is one of the oldest Chinese classical texts. It describes an ancient system of cosmology and philosophy that is at the heart of Chinese cultural beliefs. The book consists of 64 hexagrams, each made up of six lines that are either broken (yin) or unbroken (yang).

### Hexagram Composition
- Each hexagram consists of 6 lines
- Lines are read from bottom to top
- Each hexagram is formed by two trigrams (3-line symbols)
- 8 trigrams × 8 trigrams = 64 possible hexagrams

### Philosophy
The I Ching is based on the concept of change as the only constant in the universe. By consulting the oracle, practitioners seek guidance on how to navigate life's challenges and opportunities in harmony with natural patterns.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or create issues for bugs and feature requests.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Traditional I Ching wisdom and centuries of scholarship
- Unicode Consortium for standardizing I Ching symbols
- React and TypeScript communities for excellent development tools

---

*May the wisdom of the I Ching guide your path* 🌟