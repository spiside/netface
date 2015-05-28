var os = require('os');

module.exports = function () {
    var interfaces = os.networkInterfaces(),
         addresses = {};

    for (var iface in interfaces) {
        if (interfaces.hasOwnProperty(iface)) {
            for (var i = 0; i < interfaces[iface].length; i++) {
                var netType = interfaces[iface][i];

                if (netType.address != undefined &&
                    netType.family == 'IPv4' &&
                    !netType.internal
                   ) {

                    addresses[iface] = netType.address;
                }
            }
        }
    }

    return addresses;
}
