class Funcionario{
    Nome
    Salario
}

class Gerente extends Funcionario{
    Departamento

    ExibirInformações(){
        console.log(this.Nome + " , " + "R$" + this.Salario + " , " + this.Departamento)
    }
}

class Vendedor extends Funcionario{
    PercentualComissao
    

   
    CalcularSalario(){
        let resultado
        resultado = primeiroVendedor.Salario + (primeiroVendedor.Salario * (this.PercentualComissao / 100))
        return resultado
    }
    

    ExibirInformaçõesVendedor(){
        console.log(this.Nome + " , " + "R$" + this.Salario + " , " + "R$" + this.CalcularSalario() + " , " + "%" + this.PercentualComissao)
    }
}

let primeiroGerente = new Gerente()
primeiroGerente.Nome = "Marcos"
primeiroGerente.Salario = 5000
primeiroGerente.Departamento = "Dep. 1"
primeiroGerente.ExibirInformações()

let primeiroVendedor = new Vendedor()
primeiroVendedor.Nome = "Junior"
primeiroVendedor.Salario = 2000
primeiroVendedor.PercentualComissao = 5
console.log("Salário ajustado de acordo com a comissão:", "R$", primeiroVendedor.CalcularSalario())
primeiroVendedor.ExibirInformaçõesVendedor()