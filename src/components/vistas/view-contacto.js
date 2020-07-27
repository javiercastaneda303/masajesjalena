import { LitElement, html, css } from 'lit-element';

export class Contacto extends LitElement {
    static get styles() {
        return css`
          .title {
              color:blue;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }
          p {
            font-family: Roboto;
            font-size: 1.5em;
            font-weight: 500;
            text-align:center;
            padding-bottom: 30px;
          }
          .center{
            text-align: center;
            __width: 90%;
            border:solid blueviolet 5px; 
          }
        `    ;
      }
  render() {
    return html`
    <div class="center">
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1qN3BNjMOFXAwG9O0lnDiNXsuGJFuvukC" width="90%" height="500px"></iframe>
    </div>
    
    `;
  }
}
customElements.define('view-contacto', Contacto);