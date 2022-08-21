function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else {
    let fsex = document.getElementsByName('radsex')
    idade = ano - Number(fano.value)
    res.innerHTML = `Idade calculadora: ${idade}`
    let gênero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade>=0 && idade<10) {
            //criança
            img.setAttribute('src', '../imagens/Bebê menino.png')
        } else if (idade<21) {
            //jovem
            img.setAttribute('src', '../imagens/Jovem Masculino.png')
        }else if (idade < 50) {
            //adulto
            img.setAttribute('src', '../imagens/Homem Adulto.png')

        }else {
            //Idoso
            img.setAttribute('src', '../imagens/Idoso.png')
        }
    }
    else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade>=0 && idade<10) {
            //criança
            img.setAttribute('src', '../imagens/Bebê feminino.png')
            
        } else if (idade<21) {

            //jovem
            img.setAttribute('src', '../imagens/Jovem Mulher.png')
        }else if (idade < 50) {
            //adulto
            img.setAttribute('src', '../imagens/Mulher Adulta.png')
        }else {
            //Idoso
            img.setAttribute('src', '../imagens/Idosa.png')
        }

    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    }
    
}