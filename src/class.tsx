export default class Time{
    private pontos : number = 0
    /*
        private nome : string = "",
        private vitorias : number = 0,
        private derrotas : number = 0,
        private empates : number = 0
        tambem poderia ser assim, mas dai a chamada no contructor poderia ser sem o private e o = x*/
    public constructor (

        /* Quando você cria uma nova instância da classe, 
        o construtor é chamado. Dentro do construtor, as variáveis declaradas 
        com a palavra-chave private são automaticamente associadas ao objeto 
        que está sendo criado. Isso significa que essas variáveis se tornam 
        propriedades do objeto e podem ser acessadas e modificadas apenas 
        dentro da classe. */
         private nome : string = "",
         private vitorias : number = 0,
         private derrotas : number = 0,
         private empates : number = 0
    ) {
        /*this.nome = nome 
        this.vitorias = vitorias 
        this.derrotas = derrotas 
        this.empates = empates
        Isso não é necessario pq os privates ja 'setam' a variavel que vem quando é chamada a função
        */
        this.pontos = (3 * this.vitorias) + this.empates
    }

    public setNome(nomeVar : string)
    {
        this.nome = nomeVar
    }
    public getNome()
    {
        return this.nome
    }
    public setvitorias(vitoriasVar : number)
    {
        this.vitorias = vitoriasVar
    }
    public getVitorias()
    {
        return this.vitorias
    }
    public setderrotas(derrotasVar : number)
    {
        this.derrotas = derrotasVar
    }
    public getDerrotas()
    {
        return this.derrotas
    }
    public setempates(empatesVar : number)
    {
        this.empates = empatesVar
    }
    public getempate()
    {
        return this.empates
    }
    public getPontos()
    {
        return this.pontos
    }
}