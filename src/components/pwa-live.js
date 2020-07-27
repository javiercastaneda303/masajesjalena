import { LitElement, html, css} from 'lit-element';
import 'dile-pages/dile-pages';
import 'dile-tabs/dile-tabs';


export class PwaLive extends LitElement {

  static get styles() {
		return css`
			:host {
				display: block;
				
				--primary-color: red;
				--_________primary-color: #673ab7;
				--primary-light-color: #9a67ea;
				--secondary-color: Blue; 
				--____secondary-color: #fbc02d; 
				--secondary-light-color: blue ;
				--_________secondary-light-color: #fbd09d;
				--text-color: #303030;
				--reverse-text-color: #fff;
				--reverse-accent-color: blue;
				--__________reverse-accent-color: #fdd835;
				
				padding: 15px;
				--dile-tab-background-color: transparent;
				--dile-tab-selected-background-color: transparent;
				--dile-tab-selected-line-color: var(--secondary-color);
				--dile-tab-text-color: var(--reverse-color, blueviolet);
				--dile-tab-selected-text-color: var(--reverse-accent-color, #fff);
				background-color: #f9f9f9;
			}
			h1 {
				font-weight: 300;
				flex-grow: 1;
			}
			.menumobile {
        margin-top: 10px;
        padding: 10px 0 20px 5px;
      }
      .menumobile a {
        display: block;
        margin: 10px 20px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--secondary-light-color);
      }
		.page {
			display: none;
		}
		.page[active] {
			display: block;
		}
		dile-tabs {
			border-bottom: 1px solid #ddd;
			margin-bottom: 15px;
			margin-right: 15px;
		}
		dile-pages {
			padding: 0 10px 10px;
		}
		header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: var(--primary-color, #ddd);
			color: var(--reverse-text-color, #303030);
			padding: 10px;
			--eit-icon-size: 32px;
			--eit-icon-color: var(--secondary-color);
		}

		dile-spinner-modal {
			--dile-spinner-color: var(--secondary-color);
		}

		.homelink {
			color: inherit;
			text-decoration: none;
		}
		footer {
			text-align: center;
			padding 10px;
			font-size: 0.8em;
		}
		.center{
			_border: solid #7710d9 5px;
			text-align:center;
		}
		.botonMenu{
			padding:15px;
			border-radius:50%;
			font-style:tahoma;
			font-size: 3em;
			display: inline-block;
			width: 32%;
		}
		.activo{
			background-color:white;
			color:#7710d9;
			border: solid #7710d9 5px; 
			
		}
		.pasivo{
			__background-color:#1E500C;
			background-color:#10d913;
			color:white;
			cursor: pointer;		
		}
		.title {
              color:red;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }		
		@media (max-width: 1200px) {
			.botonMenu{
			padding:13px;
			font-size: 2.5em;
			}
		}
		@media (max-width: 900px) {
			.botonMenu{
			padding:10px;
			font-size: 1.5em;
			}
		}
		@media (max-width: 600px) {
			.botonMenu{
			padding:7px;
			font-size: 1em;
			}
		}
		@media (max-width: 600px) {
			.botonMenu{
			padding:10px;
			font-size: 1.5em;
			display: block;
			position: relative;
			text-align:center;
			width: 97%;
			}
			.title {
              color:red;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }		
		}
		`;
	}
  
	static get properties() {
		return {
			page: { type: String },
		};
	}

  constructor() {
		super();
		this.page = 'masajes';
	}
    
  render() {
	return html`	  

	  <c-idioma></c-idioma>
	  <view-cabezera></view-cabezera>
	  <!--
	  <a href="#" @click= ${this.go} name="presentacion" >Presentación</a>
      <a href="#" @click=${this.go} name="masajes">Masajes</a>
	  <a href="#" @click=${this.go} name="contacto">contacto</a>
  -->
    <div class="center">
	  ${this.page=="presentacion"
		  ? html`<button class="activo botonMenu" @click= ${this.go} name="presentacion"> Home</button>`
		  : html`<button class="pasivo botonMenu" @click= ${this.go} name="presentacion"> Home</button>`
	  }
	  ${this.page=="masajes"
		  ? html`<button class="activo botonMenu" @click= ${this.go} name="masajes">Servicios</button>`
		  : html`<button class="pasivo botonMenu" @click= ${this.go} name="masajes">Servicios</button>`
	  }
	  ${this.page=="contacto"
		  ? html`<button class="activo botonMenu" @click= ${this.go} name="contacto">Contacto</button>`
		  : html`<button class="pasivo botonMenu" @click= ${this.go} name="contacto">Contacto</button>`
	  }
	</div>
	  <!--
	  <button class="activo" @click= ${this.go} name="presentacion"> Presentación</button>
	  <button @click= ${this.go} name="masajes">Masajes</button>
	  <button @click= ${this.go} name="contacto">Contacto</button>
	
	  <hr>

	  <dile-tabs selected="${this.page}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChanged}">      
		<dile-tab name="presentacion">Presentación</dile-tab>
		<dile-tab name="masajes">Masajes</dile-tab>
		<dile-tab name="contact">Contacto</dile-tab>
	</dile-tabs>
	  <hr>
				
    <dile-pages selected="${this.page}" attrForSelected="name">
		<view-home name="presentacion" ?active=${this.page == 'presentacion'}></view-home>
		<view-about name="masajes" ?active=${this.page == 'masajes'}></view-about>
		<view-contact name="contacto" ?active=${this.page == 'contacto'}></view-contact>
	</dile-pages>
		
	  <view-presentacion name="presentacion" ?active=${this.page=="presentacion"}></view-presentacion>
	  <view-masajes name="masajes" ?active=${this.page=="masajes"}></view-masajes>
	  <view-contacto name="contacto" ?active=${this.page=="contacto"}></view-contacto>
	  -->
	  <br>
	  ${this.page=='presentacion'
		  ? html`<view-presentacion name="presentacion" ?active=${this.page=="presentacion"}></view-presentacion>`
		  : ''
	  }
	  ${this.page=='masajes'
		  ? html`<view-masajes name="masajes" ?active=${this.page=="masajes"}></view-masajes>`
		  : ''
	  }
	  ${this.page=='contacto'
		  ? html`<view-contacto name="contacto" ?active=${this.page=="contacto"}></view-contacto>`
		  : ''
	  }


	  <view-footer></view-footer>
	  <view-whatsapp></view-whatsapp>
    `;
  }

  go (e) {
    e.preventDefault();
    this.page = e.target.getAttribute('name');
	console.log(this.page);
	this.requestUpdate();	
	
  }

  selectedChanged(){
	  console.log("estoy dentro de selectedChanged");
	  //this.requestUpdate(); intento renderizar aquí pero no lo consigo
	  this.requestUpdate();
  }

}
customElements.define('pwa-live', PwaLive);