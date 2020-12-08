import { Estoque } from './estoque';
import { Cadastro } from './cadastro';
import { Autenticacao } from './auth';


class App {
    constructor() {
        this.inputNome = document.getElementById('nome');
        this.inputDescricao = document.getElementById('descricao');
        this.inputQuantidade = document.getElementById('quantidade');
        this.inputPreco = document.getElementById('preco');
        this.inputCodigo = document.getElementById('codigo');
        this.botaoCadastrar = document.getElementById('cadastrar');
        this.entrar = document.getElementById('entrar');
        this.saida = document.getElementById('botao-saida'); //Necessita criar o botão
        this.inputFromOperador = document.getElementById('operador');
        this.inputFromSenha = document.getElementById('senha');
        this.mostrarProduto = document.getElementById('mostrar-produto');
        this.botaoExcluir = document.getElementById('botao-excluir')
        this.estoque = new Estoque();
        this.autenticacao = new Autenticacao();
        this.cadastro = new Cadastro();

        this.registrarEventos();
    }

    registrarEventos() {
        this.entrar.onclick = () => {
            this.autenticacao.entrar(this.inputFromOperador.value, this.inputFromSenha.value);
        }

        this.botaoCadastrar.onclick = () => {            
            this.mostrarProduto.innerHTML += `<div class="container" id="dashboard">
            <div class="card-deck">
            <div class="card text-white bg-primary mb-2">
                <div class="card-body">
                    <h5 class="card-title">Produto: ${this.inputNome.value} &nbsp | &nbsp Código: ${this.inputCodigo.value} </h5>
                    <hr class="hr-page2">
                    <p class="card-text-white text-justify">Descrição: ${this.inputDescricao.value}</p>
                    <p class="card-text-white text-justify">Quantidade: ${this.inputQuantidade.value}</p>
                    <p class="card-text-white text-justify">Preço R$: ${this.inputPreco.value}</p>
                    <button class="btn  btn-danger" type="button" id="botao-excluir">Excluir</button>                                        
                </div>
            </div>`;

            this.mostrarAlert();
        }

        this.saida.onclick = () => {
            this.autenticacao.sair() 
        }        
        
    }    

    //Mostrar aviso de cadastro realizado ao usuário e adicionar inputs na lista
    mostrarAlert() {
        alert("Produto cadastrado com sucesso!");

        this.estoque.adicionar(new Cadastro(this.inputNome.value, this.inputDescricao.value, this.inputQuantidade.value, this.inputPreco.value, this.inputCodigo.value));

    }


    //Limpar campos do input
    /*limparInput() {
        this.this.inputNome.value = "";
        this.inputDescricao.value = "";
        this.inputQuantidade.value = "";
        this.inputPreco.value = "";
        this.inputCodigo.value = "";
    }*/

}

new App();