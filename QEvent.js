(function () {
    var QItem = function (Query) {
            if ( !! document.querySelectorAll(Query)[1]) {
                return document.querySelectorAll(Query);
            } else {
                return document.querySelector(Query);
            }
        };
    window.$ = QItem;
    
    if (!document.all) {
        document.all = document.getElementsByTagName("*");
    }
    var addEventFunction = function (type, callback) {
            if (document.addEventListener) {
                this.addEventListener(type, callback, false);
            } else if (document.attachEvent) {
                this.attachEvent('on' + type, function() { 
                  return callback.call(elem, window.event); 
                });
            }
        };
    for (var i = 0; i < document.all.length; i++) {
        document.all[i].addEvent = addEventFunction;
    }
})();