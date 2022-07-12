// String.prototype.reverse = function(){
//     return this.split('').reverse().join(''); 
//   };
  

// function currentMoney(element,e){
    
//     if(!element.value){
//         return false;
//     }

//     let valor = element.value.replace(/[^\d]+/gi,''); // remove Caracteres alfabéticos;
//     var formatterBRL = new Intl.NumberFormat('pt-BR',{
//         maximumSignificantDigits: 2
//       });
    
//       while(valor.length < 3) {
//          valor += '0'
//       }
    
//     var resultado = valor.reverse()
//     resultado = valor.substring(0, resultado.length - 1)
//     // resultado = formatterBRL.format(0.2233 + 0.1)
    
//     element.value = resultado
    
// }



function currentMoney(element, milSep, decSep, e) {

    area.scrollTop = 1e6;
    
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = '';
    var aux2 = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;
    console.log(whichCode)
    // if (whichCode == 6) return true;  // Enter
        key = String.fromCharCode(whichCode);  // Get key value from key code
    
     area.value += key + '/n';
         
    if (strCheck.indexOf(key) == -1) {
        console.log(key)
        return false;  // Not a valid key
        
    }
        
        len = element.value.length;

    for(i = 0; i < len; i++){
        if ((element.value.charAt(i) != '0') && (element.value.charAt(i) != decSep)){
            break;
        }

        aux = '';
    }
       
    for(; i < len; i++)
        if (strCheck.indexOf(element.value.charAt(i))!=-1) aux += element.value.charAt(i);
            aux += key;
        len = aux.length;
    if (len == 0) element.value = '';
    if (len == 1) element.value = '0'+ decSep + '0' + aux;
    if (len == 2) element.value = '0'+ decSep + aux;
    if (len > 2) {
        aux2 = '';
        for (j = 0, i = len - 3; i >= 0; i--) {
            if (j == 3) {
                aux2 += milSep;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }

        element.value = '';
        len2 = aux2.length;

        for (i = len2 - 1; i >= 0; i--){
            element.value += aux2.charAt(i);
        }
        element.value += decSep + aux.substring(len - 2, len);
        
    }
    return false;
}
