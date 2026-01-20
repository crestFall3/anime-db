# Anime-DB

A modern web application for discovering, searching, and managing your favorite anime series.

## Features

- **Browse Anime**: Explore a comprehensive database of anime series
- **Search**: Find anime by title and filters
- **Trending & Seasonal**: Discover trending anime and seasonal releases
- **Favorites**: Save and manage your favorite anime
- **Detailed Information**: View comprehensive details about each anime series
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend Framework**: React with Vite
- **Styling**: CSS with modular component styles
- **Build Tool**: Vite
- **Linting**: ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnimeCard.jsx
│   ├── AnimeList.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── Pagination.jsx
│   └── SearchBar.jsx
├── pages/              # Page components
│   ├── About.jsx
│   ├── AnimeDetails.jsx
│   ├── Favorites.jsx
│   ├── Home.jsx
│   ├── SearchResults.jsx
│   ├── Seasonal.jsx
│   └── Trending.jsx
├── styles/             # CSS stylesheets
│   ├── card.css
│   ├── details.css
│   ├── footer.css
│   ├── global.css
│   ├── navbar.css
│   └── searchbar.css
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Live Demo

Check out the live application: [Anime-DB](https://web-dev-projects-jiyr.vercel.app)

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd Anime-DB
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

#### Development Mode

```bash
npm run dev
```

The application will start on `http://localhost:5173` (or another available port).

#### Build for Production

```bash
npm run build
```

#### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Home Page**: Browse popular anime series
2. **Search**: Use the search bar to find specific anime
3. **Trending**: Check the trending anime section
4. **Seasonal**: Discover anime by season
5. **Favorites**: Click the heart icon to add anime to your favorites
6. **Details**: Click on any anime card to view detailed information

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.

## Author

Jenrola Ewaoluwa

---

For more information or support, please open an issue on the project repository.
