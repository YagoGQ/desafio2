let producto = parseInt(prompt(`Elije el producto que desea comprar 1.botas de esqui - 2.velas - 3.coctelera - 4.olla para hacer fondiue`));

let seguirComprando = true;
let totalCompra = 0;
let decision;

const mercaderia = [];

class Product {
    constructor (id, name, price) {
        this.id = id
        this.name = name
        this.price = price
    }
};

const botas = new Product(1, `botas`, 2000);
mercaderia.push (botas);
const velas = new Product(2 , `velas`, 300);
mercaderia.push (velas);
const coctelera = new Product(3, `coctelera`, 890);
mercaderia.push (coctelera);
const fondiue = new Product(4, `fondiue`, 4500);
mercaderia.push (fondiue);

console.log (mercaderia);

while (seguirComprando === true) {
    const producto = mercaderia.find (prod=>prod.id === producto)
    totalCompra = totalCompra + mercaderia [producto-1].price

    decision = parseInt(prompt(`¿Quiere seguir comprando? 1.Si - 2.No`))
    if (decision === 1) {
        producto = parseInt(prompt(`Elije el producto que desea comprar 1.botas de esqui - 2.velas - 3.coctelera - 4.olla para hacer fondiue`));
    } else { seguirComprando = false}
};

function descuento(totalCompra) {
    let descuento = 0
    if (totalCompra >= 5000) {
        descuento = 10
    } else {
        descuento = 0
    }

    let valorDescuento = totalCompra * (descuento / 100)
    let valorFinal = totalCompra - valorDescuento
    return valorFinal
};

const totalCompraDescuento = descuento(totalCompra);

alert (`El total de su compra es ${totalCompraDescuento}`);