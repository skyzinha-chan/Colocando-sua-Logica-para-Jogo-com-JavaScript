const readline = require( 'readline' ).createInterface( {
    input: process.stdin,
    output: process.stdout
} );

readline.question( "Escolha entre as três classes disponíveis:\n - Guerreiro;\n - Mago;\n - Arqueiro.\n ", classe => {
    switch ( classe ) {
        case "Guerreiro":
            console.log( "Você escolheu a classe Guerreiro!" );
            break;
        case "Mago":
            console.log( "Você escolheu a classe Mago!" );
            break;
        case "Arqueiro":
            console.log( "Você escolheu a classe Arqueiro!" );
            break;
        default:
            console.log( "Classe inválida! Escolha entre Guerreiro, Mago ou Arqueiro." );
            break;
    }
    readline.close();
} );
