window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-KM9TG6SLYV');


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