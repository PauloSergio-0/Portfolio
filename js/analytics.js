window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-EBPE41L69T');


/**
 * Envia evento para o Google Analytics
 * @param {String} evento - Nome do evento 
 * @param {String} categoria_evento - Tipo de categoria
 * @param {String} rotulo_evento - Rotulo do evento que será enviado
 * @param {number} valor_evento - Valor do evento 
 */

function eventoAnalytics(evento, categoria_evento, rotulo_evento, valor_evento){

    gtag('event', evento, {
    'event_category': categoria_evento,
    'event_label': rotulo_evento,
    'value': valor_evento
    });
}

// function clicar_botao(){

//     gtag('event', 'clique_botao', {
//     'event_category': 'interação',
//     'event_label': 'botao_teste',
//     'value': 1
//     });
    
// }


// function bem_vindo(){
//         gtag('event', 'bem_vindo_page', {
//         'event_category': 'interação',
//         'event_label': 'bem_vindo',
//         'value': 1
//         });
    
// }

// function home_test(){
//         gtag('event', 'home', {
//         'event_category': 'interação',
//         'event_label': 'home_page',
//         'value': 1
//         });
    
// }