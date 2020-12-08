import { Funcionarios } from "./usuarios";

export class Autenticacao {
    
    constructor() {
        
    }

    entrar(inputFromOperador, inputFromSenha) {  
        //usar o find
        
        if (inputFromOperador === Funcionarios.operador && inputFromSenha === Funcionarios.senha) {
            localStorage.setItem("logado", JSON.stringify(inputFromOperador));
            document.getElementById("homepage").style.display = "none";
            document.getElementById("app-page").style.display = "block";
        } else {
            alert('Dados incorretos, tente novamente!');
            /*Funcionarios.operador = "";
            Funcionarios.operador.focus();*/
        }
    }

    sair() { 
        localStorage.clear();
        localStorage.setItem('botao-saida', JSON.stringify(this.saida));
        document.getElementById("app-page").style.display = "none";
        document.getElementById("homepage").style.display = "block";
    }
}
