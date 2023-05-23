/** 
 * TODO se crea la clase lapiz es decir la plantilla con sus respectivos atributos*/
class lapiz{   
    color
    tamaño
    #material
    #mina
    /**
     * @param {color} *Es el atributo color de la clase lapiz
     * @param {tamaño} *Es el atributo tamaño de la clase lapiz
     * @param {#material}  *Es el atributo privado material de la clase lapiz
     * @param {#mina} *Es el atributo privado mina de la clase lapiz
     */

    /**
     * ?se declara los atributos por defecto */

    constructor({color="Amarillo",tamaño="9cm",material="madera",mina="carbon"}){
    this.color=color; 
    /* *
    ?se usa (this) para referirse al atributo y acceder al atributo color de la misma clase */

    this.tamaño=tamaño;
    /**se usa (this) para referirse al atributo y acceder al atributo tamaño de la misma clase */
    this.#material=material;
    /**se usa (this) para referirse al atributo y acceder al atributo privado material de la misma clase */
    this.#mina=mina;
    /**se usa (this) para referirse al atributo y acceder al atributo  privado mina de la misma clase */
    }
}
/** Se instancia la clase lapiz */
let lapiz1= new lapiz({tamaño: "5cm"});/** Se puede cambiar el atributo*/
console.log(lapiz1);
