const readline = require( 'readline' ).createInterface( {
    input: process.stdin,
    output: process.stdout
} );

readline.question( "Qual o saldo inicial: ", saldoInicial => {
    readline.question( "Qual é o resultado do último round: ", resultadoUltimoRound => {
        readline.question( "Qual é o custo do item: ", custoItem => {

            saldoInicial = parseInt( saldoInicial );
            custoItem = parseInt( custoItem );

            function decidirCompraOuEconomizar( saldoInicial, resultadoUltimoRound, custoItem ) {
                let novoSaldo = saldoInicial;

                switch ( resultadoUltimoRound ) {
                    case "ganhou":
                        novoSaldo += saldoInicial * 0.15;
                        break;
                    case "perdeu":
                        novoSaldo += saldoInicial * 0.05;
                        break;
                    case "bônus":
                        novoSaldo += saldoInicial * 0.20;
                        break;
                }

                novoSaldo = Math.round( novoSaldo );

                if ( novoSaldo >= custoItem ) {
                    console.log( "Comprar" );
                } else {
                    console.log( "Economizar" );
                }
            }

            decidirCompraOuEconomizar( saldoInicial, resultadoUltimoRound, custoItem );

            readline.close();
        } );
    } );
} );
