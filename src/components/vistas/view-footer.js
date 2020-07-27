import { LitElement, html, css } from 'lit-element';
//import "./whatsapp.jpg";
export class Footer extends LitElement {
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
            font-size: 3em;
            font-weight: 500;
            background-color: #1E500C;
            color: whitesmoke;
            text-align:center;
            padding-bottom: 30px;
          }
          .footer2 {
            font-family: Roboto;
            font-size: 3em;
            font-weight: 500;
            background-color: whitesmoke;
            color: #1E500C;
            text-align:center;
            padding-bottom: 30px;
          }
          .jc_cal {
            /*
                border-style: dotted ;
                border-color: #4027cf;*/
                border: 3px dotted #4027cf;
                
                color: #ffffff;
                background-color: #1a8f14;
                
                padding: 20px;
                
                z-index:100;
                
                line-height: 1.6;
                font-size: 1.5em;
                border-radius: 50%;/* border-radius: 50px;*/

                cursor: pointer;
            }
          @media (max-width: 615px) {
            .email {
              font-size: 1em;
            }
            p {
              font-size: 2em;
            }
          }
          @media (max-width: 400px) {
            .email {
              font-size: 0.5em;
              margin-bottom:200px;
            }
            p {
              font-size: 2em;
              margin-bottom:90px;
            }
          }
        `    ;
      }
  render() {
    return html`
    <p>
    <span class="email">~</span>
    <br>  
    <a href="https://api.whatsapp.com/send?phone=34650718774&text=Hola!%20Quiero%20un%20masaje" @click= ${this.go} name="whatsapp" >
    <img src="img/whatsapp.jpg" width="50px" height="50px">
    </a>650.718.774<br></p>
  
    <p class="footer2 ">
     <a href="https://calendly.com/masajesjalena" @click= ${this.go} name="calendario" >
     
     <button class="jc_cal">Pide Cita</button>  <br>
      </a>
    </p>
     
  
    
<p><MARQUEE> activa la energía que hay dentro de ti </MARQUEE></p>
    <!--
    <img src="https://picsum.photos/200/300" alt="imager">
    -->
    `;
  }
}
customElements.define('view-footer', Footer);