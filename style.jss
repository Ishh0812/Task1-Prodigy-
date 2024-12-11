/* General Styles */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #1a1a1d;
  color: #f5f5f5;
}

/* Navigation Bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #2b2b2e;
}

.logo {
  font-size: 36px;
  font-family: 'Great Vibes', cursive;
  color: #e63946;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #f5f5f5;
}

.cta-button {
  padding: 10px 20px;
  background-color: #e63946;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.cta-button:hover {
  background-color: #d62839;
}

/* Hero Section */
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
}

.hero-text h1 {
  font-size: 48px;
  font-weight: bold;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

/* Menu Section */
.menu {
  text-align: center;
  padding: 50px;
}

.menu-slider {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px;
}

.menu-item {
  min-width: 200px;
  background-color: #2b2b2e;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  color: #f5f5f5;
  transition: transform 0.3s, background-color 0.3s;
}

.menu-item:hover {
  transform: scale(1.1);
  background-color: #3c3c42;
}

/* Contact Section */
.contact {
  text-align: center;
  padding: 50px;
}
