import { LitElement, html,css} from 'lit-element';

export class Presentacion extends LitElement {
    
  static get styles() {
    return css`
      .center{
        text-align: center;
        border:solid blueviolet 5px; 
      }
      .ancho {
        width: "700px";
         height:"1500px"
      }
      .red {
        color: red;
      }
    `    ;
  }
  render() {
    return html` <!-- 
    <div class="center">
      <iframe  width="90%" height="700px" src="https://www.youtube.com/watch?v=PU6eEAn-1js"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
    </div> -->
    `;
  }
}
customElements.define('view-presentacion', Presentacion);