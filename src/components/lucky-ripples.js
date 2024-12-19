import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

class LuckyRipples extends LitElement {
  constructor() {
    super();
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
  `;

  render() {
    return html` <products-component></products-component> `;
  }
}

customElements.define("lucky-ripples", LuckyRipples);
