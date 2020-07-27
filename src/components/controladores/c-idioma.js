import { LitElement, html, css } from 'lit-element';

export  class Idioma extends LitElement {
    static get styles() {
        return css`
        `;
      }
      constructor() {
        super();
        this.lengu = "";
        this.idioma = navigator.language || navigator.userLanguage;
        this.lenguaje();
	}
  render() {
    return html`
    `;
  }
  lenguaje(){
      this.lengu = this.idioma.slice(0, 2).toUpperCase();
      console.log(`el lenguaje es = ${this.idioma.slice(0, 2).toUpperCase()}`);   // ELIMINAR LÍNEA
      console.log(`lengu es = ${this.idioma.slice(0, 2).toUpperCase()}`);  // ELIMINAR LÍNEA
      if(this.lengu == "ES"){
            console.log(`ESPAÑOL`);
      } else {
          console.log(`inglés por defecto sea el idioma que sea`);
      }
  }
}
customElements.define('c-idioma', Idioma);