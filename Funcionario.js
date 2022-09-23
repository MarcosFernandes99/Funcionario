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

    CalcularSalario(){
        let resultado
        resultado = primeiroVendedor.Salario + (primeiroVendedor.Salario * this.PercentualComissao)
        return resultado
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
primeiroVendedor.PercentualComissao = 0.05
console.log(primeiroVendedor.CalcularSalario())
