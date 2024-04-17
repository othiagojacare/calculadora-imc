function calcular(){
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value

    var res = Number(peso / (altura * altura))

    if(res <= 18.5){
        alert('Abaixo do peso')
    }else if ( res >=  24.9){
        alert('Peso normal')
    }else if(res >= 29.9){
        alert('Sobrepeso')
    }else if(res >= 34.9){
        alert('Obesidade grau 1')
    }else if(res >= 39.9){
        alert('Obesidade grau 2')
    }else if(res >= 40){
        alert('Obesidade grau 3')
    }

    alert(res.toFixed(2))

}