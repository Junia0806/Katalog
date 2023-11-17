class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar"> 
      <div class="app-bar__menu">
        <button id="hamburgerButton">☰</button>
      </div>
      <div class="app-bar__brand">
        <h1>Explore Resto</h1>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li><a href="#/restaurants">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="https://www.instagram.com/juniavitasari7/" target="_blank" rel="noreferrer">About</a></li>
        </ul>
      </nav>
      </header>
    `;
  }
}

customElements.define('nav-bar', Navbar);
