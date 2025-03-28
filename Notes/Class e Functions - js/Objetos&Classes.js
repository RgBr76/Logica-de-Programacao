class formaDeBolo{

    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio} `)
    }
    
    assar(){
        console.log(`Bolo assando de ` + this.saborDaMassa )

    }
}
//classe é a minha forma

//objeto é a instância para a classe
let boloFesta = new formaDeBolo("chocolate", "nutella")
let boloPremium = new formaDeBolo ("baunilha", "coco")

console.log()
boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()