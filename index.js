var os = require('os');

module.exports = function () {
    var interfaces = os.networkInterfaces(),
         addresses = {};

    for (var interface in interfaces) {
        for (var i in interfaces[interface]) {
            var netType = interfaces[interface][i];

            if (netType.address != undefined &&
                netType.family == 'IPv4' &&
                !netType.internal
               ) {

                addresses[interface] = netType.address;
            }
        };
    }

    return addresses;
}
