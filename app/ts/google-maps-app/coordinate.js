System.register([], function(exports_1) {
    var Coordinate;
    return {
        setters:[],
        execute: function() {
            Coordinate = (function () {
                function Coordinate(lat, long, location) {
                    this.lat = lat;
                    this.long = long;
                    this.location = location;
                }
                return Coordinate;
            })();
            exports_1("Coordinate", Coordinate);
        }
    }
});
//# sourceMappingURL=coordinate.js.map