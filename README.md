# Resume-Page-Site
A Page Created For Showing Resume/CV Of A Student or Employee
# Max Well - Interactive Resume Website

A responsive, single-page digital resume built with HTML, CSS, JavaScript, and Bootstrap 5. This project serves as a professional portfolio for Max Well, a Full-Stack Developer, highlighting his skills, professional experience, education, and open-source projects.

## 🚀 Features

* **Responsive Design:** Fully mobile-responsive layout utilizing Bootstrap 5's flexible grid system, ensuring the resume looks great on desktops, tablets, and smartphones.
* **Print-to-PDF Functionality:** Includes a dedicated "Print/Download PDF" button that triggers the browser's native print dialog, allowing users to easily save the page as a formatted PDF.
* **Modern UI/UX:** Clean, two-column layout featuring a custom-styled sidebar, polished typography, and FontAwesome icons for a professional, scannable look.
* **Lightweight:** Built with standard web technologies and minimal dependencies for fast loading times.

## 🛠️ Tech Stack

* **HTML5:** Semantic page structure and content mapping.
* **CSS3:** Custom styling (CSS variables, layout tweaks) and overriding default Bootstrap themes (`style.css`).
* **JavaScript:** Event handling for the print functionality (`script.js`).
* **Bootstrap 5:** Frontend framework for rapid, responsive UI development.
* **FontAwesome 6:** Icon toolkit used for contact details and UI buttons.

## 📁 File Structure

* `index.html`: The main HTML document containing the structure and content of the resume.
* `style.css`: Custom stylesheet defining the custom sidebar color palette (`#e0f7fa` and `#004d40`), profile image sizing, and list styling.
* `script.js`: Contains the JavaScript logic that listens for button clicks and triggers `window.print()`.
* `Max Well.jpg`: The profile photograph displayed in the left sidebar.

## 💻 How to Run Locally

1.  Clone or download the project files to your local machine.
2.  Ensure all core files (`index.html`, `style.css`, `script.js`, and `Max Well.jpg`) are located in the same root directory.
3.  Double-click `index.html` to open it in any modern web browser (Chrome, Firefox, Safari, Edge).
4.  Click the **Print/Download PDF** button at the bottom of the page to test the PDF generation.

## ✏️ Customization Guide

If you wish to fork and customize this resume for your own use:
1.  **Content:** Open `index.html` in a code editor and replace Max Well's details (contact info, summary, experience, education) with your own.
2.  **Profile Picture:** Add your own professional photo to the folder and update the `src` attribute of the `<img>` tag in `index.html` to match your filename.
3.  **Colors:** Open `style.css` and modify the `--custom-sidebar-bg` and `--custom-sidebar-text` variables inside the `:root` selector to match your personal brand colors.
