<div align="center">
  <img src="https://i.postimg.cc/k5SqY72D/Zrzut-ekranu-2025-12-26-o-20-40-58.png" alt="TW Scavenge Pro Screenshot" width="800" />
  
  # 🏰 TW Scavenge Pro
  
  **Profesjonalny Kalkulator Zbieractwa do Plemion**
  
  [![Wersja](https://img.shields.io/badge/wersja-1.2.0-blue.svg)](https://github.com/krzysztofautomatyk/TW-Scavenge-Pro)
  [![Licencja](https://img.shields.io/badge/licencja-MIT-green.svg)](LICENSE)
  [![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
  
  [English](README.md) | [Polski](README.pl.md)
</div>

---

## 📖 O Projekcie

**TW Scavenge Pro** to zaawansowany kalkulator do optymalizacji misji zbieractwa w grze przeglądarkowej Plemiona (Tribal Wars). Pomaga graczom maksymalizować efektywność zbierania surowców poprzez analizę różnych strategii i dostarczanie rekomendacji opartych na danych.

### ✨ Główne Funkcje

- 🎯 **Inteligentna Dystrybucja Zasobów** - Automatyczna optymalizacja przydziału jednostek na 4 poziomach zbieractwa
- 📊 **Analiza Wydajności** - Szczegółowe metryki efektywności i porównania zysków
- ⚡ **Obliczenia w Czasie Rzeczywistym** - Natychmiastowe wyniki z dynamiczną zmianą parametrów
- 🌓 **Tryb Ciemny/Jasny** - Przyjazny dla oczu interfejs z przełączaniem motywów
- 🌍 **Wsparcie Dwujęzyczne** - Pełny interfejs w języku polskim i angielskim
- 📈 **Wizualne Analizy** - Interaktywne wykresy i grafy wydajności
- 🔒 **Ochrona Hasłem** - Bezpieczny dostęp do kalkulatora
- 📱 **Responsywny Design** - Działa perfekcyjnie na komputerach i urządzeniach mobilnych

### 🎮 Poziomy Zbieractwa

1. **Poziom 1 (Szybki)** - Szybkie misje z niższym łupem
2. **Poziom 2 (Zrównoważony)** - Umiarkowany czas i zasoby
3. **Poziom 3 (Lepszy)** - Lepsza efektywność dla doświadczonych graczy
4. **Poziom 4 (Ryzykowny)** - Maksymalny łup, ale najdłuższy czas trwania

## 🚀 Szybki Start

### Wymagania

- **Node.js** (wersja 18 lub wyższa)
- Menedżer pakietów **npm** lub **yarn**

### Instalacja

1. **Sklonuj repozytorium**
   ```bash
   git clone https://github.com/krzysztofautomatyk/TW-Scavenge-Pro.git
   cd TW-Scavenge-Pro
   ```

2. **Zainstaluj zależności**
   ```bash
   npm install
   ```

3. **Uruchom serwer deweloperski**
   ```bash
   npm run dev
   ```

4. **Otwórz w przeglądarce**
   ```
   http://localhost:5173
   ```

### Build Produkcyjny

```bash
npm run build
npm run preview
```

## 🎯 Jak Używać

1. **Uwierzytelnienie** - Wprowadź hasło dostępu (domyślnie: `testpassword`)
2. **Skonfiguruj Ustawienia Świata** - Ustaw prędkość świata i parametry czasu bazowego
3. **Wybierz Jednostki** - Określ, które jednostki mają być użyte do zbieractwa
4. **Wybierz Tryb Obliczeń**:
   - **Tryb Normalny** - Standardowe obliczenia ze wszystkimi jednostkami na jednym poziomie
   - **Tryb Podziału** - Inteligentna dystrybucja na wielu poziomach
5. **Analizuj Wyniki** - Przejrzyj rekomendacje i metryki efektywności
6. **Zobacz Szczegółowe Tabele** - Sprawdź dokładne liczby dla każdej konfiguracji

## 🛠️ Technologie

Projekt został zbudowany przy użyciu nowoczesnych technologii webowych:

- **[React 19](https://reactjs.org/)** - Framework UI
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript z typowaniem
- **[Vite](https://vitejs.dev/)** - Szybkie narzędzie do budowania
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS oparty na klasach użytkowych
- **[Recharts](https://recharts.org/)** - Biblioteka do wizualizacji danych
- **[Lucide React](https://lucide.dev/)** - Piękny zestaw ikon

## 📁 Struktura Projektu

```
TW-Scavenge-Pro/
├── components/          # Komponenty React
│   ├── CalculatorForm.tsx
│   ├── ResultsDashboard.tsx
│   ├── DetailedTable.tsx
│   ├── LevelCards.tsx
│   └── ...
├── utils/              # Funkcje narzędziowe
│   ├── scavengeMath.ts      # Główna logika obliczeń
│   ├── unitData.ts          # Definicje jednostek
│   ├── translations.ts      # Tłumaczenia i18n
│   └── LanguageContext.tsx  # Zarządzanie językiem
├── App.tsx             # Główny komponent aplikacji
├── types.ts            # Definicje typów TypeScript
└── index.tsx           # Punkt wejścia aplikacji
```

## 🧮 Algorytm Obliczeń

Kalkulator wykorzystuje zaawansowany algorytm oparty na:

- **Formule Malejących Zysków**: `łup = pojemność × mnożnik × (t/czasBazowy)^wykładnik`
- **Metrykach Efektywności**: Zasoby na godzinę z uwzględnieniem czasu przygotowania
- **Strategii Optymalizacji**: Dystrybucja oparta na pojemności transportowej i efektywności czasowej

### Parametry

- **Prędkość Świata** - Mnożnik prędkości serwera
- **Czas Bazowy** - Bazowy czas trwania misji zbieractwa
- **Maksymalny Czas Nieobecności** - Dostępne okno czasowe na misje
- **Czas Przygotowania** - Czas potrzebny na skonfigurowanie każdej misji
- **Tryb Obliczeń** - Zwykły lub zoptymalizowany podział dystrybucji

## 🤝 Współpraca

Wkład w projekt jest mile widziany! Prosimy o zgłaszanie problemów lub pull requestów.

1. Zforkuj repozytorium
2. Stwórz branch dla swojej funkcji (`git checkout -b feature/niesamowita-funkcja`)
3. Zatwierdź swoje zmiany (`git commit -m 'Dodaj niesamowitą funkcję'`)
4. Wypchnij do brancha (`git push origin feature/niesamowita-funkcja`)
5. Otwórz Pull Request

## 📄 Licencja

Ten projekt jest licencjonowany na podstawie licencji MIT - zobacz plik [LICENSE](LICENSE) dla szczegółów.

## 👏 Podziękowania

- **Oryginalny Koncept**: Inspirowany [Kalkulatorem Zbieractwa Daniela van den Berga](https://daniel.dmvandenberg.nl/scripting-tribal-wars/tribal-wars-scavenge-calculator/)
- **Deweloper**: [Krzysztof Automatyk](https://github.com/krzysztofautomatyk)
- **Gra**: [Plemiona (Tribal Wars)](https://www.tribalwars.net/) by InnoGames

## 📞 Wsparcie

Jeśli napotkasz jakiekolwiek problemy lub masz pytania:

- 🐛 [Zgłoś Błąd](https://github.com/krzysztofautomatyk/TW-Scavenge-Pro/issues)
- 💡 [Zaproponuj Funkcję](https://github.com/krzysztofautomatyk/TW-Scavenge-Pro/issues)
- 📧 Skontaktuj się z deweloperem przez GitHub

---

<div align="center">
  Stworzone z ❤️ dla społeczności Plemion
  
  ⭐ Oznacz gwiazdką to repozytorium, jeśli uznasz je za pomocne!
</div>
