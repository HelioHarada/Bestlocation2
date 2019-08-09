

export function markerFood() {
   
    this.setMapOnAll(null);
    let self = this;
    let food = ["bar", "restaurant", "establishment", "cafe", "food",];
    var service = new google.maps.places.PlacesService(map);
    let img = "../src/img/food.png";
    let request = {
        location: options.center,
        types: food,
        radius: 2074
    };

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                self.createMarker(results[i], img);
            }
        }
    }
    service.nearbySearch(request, callback);
};

export function markerHospital() {
    this.setMapOnAll(null);
    let self = this;
    let type = ["hospital", "doctor", "health"];
    var service = new google.maps.places.PlacesService(map);
    let img = "../src/img/hospital.png";
    let request = {
        location: options.center,
        types: type,
        radius: 2074
    };

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                self.createMarker(results[i], img);
            }
        }
    }
    service.nearbySearch(request, callback);
};

export function markerFarmacia() {
    this.setMapOnAll(null);
    let self = this;
    let type = ["pharmacy", "health"];
    var service = new google.maps.places.PlacesService(map);
    let img = "../src/img/farmacia.png";
    let request = {
        location: options.center,
        types: type,
        radius: 2074
    };

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                self.createMarker(results[i], img);
            }
        }
    }
    service.nearbySearch(request, callback);
};

export function markerSchool() {
    this.setMapOnAll(null);
    let self = this;
    let type = ["school", "university"];
    var service = new google.maps.places.PlacesService(map);
    let img = "../src/img/school.png";
    let request = {
        location: options.center,
        types: type,
        radius: 2074
    };
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                self.createMarker(results[i], img);
            }
        }
    }
    service.nearbySearch(request, callback);
}

export function markerMarket() {
    this.setMapOnAll(null);
    let self = this;
    let type = ["supermarket", "grocery_or_supermarket", "store"];
    let img = "../src/img/supermarket.png";
    var service = new google.maps.places.PlacesService(map);
    let request = {
        location: options.center,
        types: type,
        radius: 2074
    };
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                self.createMarker(results[i], img);
            }
        }
    }
    service.nearbySearch(request, callback);
}