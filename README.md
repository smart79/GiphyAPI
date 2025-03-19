README.md for "90s GIFtastic Adventure"

# 🎬 90s GIFtastic Adventure

## 📌 Overview

**90s GIFtastic Adventure** is a fun, interactive web app that allows users to search for and display **GIFs of iconic movie characters and quotes from 90s movies** using the **Giphy API**. Users can enter a character name or select a pre-set button to fetch GIFs from their favorite 90s films.

### 🚀 **Live Demo**

🔗 **[Check out the app here!](https://smart79.github.io/GiphyAPI/)**

---

## 🛠️ **Features & Functionality**

**Search for 90s Movie Characters** – Type in a name (e.g., "The Dude") and get matching GIFs.  
**Pre-Set Character Buttons** – Click on famous 90s characters for instant results.  
**Dynamic Button Creation** – Any search term adds a new button for easy future searches.  
**AJAX API Calls** – Fetches GIFs in real-time without reloading the page.  
**Responsive Design** – Works on desktop & mobile.  
**Themed 90s Movie Quote Button** – Submit button features a classic **Big Lebowski** reference.

---

## 🖥️ **Technologies Used**

| **Technology**          | **Purpose**                                       |
| ----------------------- | ------------------------------------------------- |
| **HTML5**               | Structure & layout of the web page.               |
| **CSS3 (Bootstrap)**    | Styling & responsive design.                      |
| **JavaScript (jQuery)** | Handling events, API calls, and DOM manipulation. |
| **AJAX**                | Asynchronous API requests to Giphy.               |
| **Giphy API**           | Fetching GIFs dynamically.                        |
| **GitHub Pages**        | Hosting the app online.                           |

---

## 📖 **How It Works**

### 1️⃣ **Using the App**

- Enter a **90s movie character** name in the search box and click **"Show Me The GIFs"** button.
- Click on any of the **pre-set character buttons** (e.g., "Neo", "Ace Ventura") to see related GIFs.
- Each search term **creates a new button**, so you can quickly revisit previous searches.
- Click a GIF to **pause/play** animation.

### 2️⃣ **How the Code Works**

- **AJAX Request**: The app uses `$.ajax()` to query the **Giphy API**, appending `"90s Movie Characters"` to the user’s search.
- **Dynamic Buttons**: When a new search is made, a button is generated and added to the UI.
- **Event Delegation**: The app ensures buttons remain clickable even when dynamically added.
- **DOM Manipulation**: jQuery updates the page with GIFs and search history.

---

## 🔍 **Skills Demonstrated**

This project showcases **front-end web development skills**, including:

✔️ **API Integration** – Fetching & displaying data from **Giphy API**.  
✔️ **Asynchronous JavaScript (AJAX)** – Making real-time API calls.  
✔️ **jQuery for DOM Manipulation** – Dynamically updating content.  
✔️ **Event Handling** – Managing user clicks & input dynamically.  
✔️ **Bootstrap for Styling** – Responsive UI design.  
✔️ **GitHub Pages Deployment** – Hosting & maintaining a live project.

---

## 📂 **Project Structure**

```plaintext
📂 90s-GIFtastic-Adventure
│── 📄 index.html        # Main HTML structure
│── 📄 style.css         # Custom styles
│── 📄 app.js            # JavaScript logic & API handling
│── 📂 assets            # Images & other assets
│── 📄 README.md         # Project documentation

⚡ Future Enhancements

🔹 Add local storage to remember user searches.
🔹 Implement categories (e.g., Comedy, Action, Sci-Fi) for better filtering.
🔹 Optimize API calls to prevent rate limits.

🤝 Contributing

Want to improve this project? Fork the repo, make changes, and submit a pull request!

🏆 Credits & Acknowledgments

    Giphy API for providing the GIFs.
    Bootstrap for styling assistance.
    Inspired by 90s movies & pop culture!

📜 License

This project is licensed under the MIT License.

🚀 Made with JavaScript, jQuery, and 90s nostalgia!




```
