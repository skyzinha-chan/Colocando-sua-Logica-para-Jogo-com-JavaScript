const readline = require( 'readline' ).createInterface( {
    input: process.stdin,
    output: process.stdout
} );

readline.question( "Digite o nome do item: ", nome => {
    readline.question( "Digite a quantidade: ", quantidade => {
        quantidade = parseInt( quantidade );

        let inventario = [
            { nome: 'espada', quantidade: 1 },
            { nome: 'escudo', quantidade: 1 },
            { nome: 'poção de cura', quantidade: 6 },
            { nome: 'poção de mana', quantidade: 4 },
            { nome: 'pergaminho', quantidade: 3 }
        ];

        // Utilizamos o metodo JavaScript find() para buscar o primeiro elemento no array que satisfaça a condição especificada por uma função de callback.
        let item = inventario.find( item => item.nome === nome );

        // TODO: Implemente a condição necessária para a exibição de cada mensagem
        if ( item ) {
            if ( quantidade <= item.quantidade ) {
                console.log( "Disponível" );
            } else {
                console.log( "Indisponível" );
            }
        } else {
            console.log( "Item não encontrado no inventário" );
        }


        readline.close();
    } );
} );