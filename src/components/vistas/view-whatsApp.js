import { LitElement, html, css } from 'lit-element';

export  class Whatsapp extends LitElement {
    static get styles() {
        return css`
                    
            .jc_cta {
                border-style: dotted;
                border-color: #4027cf;
                color: #ffffff;
                background-color: #1a8f14;
                display: block ;
                padding: 15px;
                position: fixed ;	
                right: 5px;
                width:50px;
                z-index:100;
                bottom:0em;
                line-height: 1.6;
                font-size: 14px;
                border-radius: 50px;
            }
        `;
      }
    
  render() {
    return html`
    <a href="https://api.whatsapp.com/send?phone=34650718774&text=Hola!%20Quiero%20un%20masaje" target="_blank">
<div class="jc_cta" >
<img src="img/whatsapp-fixed.png" alt="icono whatsapp" width="50px" height="50px">

</div></a>
  
    `;
  }
}
customElements.define('view-whatsapp', Whatsapp);