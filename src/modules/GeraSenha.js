export default class GeraSenha {
    constructor(size, numero, maiuscula, minuscula, simbolo) {
        this.size = size;
        this.numero = numero;
        this.maiuscula = maiuscula;
        this.minuscula = minuscula;
        this.simbolo = simbolo;
    }

    gerarSenha() {
        let senha = [];
        for(let i = 0; i < this.size; i++) {
            senha.push(String.fromCharCode(this.rand()));
        }
        return senha.join('');
    }
    rand() {
        const codigos = this.codigos();
        const randomIndex = Math.floor(Math.random() * codigos.length);
        return codigos[randomIndex];
    }
    codigos() {
        const codigos = [];
        if(this.numero) for(let i = 48; i <= 57; i++) codigos.push(i);
        if(this.maiuscula) for(let i = 65; i <= 90; i++) codigos.push(i);
        if(this.minuscula) for(let i = 97; i <= 122; i++) codigos.push(i);
        if(this.simbolo) {
            for(let i = 33; i <= 47; i++) codigos.push(i);
            for(let i = 58; i <= 64; i++) codigos.push(i);
            for(let i = 91; i <= 96; i++) codigos.push(i);
            for(let i = 123; i <= 126; i++) codigos.push(i);
        }
        return codigos;
    }

}

