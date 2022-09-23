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
}

let primeiroGerente = new Gerente()
primeiroGerente.Nome = "Marcos"
primeiroGerente.Salario = 5000
primeiroGerente.Departamento = "Dep. 1"
primeiroGerente.ExibirInformações()