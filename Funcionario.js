class Funcionario{
    Nome
    Salario

    constructor(nome, salario){
    this.Nome = nome
    this.Salario = salario

    }
}

class Gerente extends Funcionario{
    Departamento
    
    constructor(nome, salario, departamento){
        super(nome, salario)
        this.Departamento = departamento
        
    }

    ExibirInformações(){
        console.log(this.Nome + " , " + "R$" + this.Salario + " , " + this.Departamento)
    }
}

class Vendedor extends Funcionario{
    PercentualComissao

    constructor(nome, salario, percentualComissao){
        super(nome, salario)
        this.PercentualComissao = percentualComissao
    }
       
    CalcularSalario(){
        let resultado
        resultado = this.Salario + (this.Salario * (this.PercentualComissao / 100))
        return resultado
    }
    

    ExibirInformaçõesVendedor(){
        console.log(this.Nome + " , " + "R$" + this.Salario + " , " + "R$" + this.CalcularSalario() + " , " + "%" + this.PercentualComissao)
    }
}

class Produto{
    Nome
    Valor

    constructor(nome, valor){
        this.Nome = nome
        this.Valor = valor
    }
}

class Venda{
    Vendedor
    ListaDeProdutos = []
    ValorTotal

    constructor(vendedor){
    this.Vendedor = vendedor
    }


    AdicionarProduto(produto){
        this.ListaDeProdutos.push(produto)
    }
       

    CalcularTotal(){
        let resultado = 0
        this.ListaDeProdutos.forEach(x => resultado = resultado + x.Valor)
        this.ValorTotal = resultado
    }

    FinalizarVenda(){
        this.CalcularTotal()
        console.log("Vendedor: ", this.Vendedor)
        console.log("Valor total: ", this.ValorTotal)
    }

}

let primeiroGerente = new Gerente("Marcos", 5000, "Dep. 1")
primeiroGerente.ExibirInformações()

let primeiroVendedor = new Vendedor("Junior", 2000, 15)

console.log("Salário ajustado de acordo com a comissão:", "R$", primeiroVendedor.CalcularSalario())
primeiroVendedor.ExibirInformaçõesVendedor()

let primeiroProduto = new Produto("Camisa", 150)

let venda = new Venda(primeiroVendedor)

let produto = new Produto("Celular", 1500)
venda.AdicionarProduto(produto)
venda.FinalizarVenda()



