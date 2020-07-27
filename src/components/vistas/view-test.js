import { LitElement, html, css } from 'lit-element';

export  class Test extends LitElement {
    static get styles() {
        return css`
        `;
      }
      constructor() {
        super();        
	}
  render() {
    return html` test
    `;
  }
  
}
customElements.define('view-test', Test);