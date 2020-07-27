import { LitElement, html,css} from 'lit-element';

export class Masajes extends LitElement {

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
    return html`
    <div class="center">
      <iframe  width="90%" height="700px" src="https://www.youtube.com/embed/PU6eEAn-1js"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
    </div>
    
    <p style="text-align: center ; font-size: 2em; color: blue">Cabina en Santa Cruz y  <br> Servicio a domicilio en todo Tenerife con camilla portátil<br>
 Masaje descontracturante, espalda, cuello, cabeza, abdomen, piernas, planta de los pies y masaje despues de hacer deporte <br>Elimina tus puntos de dolor,
 mejorando tu calidad de vida.<br><br>
 Tarifa:<br><br>
 (50 min X 30€) <br> (90 min y pico X 50€) sin reloj<br> <br> sin reloj, me alargo un poco mas dependiendo de la persona con el objetivo de eliminar los puntos de dolor.<br>
  <br>
si queres descargar tu musculatura <br>estás en buenas manos<br>
 </p>        
 <br><br>
    `;
  }
}
customElements.define('view-masajes', Masajes);