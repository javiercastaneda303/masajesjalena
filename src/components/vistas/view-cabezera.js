import { LitElement, html, css } from 'lit-element';

export class Cabezera extends LitElement {
    static get styles() {
        return css`
          .title {
              color:blue;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }
          h1 {
            font-family: Roboto;
            font-size: 26px;
            font-weight: 500;
            background-color: #7710d9;
            color: whitesmoke;
            text-align:center;
          }
          .red {
            color: red;
          }
          .blue {
            color: blue;
          }
          @media (max-width: 310px) {
            .title {
              padding-bottom: 5px;
              font-size: 20px;
            }
            h1 {
              font-size: 18px;
              padding: 5px;
            }
		      }
          @media (max-width: 210px) {
            .title {
              padding-bottom: 2px;
              font-size: 14px;
            }
            h1 {
              font-size: 12px;             
            }
		      } 
        `    ;
      }
  render() {
    return html`
    <p class="title">
    <img src="img/logo-masaje.png" width="50px" height="50px">
    <br>
      masajesJalena.com
    </p>
    <!--<h1>Mejora tu calidad de vida</h1>-->
    <h1>elimina tus puntos de dolor</h1>
    `;
  }
}
customElements.define('view-cabezera', Cabezera);