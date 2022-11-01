function carregar(){
    let msg = document.getElementById("msg")
    let img = document.getElementById("imagem")
    let data = new Date()

    let hora = data.getHours()
    let minutos = data.getMinutes()
    let dia = data.getDate() 
    let mes = data.getMonth()+1
    let ano = data.getFullYear()
    let diaSem = data.getDay()

    

    function semana() {
        switch(diaSem) {
            case 0:
                return "Domingo"
                
            case 1:
                return "Segunda"
                
            case 2:
                return "Terca"
                
            case 3:
                return "Quarta"
                
            case 4:
                return "Quinta"
                
            case 5:
                return "Sexta"
                 
            case 6:
                return "Sabado"
                 
            default:
                "[ERRO] Dia inválido!"
                break
                
        
            }
        
    }
        mes = mes <= 9 ? `0${mes}` : mes
        dia = dia <= 9 ? `0${dia}` : dia
        hora = hora <= 9 ? `0${hora}` : hora
        minutos = minutos <= 9 ? `0${minutos}` : minutos

    if (hora >= 0 && hora <12) {
        img.src = "./Imagens/fotomanha.jpg"
        msg.innerHTML = `Olá, bom dia! agora são ${hora}h${minutos} da
        manhã<br>Hoje é ${semana()}, ${dia}/${mes}/${ano}. `
        document.body.style.background = "#f6d684"
    } else if (hora >= 12 && hora <=18) {
        img.src = "./Imagens/fototarde.jpg"
        msg.innerHTML = `Olá, boa tarde! agora são ${hora}h${minutos} da
        tarde<br>Hoje é ${semana()}, ${dia}/${mes}/${ano}. `
        document.body.style.background = "#de602f"
    } else {
        img.src = "./Imagens/fotonoite.jpg"
        msg.innerHTML = `Olá, boa noite! agora são ${hora}h${minutos} da
        noite<br>Hoje é ${semana()}, ${dia}/${mes}/${ano}. `
        document.body.style.background = "#645E5C"
    }
}
