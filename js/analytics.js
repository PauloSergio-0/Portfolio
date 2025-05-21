window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-EBPE41L69T');


function clicar_botao(){

    gtag('event', 'clique_botao', {
    'event_category': 'interação',
    'event_label': 'botao_teste',
    'value': 1
    });
    
}


function bem_vindo(){
        gtag('event', 'bem_vindo_page', {
        'event_category': 'interação',
        'event_label': 'bem_vindo',
        'value': 1
        });
    
}

function home_test(){
        gtag('event', 'home', {
        'event_category': 'interação',
        'event_label': 'home_page',
        'value': 1
        });
    
}