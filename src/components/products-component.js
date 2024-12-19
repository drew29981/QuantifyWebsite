import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class Products extends LitElement {
  static properties = {
    products: { type: Boolean },
    privacy: { type: Boolean },
  };

  constructor() {
    super();
    this.products = true;
    this.privacy = false;
  }

  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f0f0f0;
      padding: 16px;
    }
    .logo {
      height: 50px;
    }
    .body {
      text-align: center;
      margin-top: 200px;
    }
    .list-of-apps {
      display: flex;
      justify-content: center;
    }
    .unreleased {
      image-rendering: pixelated;
      filter: blur(15px);
    }
    footer {
      padding-top: 250px;
    }
    .privacy-link {
      margin-left: 20px;
      margin-right: 20px;
      font-size: 24px;
      font-weight: 600;
      color: white;
    }
    .products-link {
      margin-left: 20px;
      margin-right: 20px;
      font-size: 24px;
      font-weight: 600;
      color: white;
    }
    .nav-bar {
      text-align: center;
    }
    .unreleased {
      padding: 0;
    }
    .released {
      padding: 0;
    }
    button {
      width: 200px;
      height: 60px;
      border-radius: 20px;
      background: linear-gradient(to right, black, gray);
      color: white;
      border-color: black;
      font-variant: small-caps;
    }
    button:hover {
      background: linear-gradient(to right, black, white);
    }
  `;

  onClickProducts = () => {
    this.products = true;
    this.privacy = false;
  };

  onClickPrivacy = () => {
    this.privacy = true;
    this.products = false;
  };

  productsView = html`
  <div class="body">
    <h1>Products</h1>
    <div class="list-of-apps">
        <div>
        <img src="app-logo.png" class="unreleased" />
        </div>
        <div class="released">
        <img src="app-logo.png" class="released"/>
        <h3>Quantify</h3>
        <p>
            <h4 class="released-sub">Measuring and basic drawing purposes</h4>
        </p>
        </div>
        <div>
        <img src="app-logo.png" class="unreleased" />
        </div>
    </div>
    <footer>
        <h4>LuckyRipples</h4>
    </footer>
  </div>
  `;

  privacyView = html`
    <div class="body">
      <h1>Privacy Policy</h1>
      <p>
        Quantify does not collect, store, or share any personal data or
        information. This app is designed to respect and protect your privacy.
      </p>
      <footer>
        <h4>LuckyRipples</h4>
      </footer>
    </div>
  `;

  render() {
    return html`
      <nav class="nav-bar">
        <button @click="${this.onClickProducts}" class="products-link">
          Products
        </button>
        <button @click="${this.onClickPrivacy}" class="privacy-link">
          Privacy Policy
        </button>
      </nav>

      ${this.products && !this.privacy ? this.productsView : this.privacyView}
    `;
  }
}

customElements.define("products-component", Products);
