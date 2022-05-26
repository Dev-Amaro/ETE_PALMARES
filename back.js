var usuarios = [
    {"login": "sergio10", "senha": "sergio"},
    {"login": "valmir", "senha": "valmir"},
    {"login": "alex", "senha": "alex"},
    {"login": "luana", "senha": "luana"},
    {"login": "otavio", "senha": "otavio"},
    {"login": "andreia", "senha": "andreia"},
    {"login": "mariajose", "senha": "mariajose"},
    {"login": "esdras", "senha": "esdras"},
    {"login": "lauro", "senha": "lauro"},
    {"login": "alberto", "senha": "alberto"},
    {"login": "marcelo", "senha": "marcelo"},
    {"login": "carlos", "senha": "carlos"},
];
function novaAba(url){
    var win = window.open(url, '_blank');
    win.focus();
}

function Login() {
    var usuario = document.getElementsByName('email')[0].value.toLowerCase();
    var senha = document.getElementsByName('pass')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            novaAba('prof.html');
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}