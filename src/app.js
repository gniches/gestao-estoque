import { Estoque } from './estoque';
import { Cadastro } from './cadastro';
import { Autenticacao } from './auth.js';

class App {
    constructor() {
        this.inputNome = document.getElementById('nome'); //Criar input
        this.inputDescricao = document.getElementById('descricao'); //Criar input
        this.inputQuantidade = document.getElementById('quantidade'); //Criar input
        this.inputPreco = document.getElementById('preco'); //Criar input
        this.inputCodigo = document.getElementById('codigo'); //Criar input
        this.botaoCadastrar = document.getElementById('cadastrar'); //Criar input
        this.entrar = document.getElementById('entrar');
        this.sair = document.getElementById('sair'); //Necessita criar o botão
        this.inputFromOperador = document.getElementById('operador');
        this.inputFromSenha = document.getElementById('senha');
        this.estoque = new Estoque();
        this.autenticacao = new Autenticacao();

        this.registrarEventos();
    }
    
    registrarEventos() {
        this.entrar.onclick = () => {
            this.autenticacao.entrar(this.inputFromOperador.value, this.inputFromSenha.value);            
        }
    }

    registrarProduto() {
        this.botaoCadastrar.onclick = () => {
            this.mostrarAlert();
        }
    }

    mostrarAlert() {
        alert("Produto cadastrado com sucesso!");
        
        this.estoque.adicionar(new Cadastro(this.inputNome.value, this.inputDescricao.value, this.inputQuantidade.value, this.inputPreco.value, this.inputCodigo.value));
    }

    

    /*botaoSair() {
        this.entrar.onclick = () => {
            this.autenticacao.sair() // ???
        }
    }*/
}

new App ();