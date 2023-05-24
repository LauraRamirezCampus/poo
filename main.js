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

    /* *
    ?se usa (this) para referirse al atributo y acceder al atributo color de la misma clase */

    this.color=color;                       
    this.tamaño=tamaño;                      
    this.#material=material;                      
    this.#mina=mina;
                            
    }

    /**
     * ?metodo get se utliza para llamar el atributo de la clase
     */
    get getMina(){
        return this.#mina;
    }
    /**
     * ?set se utliza para modificar los atibutos
     */
     set setMina(p1){
         this.#mina=p1;
     }

    /**
 * ?METODO ESTATICO:No se instancia ya que pertenece al metodo y a la instancia
 */
    static afilar(p1){
        return `la mina de ${p1} ha sido afilada`;
    }
}
/** Se instancia la clase lapiz */
let lapiz1= new lapiz({tamaño: "5cm"});
/** Se puede cambiar el atributo*/
let lapiz2= new lapiz({tamaño: "8cm"});
/** Se puede crear un nuevo objeto modificar atributos*/

lapiz1.setMina="Tinta"

// console.log(lapiz1);
// console.log(lapiz2);
// console.log(lapiz.afilar(lapiz1.getMina));
// console.log(lapiz.afilar(lapiz2.getMina));

/**
 * ?Herencia=> la clase lapizMecanico esta heredando de la clase lapiz 
 */
class lapizMecanico extends lapiz{
    constructor({mina="metalica"}){
        super({mina});
    }

    /**
     * ?POLIMORFISMO=> Es cuando una clase derivada puede utilizar el metodo de la clase padre y modificarla
     */
    static afilar(p1){
        return `la mina de ${p1} no se afila`;
    }
}
let mecanico = new lapizMecanico({});
mecanico.setMina="aluminio";
console.log(mecanico.getMina);
console.log(lapizMecanico.afilar(mecanico.getMina));
