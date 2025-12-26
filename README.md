<div align="center">
  <img src="https://i.postimg.cc/k5SqY72D/Zrzut-ekranu-2025-12-26-o-20-40-58.png" alt="TW Scavenge Pro Screenshot" width="800" />
  
  # 🏰 TW Scavenge Pro
  
  **Professional Scavenging Calculator for Tribal Wars**
  
  [![Version](https://img.shields.io/badge/version-1.2.0-blue.svg)](https://github.com/krzysztofautomatyk/TW-Scavenge-Pro)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
  
  [English](README.md) | [Polski](README.pl.md)
</div>

---

## 📖 About

**TW Scavenge Pro** is an advanced calculator for optimizing scavenging missions in the browser game Tribal Wars. It helps players maximize resource collection efficiency by analyzing different strategies and providing data-driven recommendations.

### ✨ Key Features

- 🎯 **Intelligent Resource Distribution** - Automatic optimization of unit allocation across 4 scavenging levels
- 📊 **Performance Analysis** - Detailed efficiency metrics and revenue comparisons
- ⚡ **Real-time Calculations** - Instant results with dynamic parameter adjustments
- 🌓 **Dark/Light Mode** - Eye-friendly interface with theme switching
- 🌍 **Bilingual Support** - Full interface in Polish and English
- 📈 **Visual Analytics** - Interactive charts and performance graphs
- 🔒 **Password Protection** - Secure access to the calculator
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices

### 🎮 Scavenging Levels

1. **Level 1 (Fast)** - Quick missions with lower loot
2. **Level 2 (Balanced)** - Moderate time and resources
3. **Level 3 (Superior)** - Better efficiency for experienced players
4. **Level 4 (Risky)** - Maximum loot but longest duration

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/krzysztofautomatyk/TW-Scavenge-Pro.git
   cd TW-Scavenge-Pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Production Build

```bash
npm run build
npm run preview
```

## 🎯 How to Use

1. **Authentication** - Enter the access password (default: `Walhalla`)
2. **Configure World Settings** - Set world speed and base time parameters
3. **Select Units** - Choose which units to use for scavenging
4. **Choose Calculation Mode**:
   - **Normal Mode** - Standard calculation with all units on one level
   - **Split Mode** - Intelligent distribution across multiple levels
5. **Analyze Results** - Review recommendations and efficiency metrics
6. **View Detailed Tables** - Check exact numbers for each configuration

## 🛠️ Technologies

This project is built with modern web technologies:

- **[React 19](https://reactjs.org/)** - UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Fast build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Recharts](https://recharts.org/)** - Data visualization library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon set

## 📁 Project Structure

```
TW-Scavenge-Pro/
├── components/          # React components
│   ├── CalculatorForm.tsx
│   ├── ResultsDashboard.tsx
│   ├── DetailedTable.tsx
│   ├── LevelCards.tsx
│   └── ...
├── utils/              # Utility functions
│   ├── scavengeMath.ts      # Core calculation logic
│   ├── unitData.ts          # Unit definitions
│   ├── translations.ts      # i18n translations
│   └── LanguageContext.tsx  # Language management
├── App.tsx             # Main application component
├── types.ts            # TypeScript type definitions
└── index.tsx           # Application entry point
```

## 🧮 Calculation Algorithm

The calculator uses a sophisticated algorithm based on:

- **Diminishing Returns Formula**: `loot = capacity × multiplier × (t/baseTime)^exponent`
- **Efficiency Metrics**: Resources per hour considering setup time
- **Optimization Strategy**: Distribution based on carrying capacity and time efficiency

### Parameters

- **World Speed** - Server speed multiplier
- **Base Time** - Base duration for scavenging missions
- **Max Time Away** - Available time window for missions
- **Setup Time** - Time needed to configure each mission
- **Calculation Mode** - Normal or optimized split distribution

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Credits

- **Original Concept**: Inspired by [Daniel van den Berg's Scavenge Calculator](https://daniel.dmvandenberg.nl/scripting-tribal-wars/tribal-wars-scavenge-calculator/)
- **Developer**: [Krzysztof Automatyk](https://github.com/krzysztofautomatyk)
- **Game**: [Tribal Wars](https://www.tribalwars.net/) by InnoGames

## 📞 Support

If you encounter any issues or have questions:

- 🐛 [Report a Bug](https://github.com/krzysztofautomatyk/TW-Scavenge-Pro/issues)
- 💡 [Request a Feature](https://github.com/krzysztofautomatyk/TW-Scavenge-Pro/issues)
- 📧 Contact the developer through GitHub

---

<div align="center">
  Made with ❤️ for the Tribal Wars community
  
  ⭐ Star this repository if you find it helpful!
</div>
