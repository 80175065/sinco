//Elimina las cookies existentes
(function () {
    var appName = (window.location.host + '_' + window.location.pathname.split('/')[1]).toLowerCase();

    var fecha = new Date();
    fecha.setFullYear(1970);

    var _cookieName = function (name) {
        var validator = new RegExp('(' + appName + '_(.{' + id_session.length + '}\\?)(_' + name + '(.*?)))(=(.*?)(?:;|$))', 'gi');
        var match,
            arrCookies = [];

        do {
            match = validator.exec(document.cookie);
            if (match) {
                arrCookies.push(match[1]);
            }
        } while (match);

        return arrCookies;
    };

    var empresas = _cookieName('empresa_');
    var sucursales = _cookieName('sucursal_');
    var versionJs = _cookieName('version-js');

    var _removeCookie = function (arr) {
        arr.forEach(function (c) {
            document.cookie = c + '=;expires=' + fecha.toGMTString();
        });
    }

    _removeCookie(empresas);
    _removeCookie(sucursales);
    _removeCookie(versionJs);
})();