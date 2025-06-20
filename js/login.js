var marco = Sinco.initialize(['dragdrop.min', 'carousel.min']);

window['aplicacion'] = (window.location.host + '_' + window.location.pathname.split('/')[1] + '_' + id_session + '?').toLowerCase();
window['disabled'] = false;

marco.require(['comunes/servicios', 'menu/loadlibs', 'login/instaladores', 'comunes/storage', 'login/eventos'], function (servicios, loadLibs) {
    Object.keys(localStorage).forEach(function (key) {
        if (key.startsWith((window.location.host + '_' + window.location.pathname.split('/')[1]).toLowerCase()) && !key.endsWith('_css_theme')) {
            localStorage.removeItem(key);
        }
    });

    servicios.verificarEmpresas();

    loadLibs.cargar(document.head);
});