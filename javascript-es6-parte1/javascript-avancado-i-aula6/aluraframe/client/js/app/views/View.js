class View {
    constructor(elemento){
        this._elemento = elemento;
    }
    uptade(model){
        this._elemento.innterHTML = this._template(model);
    }
}