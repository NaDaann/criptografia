var valores_criptografia1 = 0;
var valores_criptografia2 = 0;
var resul_decripto_decre = 0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function criptografar() {
    var a = document.getElementById('text').value
    if(a == "") {
        alert("Informe uma palavra")
    }
    else {
        
        var  palavra_recebida = converte(a);
        var metade = palavra_recebida.length / 2 
        var part1 = palavra_recebida.slice(0, metade);
        var part2 = palavra_recebida.slice(metade, palavra_recebida.length);
      
        var junto1 = part1.join('');
        var junto2 = part2.join('');
        resul_decripto_decre = junto1.concat(junto2);
        console.log(junto1,junto2)
        
        var pq = BigInt(2537);
        var key = BigInt(5);
        var verifica_math = Math.pow(parseFloat(junto1),parseFloat(key));
        var verificar_cripto = verifica_math.toString();
        if(verificar_cripto.length > 11){
            console.log('entrou');
            verifica_math = BigInt(verifica_math) - BigInt(1n);
            console.log(verifica_math);
        }
        var cripto1 = verifica_math % BigInt(pq);
        verifica_math = Math.pow(parseFloat(junto2),parseFloat(key));
        if(verifica_math.length > 11)verifica_math = BigInt(verifica_math) - BigInt(1n);;
        var cripto2 = BigInt(verifica_math) % BigInt(pq);

        // var cripto1 = Math.pow(junto1,key) % pq;
        // var cripto2 = Math.pow(junto2,key)% pq;
        

        cripto1 = cripto1.toString();
        cripto2 = cripto2.toString();

        while(cripto1.length < junto1.length) {
            cripto1 = "0"+cripto1;
        }
        while(cripto2.length < junto2.length) {
            cripto2 = "0" + cripto2;
        }
        var resultado_cripto = cripto1.concat(cripto2);
        

        valores_criptografia1 = parseFloat(junto1);
        valores_criptografia2 = parseFloat(junto2);
        console.log(cripto1 + ", "+ cripto2)
        console.log(resultado_cripto);
        var mostra_msg = converte_num(resultado_cripto);
        console.log(mostra_msg);
        // document.getElementById('res2').innerHTML = converte(a);
        

       console.log("Primeira parte " + part1, "Segunda parte " + part2);

        //document.getElementById('results') 
        var arr_letras_num = [];
        var num = resultado_cripto;
        var num_num;
        var IJ = 0;
        for(var i = 0; i <= num.length - 2; i++) {
            num_num = num.split('');
            arr_letras_num[IJ] = num_num[i]+""+num_num[i+1];
            if(arr_letras_num[IJ].substring(0,1) == "0")arr_letras_num[IJ] = arr_letras_num[IJ].substring(1);
            IJ++;
            i++;
            
        }
        var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        alfabeto = alfabeto.split('');
        for(var i = 0; i <= alfabeto.length - 1; i++){
            
            await sleep(100);
            console.log(mostra_msg[0] == alfabeto[i]);
            
            if(mostra_msg[0] == alfabeto[i]){
                document.getElementById('num').innerHTML = mostra_msg[0];
                break;
            }
            else document.getElementById('num').innerHTML = alfabeto[i];
            
        }
        for(var i = 0; i <= alfabeto.length - 1; i++){
          await sleep(100);
          if(mostra_msg[1] == alfabeto[i]){
            document.getElementById('num1').innerHTML = mostra_msg[1];
            break;
          }
          else document.getElementById('num1').innerHTML = alfabeto[i];
        }
        for(var i = 0; i <= alfabeto.length - 1; i++){
          await sleep(100);
          if(mostra_msg[2] == alfabeto[i]){
            document.getElementById('num2').innerHTML = mostra_msg[2];
            break;
          }
          else document.getElementById('num2').innerHTML = alfabeto[i];
        }
        for(var i = 0; i <= alfabeto.length - 1; i++){
          await sleep(100);
          if(mostra_msg[3] == alfabeto[i]){
            document.getElementById('num3').innerHTML = mostra_msg[3];
            break;
          }
            else document.getElementById('num3').innerHTML = alfabeto[i];
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
    var arr_letras_num = [];
    var num_num;
    var IJ = 0;
    for(var i = 0; i <= num.length - 2; i++) {
        num_num = num.split('');
        arr_letras_num[IJ] = num_num[i]+""+num_num[i+1];
        if(arr_letras_num[IJ].substring(0,1) == "0")arr_letras_num[IJ] = arr_letras_num[IJ].substring(1);
        IJ++;
        i++;
    }
    var letras = [];
    letras = alfabeto.split('');
    console.log(letras);
    var resultado_cript_letras = [];
    for (var i in arr_letras_num) {
        if(arr_letras_num[i] > 26)arr_letras_num[i] = arr_letras_num[i] % 26;
        resultado_cript_letras.push(letras[arr_letras_num[i]]);
        console.log(arr_letras_num[i]);
    }
    return  resultado_cript_letras;
}


async function descriptografar() {
    let pq = 2537;

    let key = 1949;


        //document.getElementById('results') 
        var arr_letras_num = [];
        var num = resul_decripto_decre;
        console.log(num)
        var num_num;
        var IJ = 0;
        var mostra_msg = converte_num(resul_decripto_decre);
        console.log(mostra_msg);
        for(var i = 0; i <= num.length - 2; i++) {
            num_num = num.split('');
            arr_letras_num[IJ] = num_num[i]+""+num_num[i+1];
            if(arr_letras_num[IJ].substring(0,1) == "0")arr_letras_num[IJ] = arr_letras_num[IJ].substring(1);
            IJ++;
            i++;
            
        }
        var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        alfabeto = alfabeto.split('');
        for(var i = 0; i <= alfabeto.length - 1; i++){
            
            await sleep(100);
            console.log(mostra_msg[0] == alfabeto[i]);
            
            if(mostra_msg[0] == alfabeto[i]){
                document.getElementById('num').innerHTML = mostra_msg[0];
                break;
            }
            else document.getElementById('num').innerHTML = alfabeto[i];
            
        }
        for(var i = 0; i <= alfabeto.length - 1; i++){
          await sleep(100);
          if(mostra_msg[1] == alfabeto[i]){
            document.getElementById('num1').innerHTML = mostra_msg[1];
            break;
          }
          else document.getElementById('num1').innerHTML = alfabeto[i];
        }
        for(var i = 0; i <= alfabeto.length - 1; i++){
          await sleep(100);
          if(mostra_msg[2] == alfabeto[i]){
            document.getElementById('num2').innerHTML = mostra_msg[2];
            break;
          }
          else document.getElementById('num2').innerHTML = alfabeto[i];
        }
        for(var i = 0; i <= alfabeto.length - 1; i++){
          await sleep(100);
          if(mostra_msg[3] == alfabeto[i]){
            document.getElementById('num3').innerHTML = mostra_msg[3];
            break;
          }
            else document.getElementById('num3').innerHTML = alfabeto[i];
          }


}