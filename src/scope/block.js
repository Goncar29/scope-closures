function fruits() {
    /* Las variables solo pueden ser usadas dentro del Bloque
    Para eso solo utilizaremos let, const */

    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block Scope
        const fruit3 = 'Banana'; // block scope
        
        console.log(fruit2); // let
        console.log(fruit3); // const
    }

    console.log(fruit1); // var

    // esto = {}, es un bloque
}
fruits();