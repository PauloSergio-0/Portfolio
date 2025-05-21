window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-EBPE41L69T');


function clicar_botao(){
    document.getElementById('botao-teste').addEventListener('click', function() {
        gtag('event', 'clique_botao', {
        'event_category': 'interação',
        'event_label': 'botao_teste',
        'value': 1
        });
    });
}


function bem_vindo(){
    document.getElementById('botao-bem_vindo').addEventListener('click', function() {
        gtag('event', 'bem_vindo-page', {
        'event_category': 'interação',
        'event_label': 'bem_vindo',
        'value': 1
        });
    });
}

function home_test(){
    document.getElementById('botao-home').addEventListener('click', function() {
        gtag('event', 'home', {
        'event_category': 'interação',
        'event_label': 'home_page',
        'value': 1
        });
    });
}