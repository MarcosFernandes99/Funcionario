class Funcionario{
    Nome
    Salario
}

class Gerente extends Funcionario{
    Departamento

    ExibirInformações(){
        console.log(primeiroGerente)
    }
}

class Vendedor extends Funcionario{
    PercentualComissao
    SalarioaAjustado

   
    CalcularSalario(){
        let resultado
        resultado = primeiroVendedor.Salario + (primeiroVendedor.Salario * (this.PercentualComissao / 100))
        this.SalarioaAjustado = resultado
        return resultado
    }
    

    ExibirInformaçõesVendedor(){
        console.log(primeiroVendedor)
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