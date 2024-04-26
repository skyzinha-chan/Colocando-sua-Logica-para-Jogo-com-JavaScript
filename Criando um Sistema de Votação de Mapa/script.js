const readline = require( 'readline' ).createInterface( {
    input: process.stdin,
    output: process.stdout
} );

readline.question( "Informe os mapas da próxima rodada: ", entrada => {
    const votos = entrada.split( ' ' );

    const contagemVotos = {};

    votos.forEach( voto => {
        contagemVotos[ voto ] = ( contagemVotos[ voto ] || 0 ) + 1;
    } );

    let mapaVencedor;
    let maxVotos = 0;

    for ( let mapa in contagemVotos ) {
        if ( contagemVotos[ mapa ] > maxVotos ) {
            maxVotos = contagemVotos[ mapa ];
            mapaVencedor = mapa;
        }
    }

    console.log( mapaVencedor );

    readline.close();
} );