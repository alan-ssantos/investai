// function validacaoEmail(field) {
//     usuario = field.value.substring(0, field.value.indexOf("@"));
//     dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
//     if ((usuario.length >=1) &&
//         (dominio.length >=3) &&
//         (usuario.search("@")==-1) &&
//         (dominio.search("@")==-1) &&
//         (usuario.search(" ")==-1) &&
//         (dominio.search(" ")==-1) &&
//         (dominio.search(".")!=-1) &&
//         (dominio.indexOf(".") >=1)&&
//         (dominio.lastIndexOf(".") < dominio.length - 1)) {
//         document.getElementById("msgemail").innerHTML="E-mail válido";
//         alert("email valido");
//     }
//     else{
//         alert("E-mail invalido");
//     }
// }


// VALIDAÇÃO DO NOME
$("#nome").keyup(function(){
    nome = $(this).val();
    if (nome.length < 2 ||
        nome.length > 20) {
        $(this).addClass("form-erro");
    } else {
        $(this).removeClass("form-erro");
    }
});

// VALIDAÇÃO DO SOBRENOME
$("#sobrenome").keyup(function(){
    sn = $(this).val();
    if (sn.length < 2 ||
        sn.length > 20) {
        $(this).addClass("form-erro");
    } else {
        $(this).removeClass("form-erro");
    }
});

// VALIDAÇÃO DO E-MAIL
$("#email").keyup(function(){
    email = $(this).val();
    if (email.length < 6 ||
        email.indexOf('@') < 1 ||
        email.lastIndexOf(".") < 3 ||
        email.charAt(email.lastIndexOf(".")+2) == "" ||
        email.lastIndexOf("@") == email.length - 1) {
            $(this).addClass("form-erro");
    } else {
        $(this).removeClass("form-erro");
    }
});

// VALIDAÇÃO DA SENHA
$("#senha").keyup(function(){
    senha = $(this).val();
    if (senha.length < 6 ||
        senha.length > 30) {
        $(this).addClass("form-erro");
    } else {
        $(this).removeClass("form-erro");
    }
});
