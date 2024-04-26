const readline = require( 'readline' ).createInterface( {
    input: process.stdin,
    output: process.stdout
} );

readline.question( "Digite o nome do guerreiro: ", nome => {
    readline.question( "Digite o nível do guerreiro: ", nivel => {
        nivel = parseInt( nivel );

        // TODO: Implemente a condição necessária para a exibição de cada mensagem
        if ( nivel >= 40 ) {
            console.log( "Parabéns, valente " + nome + "! Sua coragem e habilidade são notáveis!" );
        } else if ( nivel >= 30 && nivel < 40 ) {
            console.log( "Quase lá, " + nome + "! Continue treinando!" );
        } else if ( nivel < 30 ) {
            console.log( "Ainda é cedo, jovem " + nome + ". Treine mais!" );
        }
        readline.close();
    } );
} );