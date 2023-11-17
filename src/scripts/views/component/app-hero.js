class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
    <div class="hero__inner">
      <h2 class="hero__title" tabindex="0">Professional Flavor</h2>
      <p class="hero__tagline" tabindex="0">
        In every bite, there's an unforgettable luxurious pleasure!
      </p>
    </div>
  </div>
      `;
  }
}

customElements.define('app-hero', AppHero);
