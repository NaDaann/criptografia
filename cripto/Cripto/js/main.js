
function criptografar() {
    var a = document.getElementById('text').value
    if(a == "") {
        alert("Informe uma palávra")
    }
    else {
        
        var  palavra_recebida = converte(a);
        var metade = palavra_recebida.length / 2 
        var part1 = palavra_recebida.slice(0, metade);
        var part2 = palavra_recebida.slice(metade, palavra_recebida.length);
      
        var junto1 = part1.join('');
        var junto2 = part2.join('');
        
        var pq = 2537
        var key = 5
        console.log(junto1)
        console.log(junto2)
        var cripto1 = Math.pow(junto1,key) % pq;
        var cripto2 = Math.pow(junto2,key)% pq ;
        

        cripto1 = cripto1.toString();
        cripto2 = cripto2.toString();

        while(cripto1.length < junto1.length) {
            cripto1 = "0"+cripto1;
        }
        while(cripto2.length < junto2.length) {
            cripto2 = "0" + cripto2;
        }
        var resultado_cripto = cripto1.concat(cripto2);
        console.log(cripto1 + ", "+ cripto2)
        console.log(resultado_cripto);
        // var mostra_msg = converte_num(resultado_cripto);
        // console.log(mostra_msg);
        document.getElementById('res2').innerHTML = converte(a);
        document.getElementById('res').innerHTML = a

       console.log("Primeira parte " + part1, "Segunda parte " + part2);

        //document.getElementById('results') 
        var num = "04511133";
        var arr_letras_num;
        var num_num;
        for(var i = 0; i <= num.length - 1; i++) {
            var j = i + 2;
            num_num = num.substr(i,i);

             console.log(i+", "+j + ": "+ num_num);
            arr_letras_num = num_num.split('');
            i++;
        
        }
       
    }

}


function converte(letras) {
    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var codigos = [];
    for (var i in letras) {
        codigos.push(alfabeto.indexOf(letras[i].toUpperCase()));
        if(codigos[i] < 10 ){
            codigos[i] = "0"+codigos[i];
        }
    }
    
    return codigos;
}
function converte_num(num) {
    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    alfabeto = alfabeto.split('');
    var arr_letras_num;
    var num_num;
    for(var i = 0; i <= num.length - 1; i++) {
        var j = i + 1;
        num_num = num.slice(i,j);
        arr_letras_num = num_num.split('');
        i++;
    }
    // var letras = [];
    // for (var i in num) {
    //     letras.push(alfabeto.indexOf(alfabeto[i].toUpperCase()));
    // }
    return  arr_letras_num;
}

// var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// console.log(arr)