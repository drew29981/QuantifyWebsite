import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import "./components/lucky-ripples.js";
import "./components/products-component.js";

class Index extends LitElement {
  constructor() {
    super();
  }
  static styles = css`
    main {
    }
  `;
  render() {
    return html` <lucky-ripples></lucky-ripples> `;
  }
}

customElements.define("index-element", Index);
