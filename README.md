# Cyberpunk 2.0 – Edgerunners Fan Site

A fully responsive, interactive fan website dedicated to **Cyberpunk: Edgerunners**. Features a video slideshow, an about section, a team roster with full CRUD (add/edit/delete) using localStorage, and a random database of quotes, characters, and lore from the anime.

## Features

- **Video Slideshow** – Two embedded trailers with dot navigation and fade transition.
- **About Section** – Two‑row layout (text left, image right) focused on the anime and why you should watch it.
- **Team CRUD** – Manage the Edgerunners crew: add, edit, or delete members. All changes persist via `localStorage`.
- **Cyberpunk Database** – Randomly displays quotes, character descriptions, and lore from the show with a single click.
- **Back to Top** – Smooth scrolling button in the footer.
- **Responsive** – Works on desktop, tablet, and mobile (stacked layout).
- **Cyberpunk Aesthetic** – Dark background, neon blue accents, glows, and futuristic fonts.

## Languages Used and Tools
- **HTML5** – Semantic structure
- **CSS3** – Flexbox, Grid, custom animations, media queries
- **JavaScript (ES6+)** – DOM manipulation, `localStorage`, event handling, dynamic rendering
- **Font Awesome** – Icons for social links and UI
- **Google Fonts** – Poppins font family

## 📁 Project Structure
cyberpunk2.0/
├── index.html
├── style.css
├── script.js
├── images/
│ ├── logo.jpg
│ ├── cyb-pbkg.jpg
│ ├── neon.jpg
│ ├── wd.jpg
│ └── [team member images]
└── videos/
├── cyberpunk_edgerunners_trailer.mp4
└── V_Never_Stop_Fighting_Cyberpunk_2077_2.mp4


## 🚀 How to Run

1. Clone or download the repository.
2. Place your video files in the `videos/` folder and images in `images/`.
3. Open `index.html` in any modern browser (no build step or server required).

> **Note:** The team data is stored in your browser’s `localStorage`. Any changes you make (add, edit, delete) will remain even after you refresh the page.

## How It Works

### Video Slideshow
- Two `.slide` divs with `<video>` elements and captions.
- JavaScript `showSlide()` toggles display and updates active dot.

### Team CRUD (localStorage)
- Default team members are loaded if nothing is stored.
- `renderTeam()` builds cards dynamically from the `teamMembers` array.
- Add, edit, delete functions update the array and re‑render the grid.
- All changes are saved to `localStorage` automatically.

### Cyberpunk Database
- A local JavaScript object (`cyberpunkDatabase`) contains quotes, characters, and lore.
- `loadRandomCyberpunkData()` picks a random item and displays it inside the API section.

### Responsive Design
- On screens smaller than 768px, the split‑screen columns stack.
- The about section switches from grid to single column.
- Team cards adjust to fit available space.

## Customisation

- **Change accent colour** – edit `#00f3ff` in `style.css`.
- **Add more slides** – copy a `.slide` div and add a corresponding dot.
- **Add more team members** – use the “Add New Member” button on the page.
- **Extend the database** – add more quotes, characters, or lore to the `cyberpunkDatabase` object in `script.js`.


## Conclusion
-Done by Christian.