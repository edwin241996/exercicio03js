function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
        // ...
}

function verificaMaisVelho(pessoas) {
    let maiorIdade; // undefined
    let pessoaMaisVelha;

    for (let pessoa of pessoas) {
        if (typeof maiorIdade == 'undefined') {
            maiorIdade = pessoa.idadepessoaMaisvelha = pessoa
        } else {
            if (pessoa.idade > maiorIdade) {
                let maiorIdade; //undefined
                let pessoaMaisVelha;
            }

            for (let pessoa of pessoas) {
                if (typeof maiorIdade == 'undefined') {
                    maiorIdade = pessoa.idade
                    maiorIdade = pessoa.idade
                    pessoaMaisVelha = pessoa
                }
            }
        }
        return pessoaMaisVelha
    }

    function listaRegistro(registros) {
        //for (let registro of registro)
        console.log('esses são os registros que foram feitos:')
        registros.forEach(registro => {
            console.log(` ${registro.nome} possui ${registro.idade} anos`)
        })
    }

    let registros = []

    while (true) {
        //pega os dados
        let nome = prompt('Digite o nome')
        let idade = prompt('Digite a idade')
        idade = Number(idade)

        //cria o registro
        let pessoa = new pessoa(nome, idade)

        // guarda o registro
        registro.push(pessoa)

        let resposta = prompt('Deseja registrar outra pessoa?')
        if (resposta == 'n' || resposta == 'não') {
            break;
        }
    }

    listaRegistro(registros)
    let maisVelho = verificaMaisVelho(registros)
    console.log(`A pessoa mais velha é ${maisVelho.nome} com ${maisVelho.idade} anos`)

    // let nome = prompt("Digite o nome")
    // let idade = prompt("Digite a idade")
    // idade = Number(idade)

    // alert("Segunda pessoa")
    // let nome2 = prompt("Digite o nome")
    // let idade2 = prompt("Digite a idade")
    // idade2 = Number(idade2)

    // if ( idade > idade2 ) { // primeira pessoa é mais velha
    //     console.log("A primeira pessoa é mais velha")
    // } else if ( idade2 > idade ) { // segunda pessoa é mais velha
    //     console.log("A segunda pessoa é a mais velha")
    // } else { // tem a mesma idade
    //     console.log("As duas pessoas possuem a mesma idade") 
    // }