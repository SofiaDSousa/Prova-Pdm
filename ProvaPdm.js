//registrando o primeiro aluno



 let aluno1Certo = {
    nome: "Rafael Mercedes da Silva", 
    idade: 18,
    cursando: ["TIA", "PDM", "AOS"],
    presenca: ["2024-02-06", "2024-02-07", "2024-02-09", "2024-02-12", "2024-02-13", "2024-02-14", "2024-02-17", "2024-02-18", "2024-02-19", "2024-02-20"],
    ra: "22345689"

}

//registrando o segundo aluno 

let aluno2Errado = {
    nome: "Juana Jumendes de Santos", 
    idade: 12,
    cursando: ["POO", "BD1", "BD2"],
    presenca: ["2024-02-05"],
    ra: "2234796"

}


// agora vamos validar os dados dado a esse aluno

function validarCadastro (aluno1Certo,aluno2Errado){

function validarNome (nome){ 
     
// nesse if caso o nome do aluno tenha que menos de 10 caracteres dará erro, mas caso tenho mais que 10 caracteres dará certo.
    if (nome.length < 10){
        console.log ("Quantidade de caracteres está correto")
    }else{
        console.log ("Quantidade de caracteres está incorreto")
 
}

function validarIdade (idade){

    //nesse if caso o aluno tenha mais que 14 anos dará certo, mas caso ele não tenha mais que 14 anos o if dará errado.
    
    if (idade.length > 14){
        console.log ("A idade inserida está correta! Maior de 14 anos.")
    }else{
        console.log ("A idade inserida está incorreta! Menos de 14 anos.")

    }
}
function validarCursando (cursando){

    //nessa caso, caso o alu esteja cursando 3 ou mais cursos está correto, mas caso ao contrário dará errado.

    if (cursando > 3){
        console.log ("Está cursando 3 ou mais cursos.")
    }else{
        console.log ("Está cursando menos que 3 cursos.")
    }
}

function validarPresenca (presenca){

    // nesse if estamos fazendo a presença do aluno, caso ele tenha 2 presenças estará correto, mas caso ele não possua as 2 presenças dará errado

    if (presenca > 2){
        console.log ("O aluno tem 2 presença ou mais.")
    }else{
        console.log ("O aluno tem menos que 2 presenças.")
    }
}

function validarRa (ra){

    //nesse if estamos validando o ra, a onde caso ele tenha 7 ou mais/menos caracteres dará errado.

    if (ra === 7){
        console.log ("O aluno tem 7 números no ra.")
    }else{
        console.log ("O aluno tem menos que 7 números no ra.")
    }
}
}
}


