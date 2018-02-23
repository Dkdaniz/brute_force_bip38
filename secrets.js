 /*
    ---------------- EXPLICAÇÃO ----------------
    Você pode tanto adicionar uma nova posição quando adicionar um novo item para uma posição examplo:
    1 - Adicionando um novo item 209 na posição 1  ['', '02', '205'],
    resultado final: 
      ['', '12', '203', '209'],
      
    2 - Adicionando uma nova posição, tem aquela hipotese que pode ser que o addr esteja escrito com dois d,
    para testar essa hipotese voce adiciona abaixo do   ['d', 'D'],  ['','d', 'D'],  
    resultado final: 
     ['d', 'D'],
     ['','d', 'D'], 
     ['r', 'R'],
     *importante, eu adicionei o item '' na posição 2 pois eu quero testar combinações tanto com duas letras d, e também somente com uma.

     ** Esses dois exemplos eu copiei só parte das posicoes para não ficar grande o exemplo. 

     3 - Caso deseja criar uma nova hipotese é possível.
     Exemplo: Eu tenho uma senha que é 'casa' mas não sei como foi escrita 'cAsa','c@Sa'... 
     resultado final: 
     posicoes = [
        ['c', 'C'],
        ['a', 'A', '@'],
        ['s', 'S'],
        ['a', 'A', '@']        
    ];
     ---------------- ----------------- 
     * Essa explicação  é um comentário do código e não será executada.
     ** Quanto maior o número de posiçoes e itens, maior o número de combinações. 
     *** Boa sorte e bora quebrar essa senha. 
    */
    'use strict';
    
    var combinations = require('./combinations');
    
    module.exports = (function () {
    
    //Array com as posições
        var posicoes = [];

    //Array com as Senhas
        var senhas = [];
       
        posicoes = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
    
        //Função que combina as possibilidades
        combinations = function (pos, c, soFar, total) {
            if (pos == c.length) {
                // LEIA -> caso não deseja ver todas as possibilidades de senhas sendo imprimidas no console coloque um // antes do console.log(soFar)
                console.log(soFar);
                senhas = senhas.concat(soFar);
                return;            
            }
            for (var i = 0; i != c[pos].length; i++) {
                combinations(pos + 1, c, soFar + c[pos][i], total);
            }
        }
    
        combinations(0, posicoes, '', 0);
    
        return senhas;
    
    }());
    