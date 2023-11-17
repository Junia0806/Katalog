class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>All data from <a href="https://restaurant-api.dicoding.dev/" target="_blank"
    rel="noreferrer">Restaurant-Dicoding</a> | Copyright © 2023 - Junia Vitasari</p>
    `;
  }
}

customElements.define('app-footer', Footer);
