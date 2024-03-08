var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");
var botao4 = document.getElementById("botao4");
var botao5 = document.getElementById("botao5");
var imagem1 = document.getElementById("usuario1");
var imagem2 = document.getElementById("usuario2");
var imagem3 = document.getElementById("usuario3");
var imagem4 = document.getElementById("usuario4");
var imagem5 = document.getElementById("usuario5");



const Aluno = [{}]

Aluno.pop(0);
let MediaGeral = 0;
let AlunosTotal = 0;
let Medias = 0;
let quant = 0
function calcularMF(event){
    event.preventDefault()
}

function calcularMF(){



    let Nome  =  document.getElementById('nome').value;
    let primeira = parseFloat(document.getElementById('notas1').value);
    let segunda = parseFloat(document.getElementById('notas2').value);
    let terceira = parseFloat(document.getElementById('notas3').value);
    let quarta = parseFloat(document.getElementById('notas4').value);

    if(Nome == '' || isNaN(primeira)|| isNaN(segunda) || isNaN(terceira) || isNaN(quarta)){
        alert("Preencha todos os campos corretamente!");  
        return false;
    }
    else if( primeira > 100 || segunda > 100 || terceira > 100 || quarta > 100){
        alert("Notas devem ser menor que 100");    
        return false;
    }
    else if(primeira < 0 || segunda < 0 || terceira < 0  || quarta < 0){
        alert("As notas não devem ser menores que zero.");    
        return false;
    }
    
    let mf = (primeira  + segunda + terceira + quarta) / 4;

    console.log(mf)
    let situa = "";

    

    if(mf >=70){
        situa = "--Aprovado 🤩";
    }
    else if(mf >= 50){
        situa = "--Recuperação 😓";
    }else{
        situa = "--Reprovado 😭";
    }
  AlunosTotal +=1;
   Medias += mf
   MediaGeral = Medias / AlunosTotal;
   

const novoAluno = {Nome: Nome,
    Nota1: primeira,
    Nota2: segunda,
    Nota3: terceira,
    Nota4: quarta,
    MediaFinal: mf,
    situacao:situa}   
    Aluno.push(novoAluno)

    quant += 1;


console.log("Alunos", Aluno);

if(botao1, "click"){
    form1();
}
else if(botao2, "click"){
    form2();
}
else if(botao3, "click"){
    form3();
}
else if(botao4, "click"){
    form4();
}
else{
    form5();
}
if (quant == 2){
    form2()
}
else if (quant == 3){
    form3()
}

else if (quant == 4){
    form4()
}
else if (quant == 5){
    form5();
    abaixo();
}
//Alunos abaixo da Média


}

function form1(){

    if(quant >= 1 && Aluno[0].MediaFinal >= 70) {
        document.getElementById("form").innerHTML=  `
        <form id="formes">
        <h1 id="titulo"> BOLETIM ALUNO 01</h1>
        <label id="subTituloNome"> NOME DO ALUNO </label>
        <p id="showNome">${Aluno[0].Nome}</p> 
        <br>
        <label id="subTituloNotas"> 1 BIMESTRE </label>
       <p id="showNota1"> NOTA: ${Aluno[0].Nota1}</p>
         <br>
        <label id="subTitulo2"> 2 BIMESTRE </label> 
        <p id="showNota2"> NOTA: ${Aluno[0].Nota2}</p>
        <br>
        <label id="subTitulo3"> 3 BIMESTRE </label>
        <p id="showNota3"> NOTA: ${Aluno[0].Nota3}</p>
        <br>
        <label id="subTitulo4"> 4 BIMESTRE </label>
        <p id="showNota4"> NOTA: ${Aluno[0].Nota4}</p>
        <p id="butao">Media Geral: ${MediaGeral}</p>
        <p id="mfaprovado">Media Final: ${Aluno[0].MediaFinal} 
        ${Aluno[0].situacao}</p>
         </form>
        `
        botao1.style.backgroundColor = "rgb(0, 218, 0)"
        botao1.style.border = "2px solid white";
    } 
    else if(quant >= 1 && Aluno[0].MediaFinal >= 50) {
        document.getElementById("form").innerHTML=  `
        <form id="formes">
        <h1 id="titulo"> BOLETIM ALUNO 01</h1>
        <label id="subTituloNome"> NOME DO ALUNO </label>
        <p id="showNome">${Aluno[0].Nome}</p> 
        <br>
        <label id="subTituloNotas"> 1 BIMESTRE </label>
       <p id="showNota1"> NOTA: ${Aluno[0].Nota1}</p>
         <br>
        <label id="subTitulo2"> 2 BIMESTRE </label> 
        <p id="showNota2"> NOTA: ${Aluno[0].Nota2}</p>
        <br>
        <label id="subTitulo3"> 3 BIMESTRE </label>
        <p id="showNota3"> NOTA: ${Aluno[0].Nota3}</p>
        <br>
        <label id="subTitulo4"> 4 BIMESTRE </label>
        <p id="showNota4"> NOTA: ${Aluno[0].Nota4}</p>
        <p id="butao">Media Geral: ${MediaGeral}</p>
        <p id="mfrecuperacao">Media Final: ${Aluno[0].MediaFinal} 
        ${Aluno[0].situacao}</p>
         </form>
        `

        botao1.style.backgroundColor = "yellow"
        botao1.style.border = "2px solid white";
    }
    else if(quant >= 1 && Aluno[0].MediaFinal < 50) {
        document.getElementById("form").innerHTML=  `
        <form id="formes">
        <h1 id="titulo"> BOLETIM ALUNO 01</h1>
        <label id="subTituloNome"> NOME DO ALUNO </label>
        <p id="showNome">${Aluno[0].Nome}</p> 
        <br>
        <label id="subTituloNotas"> 1 BIMESTRE </label>
       <p id="showNota1"> NOTA: ${Aluno[0].Nota1}</p>
         <br>
        <label id="subTitulo2"> 2 BIMESTRE </label> 
        <p id="showNota2"> NOTA: ${Aluno[0].Nota2}</p>
        <br>
        <label id="subTitulo3"> 3 BIMESTRE </label>
        <p id="showNota3"> NOTA: ${Aluno[0].Nota3}</p>
        <br>
        <label id="subTitulo4"> 4 BIMESTRE </label>
        <p id="showNota4"> NOTA: ${Aluno[0].Nota4}</p>
        <p id="butao">Media Geral: ${MediaGeral}</p>
        <p id="mfreprovado">Media Final: ${Aluno[0].MediaFinal} 
        ${Aluno[0].situacao}</p>
         </form>
        `
        botao1.style.backgroundColor = "red"
        botao1.style.border = "2px solid white";
    }

    
    else{
        document.getElementById("form").innerHTML= `
        <form id="formes">
        <h1 id="titulo"> BOLETIM ALUNO 01</h1>
        <label id="subTituloNome"> NOME DO ALUNO </label>
        <input type="text"  id="nome">
         <br>
        <label id="subTituloNotas"> 1 BIMESTRE </label>
        <input type="number"  id="notas1" max="100" min="0">
         <br>
        <label id="subTitulo2"> 2 BIMESTRE </label> 
        <input type="number"  id="notas2" max="100" min="0"> 
        <br>
        <label id="subTitulo3"> 3 BIMESTRE </label>
        <input type="number"  id="notas3" max="100" min="0">
        <br>
        <label id="subTitulo4"> 4 BIMESTRE </label>
        <input type="number"  id="notas4" max="100" min="0"> 
        <button type="button" onclick="calcularMF()" id="butao"> GERAR BOLETIM </button>
        <p id="mf"></p>
         </form>
        `
    }
    
    }

function form2(){
  if (quant < 1){
    alert("Adicione os alunos em ordem crescente")
    form1()
    return false;
  }
  
if(quant >= 2 && Aluno[1].MediaFinal >= 70){
    document.getElementById("form").innerHTML=  `
    <form id="formes">
    <h1 id="titulo"> BOLETIM ALUNO 02</h1>
    <label id="subTituloNome"> NOME DO ALUNO </label>
    <p id="showNome">${Aluno[1].Nome}</p> 
    <br>
    <label id="subTituloNotas"> 1 BIMESTRE </label>
   <p id="showNota1"> NOTA: ${Aluno[1].Nota1}</p>
     <br>
    <label id="subTitulo2"> 2 BIMESTRE </label> 
    <p id="showNota2"> NOTA: ${Aluno[1].Nota2}</p>
    <br>
    <label id="subTitulo3"> 3 BIMESTRE </label>
    <p id="showNota3"> NOTA: ${Aluno[1].Nota3}</p>
    <br>
    <label id="subTitulo4"> 4 BIMESTRE </label>
    <p id="showNota4"> NOTA: ${Aluno[1].Nota4}</p>
    <p id="butao">Media Geral: ${MediaGeral}</p>
    <p id="mfaprovado">Media Final: ${Aluno[1].MediaFinal} ${Aluno[1].situacao}</p>
     </form>
    `
    botao2.style.backgroundColor = "rgb(0, 218, 0)"

    if(Aluno[0].MediaFinal >= 70){
        botao1.style.backgroundColor = "rgb(0, 218, 0)"
    }
    else if (Aluno[0].MediaFinal >=50){
        botao1.style.backgroundColor = "yellow"
    }
    else{
        botao1.style.backgroundColor = "red"
    }
} 
else if(quant >= 2 && Aluno[1].MediaFinal >= 50){
    document.getElementById("form").innerHTML=  `
    <form id="formes">
    <h1 id="titulo"> BOLETIM ALUNO 02</h1>
    <label id="subTituloNome"> NOME DO ALUNO </label>
    <p id="showNome">${Aluno[1].Nome}</p> 
    <br>
    <label id="subTituloNotas"> 1 BIMESTRE </label>
   <p id="showNota1"> NOTA: ${Aluno[1].Nota1}</p>
     <br>
    <label id="subTitulo2"> 2 BIMESTRE </label> 
    <p id="showNota2"> NOTA: ${Aluno[1].Nota2}</p>
    <br>
    <label id="subTitulo3"> 3 BIMESTRE </label>
    <p id="showNota3"> NOTA: ${Aluno[1].Nota3}</p>
    <br>
    <label id="subTitulo4"> 4 BIMESTRE </label>
    <p id="showNota4"> NOTA: ${Aluno[1].Nota4}</p>
    <p id="butao">Media Geral: ${MediaGeral}</p>
    <p id="mfrecuperacao">Media Final: ${Aluno[1].MediaFinal} ${Aluno[1].situacao}</p>
     </form>
    `
    botao2.style.backgroundColor = "yellow"

    if(Aluno[0].MediaFinal >= 70){
        botao1.style.backgroundColor = "rgb(0, 218, 0)"
    }
    else if (Aluno[0].MediaFinal >=50){
        botao1.style.backgroundColor = "yellow"
    }
    else{
        botao1.style.backgroundColor = "red"
    }
} 
else if(quant >= 2 && Aluno[1].MediaFinal < 50){
    document.getElementById("form").innerHTML=  `
    <form id="formes">
    <h1 id="titulo"> BOLETIM ALUNO 02</h1>
    <label id="subTituloNome"> NOME DO ALUNO </label>
    <p id="showNome">${Aluno[1].Nome}</p> 
    <br>
    <label id="subTituloNotas"> 1 BIMESTRE </label>
   <p id="showNota1"> NOTA: ${Aluno[1].Nota1}</p>
     <br>
    <label id="subTitulo2"> 2 BIMESTRE </label> 
    <p id="showNota2"> NOTA: ${Aluno[1].Nota2}</p>
    <br>
    <label id="subTitulo3"> 3 BIMESTRE </label>
    <p id="showNota3"> NOTA: ${Aluno[1].Nota3}</p>
    <br>
    <label id="subTitulo4"> 4 BIMESTRE </label>
    <p id="showNota4"> NOTA: ${Aluno[1].Nota4}</p>
    <p id="butao">Media Geral: ${MediaGeral}</p>
    <p id="mfreprovado">Media Final: ${Aluno[1].MediaFinal} ${Aluno[1].situacao}</p>
     </form>
    `
    botao2.style.backgroundColor = "red"

    if(Aluno[0].MediaFinal >= 70){
        botao1.style.backgroundColor = "rgb(0, 218, 0)"
    }
    else if (Aluno[0].MediaFinal >=50){
        botao1.style.backgroundColor = "yellow"
    }
    else{
        botao1.style.backgroundColor = "red"
    }
} 


else{
    document.getElementById("form").innerHTML= `
    <form id="formes">
    <h1 id="titulo"> BOLETIM ALUNO 02</h1>
    <label id="subTituloNome"> NOME DO ALUNO </label>
    <input type="text"  id="nome">
     <br>
    <label id="subTituloNotas"> 1 BIMESTRE </label>
    <input type="number"  id="notas1" max="100" min="0">
     <br>
    <label id="subTitulo2"> 2 BIMESTRE </label> 
    <input type="number"  id="notas2" max="100" min="0"> 
    <br>
    <label id="subTitulo3"> 3 BIMESTRE </label>
    <input type="number"  id="notas3" max="100" min="0">
    <br>
    <label id="subTitulo4"> 4 BIMESTRE </label>
    <input type="number"  id="notas4" max="100" min="0"> 
    <button type="button" onclick="calcularMF()" id="butao"> GERAR BOLETIM </button>
    <p id="mf"></p>
     </form>
    `
}

}

function form3(){
    if (quant < 2){
        alert("Adicione os alunos em ordem cressente SEU BURRO")
        return false;
      }

    if(quant >= 3 && Aluno[2].MediaFinal >= 70){
        document.getElementById("form").innerHTML=  `
        <form id="formes">
        <h1 id="titulo"> BOLETIM ALUNO 03</h1>
        <label id="subTituloNome"> NOME DO ALUNO </label>
        <p id="showNome">${Aluno[2].Nome}</p> 
        <br>
        <label id="subTituloNotas"> 1 BIMESTRE </label>
       <p id="showNota1"> NOTA: ${Aluno[2].Nota1}</p>
         <br>
        <label id="subTitulo2"> 2 BIMESTRE </label> 
        <p id="showNota2"> NOTA: ${Aluno[2].Nota2}</p>
        <br>
        <label id="subTitulo3"> 3 BIMESTRE </label>
        <p id="showNota3"> NOTA: ${Aluno[2].Nota3}</p>
        <br>
        <label id="subTitulo4"> 4 BIMESTRE </label>
        <p id="showNota4"> NOTA: ${Aluno[2].Nota4}</p>
        <p id="butao">Media Geral: ${MediaGeral}</p>
        <p id="mfaprovado">Media Final: ${Aluno[2].MediaFinal} ${Aluno[2].situacao}</p>
         </form>
        `
        botao3.style.backgroundColor = "rgb(0, 218, 0)"
    } 
    else if(quant >= 3 && Aluno[2].MediaFinal >= 50){
        document.getElementById("form").innerHTML=  `
        <form id="formes">
        <h1 id="titulo"> BOLETIM ALUNO 03</h1>
        <label id="subTituloNome"> NOME DO ALUNO </label>
        <p id="showNome">${Aluno[2].Nome}</p> 
        <br>
        <label id="subTituloNotas"> 1 BIMESTRE </label>
       <p id="showNota1"> NOTA: ${Aluno[2].Nota1}</p>
         <br>
        <label id="subTitulo2"> 2 BIMESTRE </label> 
        <p id="showNota2"> NOTA: ${Aluno[2].Nota2}</p>
        <br>
        <label id="subTitulo3"> 3 BIMESTRE </label>
        <p id="showNota3"> NOTA: ${Aluno[2].Nota3}</p>
        <br>
        <label id="subTitulo4"> 4 BIMESTRE </label>
        <p id="showNota4"> NOTA: ${Aluno[2].Nota4}</p>
        <p id="butao">Media Geral: ${MediaGeral}</p>
        <p id="mfrecuperacao">Media Final: ${Aluno[2].MediaFinal} ${Aluno[2].situacao}</p>
         </form>
        `
        botao3.style.backgroundColor = "yellow"
    }
    else if(quant >= 3 && Aluno[2].MediaFinal < 50){
        document.getElementById("form").innerHTML=  `
        <form id="formes">
        <h1 id="titulo"> BOLETIM ALUNO 03</h1>
        <label id="subTituloNome"> NOME DO ALUNO </label>
        <p id="showNome">${Aluno[2].Nome}</p> 
        <br>
        <label id="subTituloNotas"> 1 BIMESTRE </label>
       <p id="showNota1"> NOTA: ${Aluno[2].Nota1}</p>
         <br>
        <label id="subTitulo2"> 2 BIMESTRE </label> 
        <p id="showNota2"> NOTA: ${Aluno[2].Nota2}</p>
        <br>
        <label id="subTitulo3"> 3 BIMESTRE </label>
        <p id="showNota3"> NOTA: ${Aluno[2].Nota3}</p>
        <br>
        <label id="subTitulo4"> 4 BIMESTRE </label>
        <p id="showNota4"> NOTA: ${Aluno[2].Nota4}</p>
        <p id="butao">Media Geral: ${MediaGeral}</p>
        <p id="mfreprovado">Media Final: ${Aluno[2].MediaFinal} ${Aluno[2].situacao}</p>
         </form>
        `
        botao3.style.backgroundColor = "red"
    }
    else{
        document.getElementById("form").innerHTML= `
        <form id="formes">
        <h1 id="titulo"> BOLETIM ALUNO 03</h1>
        <label id="subTituloNome"> NOME DO ALUNO </label>
        <input type="text"  id="nome">
         <br>
        <label id="subTituloNotas"> 1 BIMESTRE </label>
        <input type="number"  id="notas1" max="100" min="0">
         <br>
        <label id="subTitulo2"> 2 BIMESTRE </label> 
        <input type="number"  id="notas2" max="100" min="0"> 
        <br>
        <label id="subTitulo3"> 3 BIMESTRE </label>
        <input type="number"  id="notas3" max="100" min="0">
        <br>
        <label id="subTitulo4"> 4 BIMESTRE </label>
        <input type="number"  id="notas4" max="100" min="0"> 
        <button type="button" onclick="calcularMF()" id="butao"> GERAR BOLETIM </button>
        <p id="mf"></p>
         </form>
        `
    }
    
    }

    function form4(){

        if (quant < 3){
            alert("Adicione os alunos em ordem crescente")
            return false;
          }

        if(quant >= 4 && Aluno[3].MediaFinal >= 70){
            document.getElementById("form").innerHTML=  `
            <form id="formes">
            <h1 id="titulo"> BOLETIM ALUNO 04</h1>
            <label id="subTituloNome"> NOME DO ALUNO </label>
            <p id="showNome">${Aluno[3].Nome}</p> 
            <br>
            <label id="subTituloNotas"> 1 BIMESTRE </label>
           <p id="showNota1"> NOTA: ${Aluno[3].Nota1}</p>
             <br>
            <label id="subTitulo2"> 2 BIMESTRE </label> 
            <p id="showNota2"> NOTA:${Aluno[3].Nota2}</p>
            <br>
            <label id="subTitulo3"> 3 BIMESTRE </label>
            <p id="showNota3"> NOTA: ${Aluno[3].Nota3}</p>
            <br>
            <label id="subTitulo4"> 4 BIMESTRE </label>
            <p id="showNota4"> NOTA: ${Aluno[3].Nota4}</p>
            <p id="butao">Media Geral: ${MediaGeral}</p>
            <p id="mfaprovado">Media Final: ${Aluno[3].MediaFinal} ${Aluno[3].situacao}</p>
             </form>
            `
            botao4.style.backgroundColor = "rgb(0, 218, 0)"
        } 
        else if(quant >= 4 && Aluno[3].MediaFinal >= 50){
            document.getElementById("form").innerHTML=  `
            <form id="formes">
            <h1 id="titulo"> BOLETIM ALUNO 04</h1>
            <label id="subTituloNome"> NOME DO ALUNO </label>
            <p id="showNome">${Aluno[3].Nome}</p> 
            <br>
            <label id="subTituloNotas"> 1 BIMESTRE </label>
           <p id="showNota1"> NOTA: ${Aluno[3].Nota1}</p>
             <br>
            <label id="subTitulo2"> 2 BIMESTRE </label> 
            <p id="showNota2"> NOTA:${Aluno[3].Nota2}</p>
            <br>
            <label id="subTitulo3"> 3 BIMESTRE </label>
            <p id="showNota3"> NOTA: ${Aluno[3].Nota3}</p>
            <br>
            <label id="subTitulo4"> 4 BIMESTRE </label>
            <p id="showNota4"> NOTA: ${Aluno[3].Nota4}</p>
            <p id="butao">Media Geral: ${MediaGeral}</p>
            <p id="mfrecuperacao">Media Final: ${Aluno[3].MediaFinal} ${Aluno[3].situacao}</p>
             </form>
            `
            botao4.style.backgroundColor = "yellow"
        }
        else if(quant >= 4 && Aluno[3].MediaFinal < 50){
            document.getElementById("form").innerHTML=  `
            <form id="formes">
            <h1 id="titulo"> BOLETIM ALUNO 04</h1>
            <label id="subTituloNome"> NOME DO ALUNO </label>
            <p id="showNome">${Aluno[3].Nome}</p> 
            <br>
            <label id="subTituloNotas"> 1 BIMESTRE </label>
           <p id="showNota1"> NOTA: ${Aluno[3].Nota1}</p>
             <br>
            <label id="subTitulo2"> 2 BIMESTRE </label> 
            <p id="showNota2"> NOTA:${Aluno[3].Nota2}</p>
            <br>
            <label id="subTitulo3"> 3 BIMESTRE </label>
            <p id="showNota3"> NOTA: ${Aluno[3].Nota3}</p>
            <br>
            <label id="subTitulo4"> 4 BIMESTRE </label>
            <p id="showNota4"> NOTA: ${Aluno[3].Nota4}</p>
            <p id="butao">Media Geral: ${MediaGeral}</p>
            <p id="mfreprovado">Media Final: ${Aluno[3].MediaFinal} ${Aluno[3].situacao}</p>
             </form>
            `
            botao4.style.backgroundColor = "red"
        }
        else{
            document.getElementById("form").innerHTML= `
            <form id="formes">
            <h1 id="titulo"> BOLETIM ALUNO 04</h1>
            <label id="subTituloNome"> NOME DO ALUNO </label>
            <input type="text"  id="nome">
             <br>
            <label id="subTituloNotas"> 1 BIMESTRE </label>
            <input type="number"  id="notas1" max="100" min="0">
             <br>
            <label id="subTitulo2"> 2 BIMESTRE </label> 
            <input type="number"  id="notas2" max="100" min="0"> 
            <br>
            <label id="subTitulo3"> 3 BIMESTRE </label>
            <input type="number"  id="notas3" max="100" min="0">
            <br>
            <label id="subTitulo4"> 4 BIMESTRE </label>
            <input type="number"  id="notas4" max="100" min="0"> 
            <button type="button" onclick="calcularMF()" id="butao"> GERAR BOLETIM </button>
            <p id="mf"></p>
             </form>
            `
        }
        
        }
    
    

        function form5(){
            if (quant < 4){
                alert("Adicione os alunos em ordem crescente")
                return false;
              }
            if(quant == 5 && Aluno[4].MediaFinal >= 70){
                document.getElementById("form").innerHTML=  `
                <form id="formes">
                <h1 id="titulo"> BOLETIM ALUNO 05</h1>
                <label id="subTituloNome"> NOME DO ALUNO </label>
                <p id="showNome">${Aluno[4].Nome}</p> 
                <br>
                <label id="subTituloNotas"> 1 BIMESTRE </label>
               <p id="showNota1"> NOTA: ${Aluno[4].Nota1}</p>
                 <br>
                <label id="subTitulo2"> 2 BIMESTRE </label> 
                <p id="showNota2"> NOTA: ${Aluno[4].Nota2}</p>
                <br>
                <label id="subTitulo3"> 3 BIMESTRE </label>
                <p id="showNota3"> NOTA: ${Aluno[4].Nota3}</p>
                <br>
                <label id="subTitulo4"> 4 BIMESTRE </label>
                <p id="showNota4"> NOTA: ${Aluno[4].Nota4}</p>
                <p id="butao">Media Geral: ${MediaGeral}</p>
                <p id="mfaprovado">Media Final: ${Aluno[4].MediaFinal} ${Aluno[4].situacao}</p>
                 </form>
                `
                botao5.style.backgroundColor = "rgb(0, 218, 0)";
            } 
            else if(quant == 5 && Aluno[4].MediaFinal >= 50){
                document.getElementById("form").innerHTML=  `
                <form id="formes">
                <h1 id="titulo"> BOLETIM ALUNO 05</h1>
                <label id="subTituloNome"> NOME DO ALUNO </label>
                <p id="showNome">${Aluno[4].Nome}</p> 
                <br>
                <label id="subTituloNotas"> 1 BIMESTRE </label>
               <p id="showNota1"> NOTA: ${Aluno[4].Nota1}</p>
                 <br>
                <label id="subTitulo2"> 2 BIMESTRE </label> 
                <p id="showNota2"> NOTA: ${Aluno[4].Nota2}</p>
                <br>
                <label id="subTitulo3"> 3 BIMESTRE </label>
                <p id="showNota3"> NOTA: ${Aluno[4].Nota3}</p>
                <br>
                <label id="subTitulo4"> 4 BIMESTRE </label>
                <p id="showNota4"> NOTA: ${Aluno[4].Nota4}</p>
                <p id="butao">Media Geral: ${MediaGeral}</p>
                <p id="mfrecuperacao">Media Final: ${Aluno[4].MediaFinal} ${Aluno[4].situacao}</p>
                 </form>
                `
                botao5.style.backgroundColor = "yellow"
            }
            else if(quant == 5 && Aluno[4].MediaFinal < 50){
                document.getElementById("form").innerHTML=  `
                <form id="formes">
                <h1 id="titulo"> BOLETIM ALUNO 05</h1>
                <label id="subTituloNome"> NOME DO ALUNO </label>
                <p id="showNome">${Aluno[4].Nome}</p> 
                <br>
                <label id="subTituloNotas"> 1 BIMESTRE </label>
               <p id="showNota1"> NOTA: ${Aluno[4].Nota1}</p>
                 <br>
                <label id="subTitulo2"> 2 BIMESTRE </label> 
                <p id="showNota2"> NOTA: ${Aluno[4].Nota2}</p>
                <br>
                <label id="subTitulo3"> 3 BIMESTRE </label>
                <p id="showNota3"> NOTA: ${Aluno[4].Nota3}</p>
                <br>
                <label id="subTitulo4"> 4 BIMESTRE </label>
                <p id="showNota4"> NOTA: ${Aluno[4].Nota4}</p>
                <p id="butao">Media Geral: ${MediaGeral}</p>
                <p id="mfreprovado">Media Final: ${Aluno[4].MediaFinal} ${Aluno[4].situacao}</p>
                 </form>
                `
                botao5.style.backgroundColor = "red"
            }
            else{
                document.getElementById("form").innerHTML= `
                <form id="formes">
                <h1 id="titulo"> BOLETIM ALUNO 05</h1>
                <label id="subTituloNome"> NOME DO ALUNO </label>
                <input type="text"  id="nome">
                 <br>
                <label id="subTituloNotas"> 1 BIMESTRE </label>
                <input type="number"  id="notas1" max="100" min="0">
                 <br>
                <label id="subTitulo2"> 2 BIMESTRE </label> 
                <input type="number"  id="notas2" max="100" min="0"> 
                <br>
                <label id="subTitulo3"> 3 BIMESTRE </label>
                <input type="number"  id="notas3" max="100" min="0">
                <br>
                <label id="subTitulo4"> 4 BIMESTRE </label>
                <input type="number"  id="notas4" max="100" min="0"> 
                <button type="button" onclick="calcularMF()" id="butao"> GERAR BOLETIM </button>
                <p id="mf"></p>
                 </form>
                `
            }
            
            }
        
// Selecionando os botões pelo ID


botao1.addEventListener("click", function() {

    if(contadorbotao1 == 1 ){
        return false
    }
    else{

    
    // Mudando o estilo do botão 1 quando selecionado
    botao1.style.backgroundColor = "white";
    botao1.style.border = "2px solid gray";

    

    if (imagem1.src.endsWith("./img/homem-usuario (2).png")) {
        // Se a imagem atual for "imagem1.jpg", troca para "imagem2.jpg"
        imagem1.src = "./img/homem-usuario.png";}
        else {
            // Caso contrário, troca para "imagem1.jpg"
            imagem1.src = "./img/homem-usuario.png";
        }
        imagem2.src = "./img/homem-usuario (2).png"
        imagem3.src = "./img/homem-usuario (2).png"
        imagem4.src = "./img/homem-usuario (2).png"
        imagem5.src = "./img/homem-usuario (2).png"

        contadorbotao1 += 1;

        if(form1()){
            return;
        }

}});

// Adicionando evento de clique ao botão 2
botao2.addEventListener("click", function() {

    if(quant < 1){
        return false;
    }
    else{
    // Mudando o estilo do botão 2 quando selecionado
    botao2.style.backgroundColor = "white";
    botao2.style.border = "2px solid gray";



    if (imagem2.src.endsWith("./img/homem-usuario (2).png")) {
        // Se a imagem atual for "imagem1.jpg", troca para "imagem2.jpg"
        imagem2.src = "./img/homem-usuario.png";}
        else {
            // Caso contrário, troca para "imagem1.jpg"
            imagem2.src = "./img/homem-usuario.png";
        }
        imagem1.src = "./img/homem-usuario (2).png"
        imagem3.src = "./img/homem-usuario (2).png"
        imagem4.src = "./img/homem-usuario (2).png"
        imagem5.src = "./img/homem-usuario (2).png"

        contadorbotao1 += 1;

        if(form2()){
            return;
        }
}});

botao3.addEventListener("click", function() {

    if(quant < 2){
        return false;
    }
    else{
    // Mudando o estilo do botão 2 quando selecionado
    botao3.style.backgroundColor = "white";
    botao3.style.border = "2px solid gray";


    if (imagem3.src.endsWith("./img/homem-usuario (2).png")) {
        // Se a imagem atual for "imagem1.jpg", troca para "imagem2.jpg"
        imagem3.src = "./img/homem-usuario.png";}
        else {
            // Caso contrário, troca para "imagem1.jpg"
            imagem3.src = "./img/homem-usuario.png";
        }
        imagem2.src = "./img/homem-usuario (2).png"
        imagem1.src = "./img/homem-usuario (2).png"
        imagem4.src = "./img/homem-usuario (2).png"
        imagem5.src = "./img/homem-usuario (2).png"

        if(form3()){
            return;
        }


}});

botao4.addEventListener("click", function() {

    if(quant < 3){
        return false;
    }
    else{
    // Mudando o estilo do botão 2 quando selecionado
    botao4.style.backgroundColor = "white";
    botao4.style.border = "2px solid gray";


    if (imagem4.src.endsWith("./img/homem-usuario (2).png")) {
        // Se a imagem atual for "imagem1.jpg", troca para "imagem2.jpg"
        imagem4.src = "./img/homem-usuario.png";}
        else {
            // Caso contrário, troca para "imagem1.jpg"
            imagem4.src = "./img/homem-usuario.png";
        }
        imagem2.src = "./img/homem-usuario (2).png"
        imagem3.src = "./img/homem-usuario (2).png"
        imagem1.src = "./img/homem-usuario (2).png"
        imagem5.src = "./img/homem-usuario (2).png"

        if(form4()){
            return;
        }

}});

botao5.addEventListener("click", function() {

    if(quant < 4){
        return false;
    }
    else if(quant == 5){
        imagem5.src = "./img/homem-usuario.png";
        imagem2.src = "./img/homem-usuario (2).png"
        imagem3.src = "./img/homem-usuario (2).png"
        imagem4.src = "./img/homem-usuario (2).png"
        imagem.src = "./img/homem-usuario (2).png"

        return;}
        else{
    // Mudando o estilo do botão 2 quando selecionado
    botao5.style.backgroundColor = "white";
    botao5.style.border = "2px solid gray";
    

    if (imagem5.src.endsWith("./img/homem-usuario (2).png")) {
        // Se a imagem atual for "imagem1.jpg", troca para "imagem2.jpg"
        imagem5.src = "./img/homem-usuario.png";}
        else {
            // Caso contrário, troca para "imagem1.jpg"
            imagem5.src = "./img/homem-usuario.png";
        }
        imagem2.src = "./img/homem-usuario (2).png"
        imagem3.src = "./img/homem-usuario (2).png"
        imagem4.src = "./img/homem-usuario (2).png"
        imagem.src = "./img/homem-usuario (2).png"

        

    

}});

contadorbotao1 = ""

function abaixo(){
    if(Aluno[0].MediaFinal < MediaGeral){
        document.getElementById('alun1').innerHTML = "Abaixo da Média Geral"
    }

    if(Aluno[1].MediaFinal < MediaGeral){
        document.getElementById('alun2').innerHTML = "Abaixo da Média Geral"
    }
    if(Aluno[2].MediaFinal < MediaGeral){
        document.getElementById('alun3').innerHTML = "Abaixo da Média Geral"
    }
    if(Aluno[3].MediaFinal < MediaGeral){
        document.getElementById('alun4').innerHTML = "Abaixo da Média Geral"
    }
    if(Aluno[4].MediaFinal < MediaGeral){
        document.getElementById('alun5').innerHTML = "Abaixo da Média Geral"
    }


}