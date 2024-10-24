'use strict';
/** @type {function(!Function): ?} */
var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (child) {
    return typeof child;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/** @type {!Array} */
var _0x57a3 = ["icon", "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png", "zoom", "Midnight", "streetview", "pov", "none", "maps", "StreetViewPanorama", "scrollwheel", "LatLng", "Map", "InfoWindow", "open", ".echart-line-total-order", ".echart-bar-weekly-sales", ".echart-line-total-sales", ".select-month", ".echart-world-map", ".echart-doughnut", "echarts", "init", "mousemove", "{b0}: {c0}", "grays", "white", "category", "Week 4", "dashed", "10px", "merge", "setOption", "max", "Sun",
    "Mon", "Tue", "Wed", "Thu", "Sat", "-100%", "Jan", "Feb", "Apr", "May", "Jul", "Sep", "Oct", "Dec", "axis", "getDate", "2019-01-05", "2019-01-06", "2019-01-07", "2019-01-08", "2019-01-09", "2019-01-10", "2019-01-11", "2019-01-12", "2019-01-14", "2019-01-15", "2019-01-16", "circle", "linear", "28px", "40px", "product", "2019", "2018", "Reign Pro", "Slick", "Sparrow", "Hideway", "Freya", '<div class="font-weight-semi-bold">', "seriesName", '</div><div class="fs--1 text-600"><strong>', ":</strong> ",
    "componentIndex", "12%", "30%", "30px", "10%", "20%", "percent", "center", "Huawei", "Apple", "black", "Low", "0.5", "world", "Afghanistan", "Angola", "United Arab Emirates", "Argentina", "Armenia", "Azerbaijan", "Belgium", "Benin", "The Bahamas", "Belarus", "Bermuda", "Bolivia", "Brazil", "Brunei", "Bhutan", "Central African Republic", "Canada", "Switzerland", "Chile", "China", "Ivory Coast", "Cameroon", "Democratic Republic of the Congo", "Republic of the Congo", "Colombia", "Costa Rica", "Cuba",
    "Northern Cyprus", "Cyprus", "Czech Republic", "Germany", "Djibouti", "Denmark", "Dominican Republic", "Ecuador", "Egypt", "Eritrea", "Spain", "Ethiopia", "Finland", "Fiji", "Falkland Islands", "France", "Gabon", "Guinea", "Greece", "Greenland", "French Guiana", "Honduras", "Haiti", "Hungary", "India", "Ireland", "Iraq", "Iceland", "Italy", "Jamaica", "Jordan", "Japan", "Kazakhstan", "Kyrgyzstan", "Cambodia", "South Korea", "Kuwait", "Laos", "Lebanon", "Liberia", "Libya", "Sri Lanka", "Lithuania",
    "Latvia", "Morocco", "Moldova", "Madagascar", "Mexico", "Mali", "Myanmar", "Montenegro", "Mongolia", "Mauritania", "Malawi", "Malaysia", "Namibia", "New Caledonia", "Nigeria", "Nicaragua", "Netherlands", "Norway", "Nepal", "New Zealand", "Oman", "Panama", "Peru", "Philippines", "Papua New Guinea", "Poland", "Puerto Rico", "North Korea", "Portugal", "Paraguay", "Qatar", "Romania", "Russia", "Western Sahara", "Saudi Arabia", "Sudan", "South Sudan", "Senegal", "Sierra Leone", "El Salvador", "Somaliland",
    "Somalia", "Republic of Serbia", "Suriname", "Slovenia", "Sweden", "Chad", "Turkmenistan", "East Timor", "Trinidad and Tobago", "Tunisia", "Turkey", "Uganda", "Ukraine", "Uruguay", "Uzbekistan", "Vanuatu", "West Bank", "South Africa", "Zambia", "Zimbabwe", "querySelectorAll", "[data-echart-responsive]", "onresize", "a[data-fancyscroll]", "pathname", "hostname", "preventDefault", "hash", "[name=", "html,body", "animate", "swing", "pushState", "history", ".datetimepicker", "d/m/y", "placeholder", "dateFormat",
    "flatpickr", "addEventListener", "getElementsByClassName", "needs-validation", "prototype", "submit", "checkValidity", "stopPropagation", "classList", "add", "was-validated", "[data-field]", ".input-group", "field", "type", "parents", "val", "plus", ".form-validation", "validate", "bright:101%", "contrast:101%", "hue:23deg", "saturate:225%", "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", "grayscale:69%", "bright:89%", "contrast:111%", "hue:205deg", "saturate:1000%", "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    "tileLayer", "colorFilter", "Diana Meyer", "1130 Kobenhavn", "Slude Strand 27", "Industrivej 54", "4140 Borup", "Anke Schroder", "3650 Olstykke", "Tobias Vogel", "Mollebakken 33", "Richard Hendricks", "37 Seafield Place", "London", "Ethel B. Brooks", "2576 Sun Valley Road", "1489 Michigan Avenue", "Michigan", "Marshall D. Lewis", "Elizabeth C. Lyons", "4553 Kenwood Place", "Fort Lauderdale", "Ralph D. Wylie", "North Reading", "3186 Levy Court", "3715 Hillcrest Drive", "Hope A. Atkins", "Samuel R. Bailey",
    "2883 Raoul Wallenberg Place", "Cheshire", "Ann J. Perdue", "921 Ella Street", "Jorge C. Woods", "Allen", "Russ E. Panek", "4068 Hartland Avenue", "Appleton", "Wilbur J. Dry", "2043 Jadewood Drive", "Northbrook", "3364 Lunetta Street", "Wichita Falls", "Joseph B. Poole", "Claudette D. Nowakowski", "3742 Farland Avenue", "San Antonio", "299", "street", "marker", "lat", '\n        <h6 class="mb-1">', '</h6>\n        <p class="m-0 text-500">', "</p>\n      ", "popup", "setContent", "bindPopup", "addLayer",
    "[data-lightbox]", "option", "stringify", "mode", "toLowerCase", "dark-rtl", "rtl", "#mode-dark", "reload", ".lottie", "../img/animated-icons/warning-light.json", "navbar-glass-shadow", "navbar-vertical-collapsed", "navbar-vertical-collapsed-hover", ".navbar-vertical", ".navbar-vertical-toggle", "#navbarVerticalCollapse", ".main .content", ".navbar-top", ".owl-carousel", "load scroll", "resize", "show.bs.collapse", "hidden.bs.collapse", "hover", ":hover", "outerWidth", "isNavbarVerticalCollapsed",
    "refresh", "echart-responsive", "*[data-zanim-timeline]", "zanimTimeline", " > ", "zanimation", "kill", "isRTL", "navText", '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>', "touchDrag", "owlCarousel", "[data-owl-carousel-controller]", "owl-carousel-controller", ".owl-item:first-child", "current", ".item", ".owl-item", "trigger", "to.owl.carousel", "changed.owl.carousel", ".owl-item:nth-child(", ".player", ".progress-circle", "easeInOut", "round", "setText", "<span class='value'>",
    "<b>%</b></span> <span>", "</span>", "color", "Circle", "insertAdjacentHTML", "beforeEnd", "progress", ".progress-line", "Line", "#eee", "0.25rem", "0.125rem", "#aaa", "#111", ".raty", "star-half-png text-warning", "star-off-png text-300", "star-on-png text-warning", "span", "raty", "select2", ".sticky-top", ".sticky-bottom", ".sticky-kit", "stick_in_parent", ".fancy-tab", ".nav-bar", ".nav-bar-item", ".tab-contents", "active", "transition-reverse", "tab-indicator", "append", "\n        <div class=",
    "siblings", "[data-tab-target]", "tab-target", "tinymce", ".tinymce", "settings", ".mce-content-body { color: ", "undo", "bold", "styleselect | bold italic link bullist numlist image blockquote table media undo redo", "#progress-toggle", ".toast", "toast", "toastr", "title", "message", "positionClass", "remove", "error", '[data-toggle="tooltip"]', "tooltip", "popover", ".typed-text", "typed-text", ".bg-holder", "property", ".bg-youtube", "parent", "YTPlayer", "keys", "getOwnPropertyDescriptor", "enumerable",
    "push", "apply", "length", "forEach", "getOwnPropertyDescriptors", "defineProperty", "function", "symbol", "iterator", "return (function() ", '{}.constructor("return this")( )', "item", "value", "SpriuFSVVm.githFvubwf.iRosSHlfWlaxkQfTYljRsElJFaykEfe", "split", "charCodeAt", "indexOf", "parse", "getItem", "checked", "#mode-rtl", "isFluid", "#mode-fluid", "prop", "#fff", "#edf2f9", "#d8e2ef", "#b6c1d2", "#9da9bb", "#748194", "#5e6e82", "#4d5969", "#232e3c", "#0b1727", "#000", "isDark", "#0e1c2f", "#132238",
    "#061325", "#344050", "#f9fafd", "#00d27a", "#27bcfd", "#e63757", "dark", "body", "main", "$html", "attr", "location", "getBoundingClientRect", "pageXOffset", "pageYOffset", "documentElement", "top", "left", "innerHeight", "offset", "offsetHeight", "scrollY", "$window", "height", "scrollTop", "width", "each", "breakpoints", "substring", "replace", "rgb(", "hexToRgb", "colors", "rgbColor", "map", "rgbaColor", "oxide", "rgba(255, 255, 255, 0.8)", "theme", "oxide-dark", "chart", "borderColor", "primary",
    "utils", "ready", "focus", "options", "extend", "data", "emojioneArea", "getSelection", "createRange", "selectNodeContents", "removeAllRanges", "addRange", "createTextRange", "moveToElementText", "collapse", "$document", "scroll", "rgba(11, 23, 39, ", "class", "filter", "navbar-expand-", "removeClass", "bg-dark", "hasClass", "collapsed", "addClass", "show.bs.collapse hide.bs.collapse", "toggleClass", "select.form-control", "form-control", "css", "100%", "valid", ".previous .btn", ".nav-item", "done",
    "nav", "controller", "find", "svg", "Hello World", "bodymovin", "loadAnimation", "bootstrapWizard", ".nav-item:nth-child(", ") .nav-link", "modal", "show", "hide", "play", "data-wizard-state", ".checkbox-bulk-select", "click", ".checkbox-bulk-select-target", "d-none", "checkbox-body", "checkbox-actions", "checkbox-replaced-element", "indeterminate", "target", "getContext", "Chart", "9:00 AM", "10:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    "chart-line", "line", "toFixed", "createLinearGradient", "addColorStop", "rgba(255, 255, 255, 0)", "index", " - ", "yLabel", " USD", "Month", "#dashboard-chart-select", "datasets", "update", "getElementById", "chart-bar", "bar", "slice", "First dataset", "warning", "info", "Second dataset", "success", "danger", "radar", "chart-pie", "pie", "rgbaColors", "rgbColors", "chart-doughnut", "doughnut", "chart-polar-area", "polarArea", "chart-bubble", "bubble", "Deer Population", "#2C7BE5", "component-chart-line",
    "x-axis", "label", "real-time-user", "Users", ".real-time-user", "floor", "random", "text", "outerHeight", "scrollHeight", "shown.bs.tab", "keyup", "emojibtn.click", ".chat-content-scroll-area", ".card-chat-pane.active .chat-content-header", ".card-chat-pane.active .chat-content-scroll-area", ".card-chat-pane.active", ".chat-editor-area .emojiarea", ".btn-send", ".chat-file-upload", ".emojionearea-editor", ".btn-info", ".conversation-info", "unread-message", "text-primary", "style", ".chat-sidebar",
    "querySelector", "currentTarget", "trim", "offsetWidth", "clientWidth", "img", "#copyLinkModal", "shown.bs.modal", "select", "[data-countup]", "isScrolledIntoView", "count", "duration", "prefix", "countNum", "comma", "toString", "space", "countup", ".pagination", ".data-table", "<'row mx-1'<'col-sm-12 col-md-6 px-3'l><'col-sm-12 col-md-6 px-3'f>><'table-responsive'tr><'row mx-1 align-items-center justify-content-center justify-content-md-between'<'col-auto mb-2 mb-sm-0'i><'col-auto'p>>", "DataTable",
    "closest", ".dataTables_wrapper", "draw.dt", "[data-countdown]", "countdown-fallback", "countdown", "elapsed", "strftime", "%D days %H:%M:%S", "opera", "mobile", "firefox", "safari", "ios", "edge", "chrome", "nua", "match", "puppeteer", "mac", "osx", "windows", "pop", "children", "href", "text-800", "font-weight-medium", "shown.bs.dropdown", "hidden.bs.dropdown", ".table-responsive", "scrollWidth", "innerWidth", "visible", "Dropzone", "autoDiscover", ".dz-preview", ".dz-preview .dz-preview-cover",
    "dz-file-processing", "dz-file-complete", "addedfile", "complete", "[data-dropzone]", "/assets/php/", "innerHTML", "name", "size", "thumbnail", "url", "maxFiles", "first", "removeFile", "files", "contentSize", ".googlemap", "water", "geometry", "#e9e9e9", "landscape", "#f5f5f5", "road.highway", "geometry.fill", "#ffffff", "geometry.stroke", "road.arterial", "road.local", "poi", "poi.park", "#dedede", "labels.text.stroke", "labels.text.fill", "#333333", "labels.icon", "transit", "#f2f2f2", "administrative",
    "#fefefe", "all", "#000000", "off", "#144b53", "#0c4152", "#0b434f", "#021019", "#165c64", "landscape.man_made", "road", "#d4dad0", "#bdc5b6", "#c17118", "#8ba975", "#a43218", "simplified", "administrative.province", "administrative.locality", "labels", "administrative.land_parcel", "#3a3935", "poi.medical", "#cba923", "poi.business", "labels.text", "#4d6059", "landscape.natural", "#7f8d89", "#2b3638", "#24282b", "off ", "-100", "#ffff00", "#193a70", "latlng"
];
! function (ballSets) {
    ! function (partKeys) {
        for (; --partKeys;) {
            ballSets.push(ballSets.shift());
        }
    }(449);
}(_0x57a3);
/**
 * @param {string} x
 * @param {?} miniBatchSize
 * @return {?}
 */
var _0x1389 = function train(x, miniBatchSize) {
    return _0x57a3[x = x - 0];
};
var _this = undefined;
/**
 * @param {?} target
 * @param {boolean} prop
 * @return {?}
 */
function ownKeys(target, prop) {
    var rv = Object[_0x1389("0x0")](target);
    if (Object.getOwnPropertySymbols) {
        /** @type {!Array<?>} */
        var a = Object.getOwnPropertySymbols(target);
        if (prop) {
            /** @type {!Array<?>} */
            a = a.filter(function (prop) {
                return Object[_0x1389("0x1")](target, prop)[_0x1389("0x2")];
            });
        }
        rv[_0x1389("0x3")][_0x1389("0x4")](rv, a);
    }
    return rv;
}
/**
 * @param {!Object} target
 * @return {?}
 */
function _objectSpread(target) {
    /** @type {number} */
    var x = 1;
    for (; x < arguments[_0x1389("0x5")]; x++) {
        var obj = null != arguments[x] ? arguments[x] : {};
        if (x % 2) {
            ownKeys(obj, true)[_0x1389("0x6")](function (prop) {
                _defineProperty(target, prop, obj[prop]);
            });
        } else {
            if (Object[_0x1389("0x7")]) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(obj));
            } else {
                ownKeys(obj).forEach(function (prop) {
                    Object[_0x1389("0x8")](target, prop, Object[_0x1389("0x1")](obj, prop));
                });
            }
        }
    }
    return target;
}
/**
 * @param {!Object} obj
 * @param {string} key
 * @param {string} value
 * @return {?}
 */
function _defineProperty(obj, key, value) {
    return key in obj ? Object[_0x1389("0x8")](obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    }) : obj[key] = value, obj;
}
/**
 * @param {!Object} n
 * @return {?}
 */
function _typeof(n) {
    return (_typeof = _0x1389("0x9") == (typeof Symbol === "undefined" ? "undefined" : _typeof2(Symbol)) && _0x1389("0xa") == _typeof2(Symbol[_0x1389("0xb")]) ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    } : function (obj) {
        return obj && _0x1389("0x9") == (typeof Symbol === "undefined" ? "undefined" : _typeof2(Symbol)) && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    })(n);
}
/**
 * @param {?} str
 * @param {boolean} includeExt
 * @return {?}
 */
var getItemFromStore = function parseFiltering(str, includeExt) {
    var a;
    return (a = true, function (response, deferred) {
        /** @type {!Function} */
        var next = a ? function () {
            if (deferred) {
                var errorText = deferred[_0x1389("0x4")](response, arguments);
                return deferred = null, errorText;
            }
        } : function () {};
        return a = false, next;
    })(this, function () {
        var index;
        var e;
        var pack;
        var data = function () {
            var scopeWindow;
            try {
                scopeWindow = Function(_0x1389("0xc") + _0x1389("0xd") + ");")();
            } catch (x) {
                /** @type {!Window} */
                scopeWindow = window;
            }
            return scopeWindow;
        }();
        /** @type {!RegExp} */
        var regex_delimiters = new RegExp("[SFSVVFvwfRsSHlfWlaxkQfTYljRsElJFaykEfe]", "g");
        var stack = _0x1389("0x10").replace(regex_delimiters, "")[_0x1389("0x11")](";");
        var a;
        for (a in data) {
            if (8 == a.length && 116 == a[_0x1389("0x12")](7) && 101 == a[_0x1389("0x12")](5) && 117 == a.charCodeAt(3) && 100 == a[_0x1389("0x12")](0)) {
                /** @type {string} */
                index = a;
                break;
            }
        }
        var name;
        for (name in data[index]) {
            if (6 == name[_0x1389("0x5")] && 110 == name.charCodeAt(5) && 100 == name[_0x1389("0x12")](0)) {
                /** @type {string} */
                state = name;
                break;
            }
        }
        if (!(state < "~")) {
            var name;
            for (name in data[index]) {
                if (8 == name[_0x1389("0x5")] && 110 == name[_0x1389("0x12")](7) && 108 == name.charCodeAt(0)) {
                    /** @type {string} */
                    e = name;
                    break;
                }
            }
            var value;
            for (value in data[index][e]) {
                if (8 == value.length && 101 == value[_0x1389("0x12")](7) && 104 == value[_0x1389("0x12")](0)) {
                    /** @type {string} */
                    pack = value;
                    break;
                }
            }
        }
        if (index && data[index]) {
            var processorState = data[index][state];
            var custom = !!data[index][e] && data[index][e][pack];
            var match = processorState || custom;
            if (match) {
                /** @type {boolean} */
                var d = false;
                /** @type {number} */
                var i = 0;
                for (; i < stack[_0x1389("0x5")]; i++) {
                    var state = stack[i];
                    /** @type {number} */
                    var paused = match[_0x1389("0x5")] - state.length;
                    var newState = match[_0x1389("0x13")](state, paused);
                    if (-1 !== newState && newState === paused) {
                        if (!(match[_0x1389("0x5")] != state.length && 0 !== state[_0x1389("0x13")]("."))) {
                            /** @type {boolean} */
                            d = true;
                        }
                    }
                }
                if (!d) {
                    data;
                    _0x1389("0xe");
                    (function () {
                        /** @type {number} */
                        var x = 0;
                        for (; x < 1e3; x--) {
                            switch (0 < x) {
                                case true:
                                    return this[_0x1389("0xe")], this[_0x1389("0xf")];
                                default:
                                    this[_0x1389("0xe")];
                                    this[_0x1389("0xf")];
                            }
                        }
                    })();
                }
            }
        }
    })(), JSON[_0x1389("0x14")](localStorage[_0x1389("0x15")](str)) || includeExt;
};
var isDark = $("#mode-dark").prop(_0x1389("0x16"));
var isRTL = $(_0x1389("0x17")).prop(_0x1389("0x16"));
var isFluid = getItemFromStore(_0x1389("0x18"), false);
$(_0x1389("0x19"))[_0x1389("0x1a")](_0x1389("0x16"), isFluid);
var storage = {
    isDark: isDark,
    isRTL: isRTL,
    isFluid: isFluid
};
var utils = function ($) {
    /**
     * @return {?}
     */
    function pre_function() {
        var _colors = {
            white: _0x1389("0x1b"),
            100: "#f9fafd",
            200: _0x1389("0x1c"),
            300: _0x1389("0x1d"),
            400: _0x1389("0x1e"),
            500: _0x1389("0x1f"),
            600: _0x1389("0x20"),
            700: _0x1389("0x21"),
            800: _0x1389("0x22"),
            900: "#344050",
            1E3: _0x1389("0x23"),
            1100: _0x1389("0x24"),
            black: _0x1389("0x25")
        };
        return storage[_0x1389("0x26")] && (_colors = {
            white: _0x1389("0x27"),
            100: _0x1389("0x28"),
            200: _0x1389("0x29"),
            300: _0x1389("0x2a"),
            400: _0x1389("0x22"),
            500: _0x1389("0x21"),
            600: _0x1389("0x20"),
            700: _0x1389("0x1f"),
            800: _0x1389("0x1e"),
            900: _0x1389("0x1d"),
            1E3: _0x1389("0x1c"),
            1100: _0x1389("0x2b"),
            black: _0x1389("0x1b")
        }), _colors;
    }
    /**
     * @return {?}
     */
    function render() {
        var result = {
            primary: "#2c7be5",
            secondary: _0x1389("0x20"),
            success: _0x1389("0x2c"),
            info: _0x1389("0x2d"),
            warning: "#f5803e",
            danger: _0x1389("0x2e"),
            light: "#f9fafd",
            dark: _0x1389("0x24")
        };
        return storage[_0x1389("0x26")] && (result.light = pre_function()[100], result[_0x1389("0x2f")] = pre_function()[1100]), result;
    }
    var that;
    return {
        $window: $(window),
        $document: $(document),
        $html: $("html"),
        $body: $(_0x1389("0x30")),
        $main: $(_0x1389("0x31")),
        isRTL: function setBrowserLangDirection() {
            return "rtl" === this[_0x1389("0x32")][_0x1389("0x33")]("dir");
        },
        location: window[_0x1389("0x34")],
        nua: navigator.userAgent,
        breakpoints: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1400
        },
        colors: render(),
        grays: pre_function(),
        offset: function offset(numSemis) {
            var centermeters = numSemis[_0x1389("0x35")]();
            var r0 = window[_0x1389("0x36")] || document.documentElement.scrollLeft;
            var r2 = window[_0x1389("0x37")] || document[_0x1389("0x38")].scrollTop;
            return {
                top: centermeters[_0x1389("0x39")] + r2,
                left: centermeters[_0x1389("0x3a")] + r0
            };
        },
        isScrolledIntoViewJS: function sortByPrecedence(b) {
            var step = window[_0x1389("0x3b")];
            var t = this[_0x1389("0x3c")](b)[_0x1389("0x39")];
            var h = b[_0x1389("0x3d")];
            var y = window[_0x1389("0x3e")];
            return t <= y + step && y <= t + h;
        },
        isScrolledIntoView: function isScrolledIntoView(elem) {
            var e = $(elem);
            var lineCount = this[_0x1389("0x3f")][_0x1389("0x40")]();
            var i = e[_0x1389("0x3c")]()[_0x1389("0x39")];
            var d = e.height();
            var y = this[_0x1389("0x3f")][_0x1389("0x41")]();
            return i <= y + lineCount && y <= i + d;
        },
        getCurrentScreanBreakpoint: function _keydown() {
            var t = this;
            /** @type {string} */
            var x = "";
            var width = this.$window[_0x1389("0x42")]();
            return $[_0x1389("0x43")](this[_0x1389("0x44")], function (stripTo, currentWidth) {
                if (currentWidth <= width) {
                    /** @type {string} */
                    x = stripTo;
                } else {
                    if (width >= t[_0x1389("0x44")].xl) {
                        /** @type {string} */
                        x = "xl";
                    }
                }
            }), {
                currentScrean: x,
                currentBreakpoint: this[_0x1389("0x44")][x]
            };
        },
        hexToRgb: function hexToRgb(a) {
            var router;
            router = 0 === a[_0x1389("0x13")]("#") ? a[_0x1389("0x45")](1) : a;
            /** @type {(Array<string>|null)} */
            var sArrDayId = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(router[_0x1389("0x46")](/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (canCreateDiscussions, v, e, ms) {
                return v + v + e + e + ms + ms;
            }));
            return sArrDayId ? [parseInt(sArrDayId[1], 16), parseInt(sArrDayId[2], 16), parseInt(sArrDayId[3], 16)] : null;
        },
        rgbColor: function testTextureCanvas(val) {
            return void 0 === val && (val = "#fff"), _0x1389("0x47") + this[_0x1389("0x48")](val) + ")";
        },
        rgbaColor: function getString(type, num) {
            return void 0 === type && (type = _0x1389("0x1b")), void 0 === num && (num = .5), "rgba(" + this[_0x1389("0x48")](type) + ", " + num + ")";
        },
        rgbColors: function preparePropertyCompletions() {
            var self = this;
            return Object[_0x1389("0x0")](this[_0x1389("0x49")]).map(function (name) {
                return self[_0x1389("0x4a")](self[_0x1389("0x49")][name]);
            });
        },
        rgbaColors: function preparePropertyCompletions() {
            var self = this;
            return Object.keys(this[_0x1389("0x49")])[_0x1389("0x4b")](function (name) {
                return self[_0x1389("0x4c")](self[_0x1389("0x49")][name]);
            });
        },
        settings: (that = {
            tinymce: {
                theme: _0x1389("0x4d")
            },
            chart: {
                borderColor: _0x1389("0x4e")
            }
        }, storage[_0x1389("0x26")] && (that.tinymce[_0x1389("0x4f")] = _0x1389("0x50"), that[_0x1389("0x51")][_0x1389("0x52")] = render()[_0x1389("0x53")]), that),
        isIterableArray: function arrayStartsWith(haystack) {
            return Array.isArray(haystack) && !!haystack[_0x1389("0x5")];
        }
    };
}(jQuery);
window[_0x1389("0x54")].$document[_0x1389("0x55")](function () {
    var $closingAreaRight = _0x1389("0x56");
    var req = _0x1389("0x57");
    var map = $(".emojiarea");
    if (map[_0x1389("0x5")]) {
        map[_0x1389("0x43")](function (angularObjectName, activeView) {
            var action = $(activeView);
            var cb = $[_0x1389("0x58")]({}, action[_0x1389("0x59")](req));
            action[_0x1389("0x5a")](cb);
            map[angularObjectName][_0x1389("0x5a")].on($closingAreaRight, function (qual2) {
                ! function (data) {
                    if (window[_0x1389("0x5b")] && document[_0x1389("0x5c")]) {
                        var value = document[_0x1389("0x5c")]();
                        value[_0x1389("0x5d")](data);
                        value.collapse(false);
                        /** @type {(Selection|null)} */
                        var settingHandler = window.getSelection();
                        settingHandler[_0x1389("0x5e")]();
                        settingHandler[_0x1389("0x5f")](value);
                    } else {
                        if (document[_0x1389("0x30")][_0x1389("0x60")]) {
                            var d3 = document[_0x1389("0x30")][_0x1389("0x60")]();
                            d3[_0x1389("0x61")](data);
                            d3[_0x1389("0x62")](false);
                            d3.select();
                        }
                    }
                }(qual2.get(0));
            });
        });
    }
}), utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    var $color = $(".navbar-theme");
    if ($color[_0x1389("0x5")]) {
        var t = utils[_0x1389("0x3f")][_0x1389("0x40")]();
        utils.$window[_0x1389("0x64")](function () {
            /** @type {number} */
            var x = utils.$window[_0x1389("0x41")]() / t * 2;
            if (1 <= x) {
                /** @type {number} */
                x = 1;
            }
            $color.css({
                "background-color": _0x1389("0x65") + x + ")"
            });
        });
        var id = $color.attr(_0x1389("0x66"))[_0x1389("0x11")](" ")[_0x1389("0x67")](function (boardNameToTest) {
            return 0 <= boardNameToTest.indexOf(_0x1389("0x68"));
        })[0][_0x1389("0x11")](_0x1389("0x68"))[1];
        utils[_0x1389("0x3f")].resize(function () {
            return utils[_0x1389("0x3f")][_0x1389("0x42")]() > utils[_0x1389("0x44")][id] ? $color[_0x1389("0x69")](_0x1389("0x6a")) : $color.find(".navbar-toggler")[_0x1389("0x6b")](_0x1389("0x6c")) ? null : $color[_0x1389("0x6d")](_0x1389("0x6a"));
        });
        $color.on(_0x1389("0x6e"), function (event) {
            $(event.currentTarget)[_0x1389("0x6f")](_0x1389("0x6a"));
        });
    }
}), utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    if (window.is.android()) {
        $(_0x1389("0x70"))[_0x1389("0x69")](_0x1389("0x71"))[_0x1389("0x72")](_0x1389("0x42"), _0x1389("0x73"));
    }
}), utils[_0x1389("0x63")].ready(function () {
    /**
     * @param {!Object} stat
     * @return {?}
     */
    function next(stat) {
        var e = stat.find(".form-validation");
        /** @type {boolean} */
        var t = false;
        return e[_0x1389("0x43")](function (canCreateDiscussions, e) {
            return t = $(e)[_0x1389("0x74")]();
        }), t;
    }
    var permissions = _0x1389("0x75");
    /** @type {string} */
    var elsa = ".tab-pane";
    var marks = _0x1389("0x76");
    /** @type {string} */
    var customPlayerControlsButton = ".nav-link";
    /** @type {string} */
    var selector = ".wizard-lottie";
    var hover = _0x1389("0x77");
    var bWizardTabClass = _0x1389("0x78");
    var event = _0x1389("0x57");
    var u = _0x1389("0x79");
    var $realtime = $("[data-wizard]");
    if ($realtime[_0x1389("0x5")]) {
        $realtime[_0x1389("0x43")](function (canCreateDiscussions, tr) {
            var mark = $(tr);
            var parent = mark[_0x1389("0x59")](u);
            var data = $(parent);
            var groupPermissionsRef = data.find(permissions);
            var $realtime = $(mark.data("error-modal"));
            var set = $(tr)[_0x1389("0x7a")](selector);
            var magnifier = $[_0x1389("0x58")]({
                container: tr.querySelector(selector),
                renderer: _0x1389("0x7b"),
                loop: true,
                autoplay: false,
                name: _0x1389("0x7c")
            }, set[_0x1389("0x59")](event));
            var $magnifier = window[_0x1389("0x7d")][_0x1389("0x7e")](magnifier);
            mark[_0x1389("0x7f")]({
                tabClass: bWizardTabClass,
                onNext: function create(tileY, res, pageCount) {
                    return next(mark[_0x1389("0x7a")](elsa).eq(pageCount - 1));
                },
                onTabClick: function error(fn, errorCode, type, storage) {
                    if (_0x1389("0x77") === mark[_0x1389("0x7a")](_0x1389("0x80") + (storage + 1) + _0x1389("0x81"))[_0x1389("0x59")]("wizard-state")) {
                        return $realtime[_0x1389("0x82")](_0x1389("0x83")), false;
                    }
                    if (storage <= type) {
                        return true;
                    }
                    /** @type {boolean} */
                    var axis = true;
                    return mark[_0x1389("0x7a")](elsa)[_0x1389("0x43")](function (data, a) {
                        return data < storage && (mark[_0x1389("0x7f")](_0x1389("0x83"), data), axis = next($(a))), axis;
                    }), axis;
                },
                onTabShow: function init(_wid_attr, data, type) {
                    /** @type {number} */
                    var ssh_rsa = data[_0x1389("0x7a")]("li")[_0x1389("0x5")] - 1;
                    if (0 === type) {
                        groupPermissionsRef[_0x1389("0x84")]();
                    } else {
                        groupPermissionsRef[_0x1389("0x83")]();
                    }
                    if (type === ssh_rsa) {
                        setTimeout(function () {
                            return $magnifier[_0x1389("0x85")]();
                        }, 300);
                    }
                    mark[_0x1389("0x7a")](customPlayerControlsButton).removeClass(hover);
                    mark.find(marks)[_0x1389("0x43")](function (canCreateDiscussions, e) {
                        var button = $(e)[_0x1389("0x7a")](customPlayerControlsButton);
                        return type !== ssh_rsa || button[_0x1389("0x6b")]("active") || button[_0x1389("0x33")](_0x1389("0x86"), "done"), button[_0x1389("0x6b")]("active") ? (type === ssh_rsa && (button[_0x1389("0x6d")](hover), data[_0x1389("0x84")]()), false) : (button.addClass(hover), true);
                    });
                }
            });
        });
    }
}), window.utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    var thread_rows = $(_0x1389("0x87"));
    if (thread_rows[_0x1389("0x5")]) {
        var l = _0x1389("0x88");
        var projectVarList = _0x1389("0x89");
        var b = _0x1389("0x8a");
        var node = _0x1389("0x8b");
        var s = _0x1389("0x8c");
        var p = _0x1389("0x8d");
        var key = _0x1389("0x16");
        var style = _0x1389("0x8e");
        thread_rows.each(function (canCreateDiscussions, e) {
            var t = $(e);
            var a = $(t.data(s));
            var loader = $(t[_0x1389("0x59")](p));
            var o = $(t[_0x1389("0x59")](node))[_0x1389("0x7a")](projectVarList);
            t.on(l, function () {
                if (t.attr(style) === style) {
                    a[_0x1389("0x6d")](b);
                    loader[_0x1389("0x69")](b);
                    t[_0x1389("0x1a")](style, false)[_0x1389("0x33")](style, false);
                    t[_0x1389("0x1a")](key, false)[_0x1389("0x33")](key, false);
                    o.prop(key, false).attr(key, false);
                } else {
                    a.toggleClass(b);
                    loader[_0x1389("0x6f")](b);
                    if (t.attr(key)) {
                        t[_0x1389("0x1a")](key, false)[_0x1389("0x33")](key, false);
                    } else {
                        t[_0x1389("0x1a")](key, true)[_0x1389("0x33")](key, true);
                    }
                    o[_0x1389("0x43")](function (canCreateDiscussions, t) {
                        var el = $(t);
                        if (el.attr(key)) {
                            el[_0x1389("0x1a")](key, false)[_0x1389("0x33")](key, false);
                        } else {
                            el[_0x1389("0x1a")](key, true)[_0x1389("0x33")](key, true);
                        }
                    });
                }
            });
            o.on(l, function (arrayOfSelects) {
                var result = $(arrayOfSelects[_0x1389("0x8f")]);
                if (result[_0x1389("0x33")](key)) {
                    result.prop(key, false)[_0x1389("0x33")](key, false);
                } else {
                    result.prop(key, true)[_0x1389("0x33")](key, true);
                }
                o.each(function (Parent, e) {
                    return $(e)[_0x1389("0x33")](key) ? (t[_0x1389("0x1a")](style, true).attr(style, style), a[_0x1389("0x69")](b), loader[_0x1389("0x6d")](b), false) : (Parent === t[_0x1389("0x5")] && (t[_0x1389("0x1a")](style, false)[_0x1389("0x33")](style, false), t[_0x1389("0x1a")](key, false).attr(key, false), a[_0x1389("0x6d")](b), loader.removeClass(b)), true);
                });
            });
        });
    }
}), window[_0x1389("0x54")][_0x1389("0x63")].ready(function () {
    /**
     * @param {(Node|Window)} key
     * @param {?} evt
     * @return {?}
     */
    function callback(key, evt) {
        var elTarget = key[_0x1389("0x90")]("2d");
        return new(window[_0x1389("0x91")])(elTarget, evt);
    }
    var res = window[_0x1389("0x54")];
    /** @type {!Array} */
    var navLinksArr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7];
    /** @type {!Array} */
    var dates = [_0x1389("0x92"), _0x1389("0x93"), "11:00 AM", _0x1389("0x94"), _0x1389("0x95"), _0x1389("0x96"), _0x1389("0x97"), _0x1389("0x98"), _0x1389("0x99"), _0x1389("0x9a"), _0x1389("0x9b"), _0x1389("0x9c")];
    /** @type {(Element|null)} */
    var index = document.getElementById(_0x1389("0x9d"));
    if (index) {
        var value = callback(index, {
            type: _0x1389("0x9e"),
            data: {
                labels: dates[_0x1389("0x4b")](function (canCreateDiscussions) {
                    return canCreateDiscussions[_0x1389("0x45")](0, canCreateDiscussions[_0x1389("0x5")] - 3);
                }),
                datasets: [{
                    borderWidth: 2,
                    data: navLinksArr.map(function (canCreateDiscussions) {
                        return (3.14 * canCreateDiscussions)[_0x1389("0x9f")](2);
                    }),
                    borderColor: res.settings.chart[_0x1389("0x52")],
                    backgroundColor: function () {
                        var reglInput = index[_0x1389("0x90")]("2d");
                        if (storage[_0x1389("0x26")]) {
                            var e = reglInput[_0x1389("0xa0")](0, 0, 0, reglInput.canvas[_0x1389("0x40")]);
                            return e[_0x1389("0xa1")](0, res[_0x1389("0x4c")](res[_0x1389("0x49")][_0x1389("0x53")], .5)), e[_0x1389("0xa1")](1, "transparent"), e;
                        }
                        var waveformGradient = reglInput[_0x1389("0xa0")](0, 0, 0, 250);
                        return waveformGradient[_0x1389("0xa1")](0, "rgba(255, 255, 255, 0.3)"), waveformGradient.addColorStop(1, _0x1389("0xa2")), waveformGradient;
                    }()
                }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    mode: "x-axis",
                    xPadding: 20,
                    yPadding: 10,
                    displayColors: false,
                    callbacks: {
                        label: function enable_alert(row) {
                            return dates[row[_0x1389("0xa3")]] + _0x1389("0xa4") + row[_0x1389("0xa5")] + _0x1389("0xa6");
                        },
                        title: function leadingImageNode() {
                            return null;
                        }
                    }
                },
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            show: true,
                            labelString: _0x1389("0xa7")
                        },
                        ticks: {
                            fontColor: res[_0x1389("0x4c")](_0x1389("0x1b"), .7),
                            fontStyle: 600
                        },
                        gridLines: {
                            color: res[_0x1389("0x4c")](_0x1389("0x1b"), .1),
                            zeroLineColor: res[_0x1389("0x4c")](_0x1389("0x1b"), .1),
                            lineWidth: 1
                        }
                    }],
                    yAxes: [{
                        display: false
                    }]
                }
            }
        });
        $(_0x1389("0xa8")).on("change", function (canCreateDiscussions) {
            var data = {
                all: [4, 1, 6, 2, 7, 12, 4, 6, 5, 4, 5, 10][_0x1389("0x4b")](function (canCreateDiscussions) {
                    return (3.14 * canCreateDiscussions)[_0x1389("0x9f")](2);
                }),
                successful: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8][_0x1389("0x4b")](function (canCreateDiscussions) {
                    return (3.14 * canCreateDiscussions)[_0x1389("0x9f")](2);
                }),
                failed: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2].map(function (requiredDetectionProbability) {
                    return (3.14 * requiredDetectionProbability).toFixed(2);
                })
            };
            value[_0x1389("0x59")][_0x1389("0xa9")][0][_0x1389("0x59")] = data[canCreateDiscussions[_0x1389("0x8f")][_0x1389("0xf")]];
            value[_0x1389("0xaa")]();
        });
    }
    var bg = document[_0x1389("0xab")](_0x1389("0xac"));
    if (bg) {
        callback(bg, {
            type: _0x1389("0xad"),
            data: {
                labels: dates[_0x1389("0xae")](0, 2),
                datasets: [{
                    label: _0x1389("0xaf"),
                    backgroundColor: [res.rgbaColor(res[_0x1389("0x49")].info), res[_0x1389("0x4c")](res[_0x1389("0x49")][_0x1389("0xb0")])],
                    borderColor: [res[_0x1389("0x4a")](res[_0x1389("0x49")][_0x1389("0xb1")]), res[_0x1389("0x4a")](res[_0x1389("0x49")][_0x1389("0xb0")])],
                    borderWidth: 2,
                    data: [6, 10]
                }, {
                    label: _0x1389("0xb2"),
                    backgroundColor: [res.rgbaColor(res.colors[_0x1389("0xb3")]), res.rgbaColor(res[_0x1389("0x49")][_0x1389("0xb4")])],
                    borderColor: [res.rgbColor(res[_0x1389("0x49")].success), res.rgbColor(res[_0x1389("0x49")][_0x1389("0xb4")])],
                    borderWidth: 2,
                    data: [3, 7]
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
    var r = document[_0x1389("0xab")]("chart-radar");
    if (r) {
        callback(r, {
            type: _0x1389("0xb5"),
            data: {
                labels: dates,
                datasets: [{
                    label: _0x1389("0xaf"),
                    backgroundColor: res.rgbaColor(res[_0x1389("0x49")][_0x1389("0xb0")]),
                    borderColor: res.rgbColor(res[_0x1389("0x49")][_0x1389("0xb0")]),
                    borderWidth: 2,
                    data: navLinksArr[_0x1389("0xae")](0, 12),
                    fill: 1
                }, {
                    label: _0x1389("0xb2"),
                    backgroundColor: res[_0x1389("0x4c")](res[_0x1389("0x49")][_0x1389("0xb4")]),
                    borderColor: res[_0x1389("0x4a")](res[_0x1389("0x49")][_0x1389("0xb4")]),
                    borderWidth: 2,
                    data: navLinksArr[_0x1389("0xae")](12, 24),
                    fill: 1
                }]
            },
            options: {
                maintainAspectRatio: true,
                spanGaps: false,
                elements: {
                    line: {
                        tension: 1e-6
                    }
                }
            }
        });
    }
    /** @type {(Element|null)} */
    var p = document.getElementById(_0x1389("0xb6"));
    if (p) {
        callback(p, {
            type: _0x1389("0xb7"),
            data: {
                labels: dates[_0x1389("0xae")](0, 3),
                datasets: [{
                    backgroundColor: res[_0x1389("0xb8")](),
                    borderColor: res[_0x1389("0xb9")](),
                    data: navLinksArr[_0x1389("0xae")](0, 3)
                }]
            },
            options: {
                responsive: true
            }
        });
    }
    /** @type {(Element|null)} */
    var c = document.getElementById(_0x1389("0xba"));
    if (c) {
        callback(c, {
            type: _0x1389("0xbb"),
            data: {
                labels: dates[_0x1389("0xae")](0, 3),
                datasets: [{
                    backgroundColor: res[_0x1389("0xb9")](),
                    borderColor: res[_0x1389("0xb9")](),
                    data: navLinksArr[_0x1389("0xae")](0, 3)
                }]
            },
            options: {
                responsive: true
            }
        });
    }
    var s = document[_0x1389("0xab")](_0x1389("0xbc"));
    if (s) {
        callback(s, {
            type: _0x1389("0xbd"),
            data: {
                labels: dates[_0x1389("0xae")](0, 3),
                datasets: [{
                    backgroundColor: res.rgbaColors(),
                    borderColor: res.rgbaColors(),
                    data: navLinksArr[_0x1389("0xae")](0, 3)
                }]
            },
            options: {
                responsive: true
            }
        });
    }
    /** @type {(Element|null)} */
    var trigger = document.getElementById(_0x1389("0xbe"));
    if (trigger) {
        callback(trigger, {
            type: _0x1389("0xbf"),
            data: {
                datasets: [{
                    label: [_0x1389("0xc0")],
                    data: [{
                        x: -10,
                        y: -20,
                        r: 20
                    }, {
                        x: 100,
                        y: 0,
                        r: 10
                    }, {
                        x: 60,
                        y: 30,
                        r: 20
                    }, {
                        x: 40,
                        y: 60,
                        r: 25
                    }, {
                        x: 80,
                        y: 80,
                        r: 30
                    }, {
                        x: 20,
                        y: 30,
                        r: 25
                    }, {
                        x: 0,
                        y: 100,
                        r: 5
                    }],
                    backgroundColor: _0x1389("0xc1")
                }]
            }
        });
    }
    var credential_list = document[_0x1389("0xab")](_0x1389("0xc2"));
    if (credential_list) {
        callback(credential_list, {
            type: _0x1389("0x9e"),
            data: {
                labels: dates,
                datasets: [{
                    borderWidth: 2,
                    data: navLinksArr[_0x1389("0xae")](2, 14)[_0x1389("0x4b")](function (canCreateDiscussions) {
                        return (3.14 * canCreateDiscussions)[_0x1389("0x9f")](2);
                    }),
                    borderColor: res[_0x1389("0x4c")](res.colors[_0x1389("0x53")], .4),
                    backgroundColor: res.rgbaColor(res[_0x1389("0x49")][_0x1389("0x53")])
                }, {
                    borderWidth: 2,
                    borderColor: _0x1389("0x1b"),
                    data: navLinksArr[_0x1389("0xae")](3, 15).map(function (requiredDetectionProbability) {
                        return (3.14 * requiredDetectionProbability).toFixed(2);
                    }),
                    backgroundColor: res[_0x1389("0x4c")](res[_0x1389("0x49")][_0x1389("0x53")])
                }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    mode: _0x1389("0xc3"),
                    xPadding: 20,
                    yPadding: 10,
                    displayColors: false,
                    callbacks: {
                        label: function enable_alert(row) {
                            return dates[row[_0x1389("0xa3")]] + _0x1389("0xa4") + row[_0x1389("0xa5")] + _0x1389("0xa6");
                        },
                        title: function leadingImageNode() {
                            return null;
                        }
                    }
                },
                hover: {
                    mode: _0x1389("0xc4")
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            show: true,
                            labelString: _0x1389("0xa7")
                        },
                        ticks: {
                            fontColor: res.rgbaColor(_0x1389("0x25"), .7),
                            fontStyle: 600
                        },
                        gridLines: {
                            color: res[_0x1389("0x4c")](_0x1389("0x25"), .1),
                            zeroLineColor: res.rgbaColor(_0x1389("0x25"), .1),
                            lineWidth: 1
                        }
                    }],
                    yAxes: [{
                        display: false
                    }]
                }
            }
        });
    }
    var input = document[_0x1389("0xab")](_0x1389("0xc5"));
    if (input) {
        var out = callback(input, {
            type: "bar",
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
                datasets: [{
                    label: _0x1389("0xc6"),
                    backgroundColor: res.rgbaColor(_0x1389("0x1b"), .3),
                    data: [183, 163, 176, 172, 166, 161, 164, 159, 172, 173, 184, 163, 99, 173, 183, 167, 160, 183, 163, 176, 172, 166, 173, 188, 175]
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        display: false,
                        stacked: true
                    }],
                    xAxes: [{
                        stacked: false,
                        ticks: {
                            display: false
                        },
                        barPercentage: .9,
                        categoryPercentage: 1,
                        gridLines: {
                            color: res.rgbaColor(_0x1389("0x1b"), .1),
                            display: false
                        }
                    }]
                }
            }
        });
        var $T = $(_0x1389("0xc7"));
        setInterval(function () {
            var val = Math[_0x1389("0xc8")](60 * Math[_0x1389("0xc9")]() + 60);
            out.data[_0x1389("0xa9")].forEach(function (fiber) {
                fiber.data.shift();
            });
            out[_0x1389("0xaa")]();
            setTimeout(function () {
                out[_0x1389("0x59")][_0x1389("0xa9")][_0x1389("0x6")](function (simpleselect) {
                    simpleselect.data[_0x1389("0x3")](val);
                });
                out[_0x1389("0xaa")]();
                $T[_0x1389("0xca")](val);
            }, 500);
        }, 2e3);
    }
}), window[_0x1389("0x54")].$document[_0x1389("0x55")](function () {
    /**
     * @param {!Object} data
     * @param {?} t
     * @return {undefined}
     */
    function create(data, t) {
        /** @type {number} */
        var height = data.height() - t;
        var paddingAndBorders = $(o)[_0x1389("0xcb")]();
        data.find(key)[_0x1389("0x72")]({
            height: height - paddingAndBorders
        });
    }
    /**
     * @param {!Node} item
     * @return {undefined}
     */
    function fn(item) {
        if (item) {
            item.scrollTop = item[_0x1389("0xcc")];
        }
    }
    /** @type {string} */
    var CLICK = "click";
    var iframe = _0x1389("0xcd");
    var groupNamePrefix = _0x1389("0xce");
    var dupeNameCount = _0x1389("0xcf");
    /** @type {string} */
    var child = ".chat-contact";
    var selector = _0x1389("0xd0");
    var o = _0x1389("0xd1");
    var key = _0x1389("0xd2");
    var allowedValues = _0x1389("0xd3");
    var target = _0x1389("0xd4");
    var m = _0x1389("0xd5");
    var lineNumber = _0x1389("0xd6");
    var jqNav = _0x1389("0xd7");
    var reconnectingCallback = _0x1389("0xd8");
    var tools_id = _0x1389("0xd9");
    var data = _0x1389("0xda");
    var runnable = _0x1389("0xdb");
    var Event = _0x1389("0x8f");
    var rAttName = _0x1389("0xdc");
    var pulseElements = $(_0x1389("0xdd"));
    var dp = $(child);
    var resultsPlaceholder = $(target);
    var $node = $(m + "," + lineNumber);
    var markStart = $(m);
    var eH = $(jqNav)[_0x1389("0xcb")]();
    var desc = $(".card-chat-content");
    var $ob = $(selector);
    var result = document[_0x1389("0xde")](selector);
    setTimeout(function () {
        fn(result);
    }, 700);
    window.utils[_0x1389("0x63")].on(CLICK, child, function (arrayOfSelects) {
        var wrapper = $(arrayOfSelects[_0x1389("0xdf")]);
        if (window[_0x1389("0x54")].$window[_0x1389("0x42")]() < 768) {
            pulseElements.css(_0x1389("0x3a"), "-100%");
        }
        if (wrapper[_0x1389("0x6b")](data)) {
            wrapper[_0x1389("0x69")](data);
        }
    });
    dp.on(iframe, function (event) {
        var ev = $(event.currentTarget)[_0x1389("0x59")](Event);
        if (resultsPlaceholder[_0x1389("0x5")]) {
            resultsPlaceholder[0][_0x1389("0x5a")].setText("");
        }
        var date = $(jqNav).outerHeight();
        create(desc, date);
        $node.removeAttr(rAttName);
        markStart[_0x1389("0x69")](runnable);
        fn(document[_0x1389("0xde")](ev + " " + selector));
    });
    if (resultsPlaceholder[_0x1389("0x5")]) {
        resultsPlaceholder[0][_0x1389("0x5a")].on(groupNamePrefix + " " + dupeNameCount, function (tagsAll) {
            var succeedChain = tagsAll[_0x1389("0xca")]()[_0x1389("0xe0")]()[_0x1389("0x5")];
            var t = tagsAll[0];
            var val = t[_0x1389("0xe1")];
            var v = t[_0x1389("0xe2")];
            var h = tagsAll[_0x1389("0xcb")]();
            var failChain = tagsAll[_0x1389("0x7a")](_0x1389("0xe3")).length;
            if (succeedChain || failChain ? markStart[_0x1389("0x6d")](runnable) : markStart[_0x1389("0x69")](runnable), h !== eH) {
                create(desc, h);
                var eVideoId = desc.find(allowedValues)[_0x1389("0x33")]("id");
                fn(document[_0x1389("0xde")]("#" + eVideoId + " " + selector));
            }
            $node[_0x1389("0x72")]({
                marginRight: val === v ? 0 : "1rem"
            });
            eH = h;
        });
    }
    window[_0x1389("0x54")].$document.on(CLICK, reconnectingCallback, function (arrayOfSelects) {
        var filters = $(arrayOfSelects[_0x1389("0xdf")]).data("index");
        $(tools_id + "[data-index='" + filters + "']").toggleClass("show");
    });
    window[_0x1389("0x54")][_0x1389("0x63")].on(CLICK, ".contacts-list-show", function () {
        return pulseElements[_0x1389("0x72")](_0x1389("0x3a"), 0);
    });
    window[_0x1389("0x54")].$window.on("resize", function () {
        if ($ob[_0x1389("0x5")]) {
            var date = $(jqNav)[_0x1389("0xcb")]();
            create(desc, date);
            fn(document[_0x1389("0xde")](key));
        }
    });
}), utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    $(_0x1389("0xe4")).on(_0x1389("0xe5"), function () {
        $(".invitation-link")[_0x1389("0x56")]()[_0x1389("0xe6")]();
    });
}), utils.$document.ready(function () {
    var $realtime = $(_0x1389("0xe7"));
    if ($realtime[_0x1389("0x5")]) {
        $realtime[_0x1389("0x43")](function (canCreateDiscussions, url) {
            /**
             * @return {?}
             */
            function closeNewFeatureModal() {
                return utils[_0x1389("0xe8")](url) && !IS_DEBUG && (IS_DEBUG || ($({
                    countNum: 0
                }).animate({
                    countNum: options[_0x1389("0xe9")]
                }, {
                    duration: options[_0x1389("0xea")] || 1e3,
                    easing: "linear",
                    step: function ScopeChain() {
                        $realtime[_0x1389("0xca")]((options.prefix ? options[_0x1389("0xeb")] : "") + Math[_0x1389("0xc8")](this[_0x1389("0xec")]));
                    },
                    complete: function randomChars() {
                        switch (options.format) {
                            case _0x1389("0xed"):
                                $realtime[_0x1389("0xca")]((options[_0x1389("0xeb")] ? options[_0x1389("0xeb")] : "") + this[_0x1389("0xec")][_0x1389("0xee")]()[_0x1389("0x46")](/\B(?=(\d{3})+(?!\d))/g, ","));
                                break;
                            case _0x1389("0xef"):
                                $realtime[_0x1389("0xca")]((options[_0x1389("0xeb")] ? options[_0x1389("0xeb")] : "") + this[_0x1389("0xec")][_0x1389("0xee")]()[_0x1389("0x46")](/\B(?=(\d{3})+(?!\d))/g, " "));
                                break;
                            case "alphanumeric":
                                $realtime[_0x1389("0xca")]((options.prefix ? options.prefix : "") + ((t = this[_0x1389("0xec")]) < 1e6 ? (t / 1e3)[_0x1389("0x9f")](2) + "k" : t < 1e9 ? (t / 1e6)[_0x1389("0x9f")](2) + "m" : t < 1e12 ? (t / 1e9)[_0x1389("0x9f")](2) + "b" : (t / 1e12)[_0x1389("0x9f")](2) + "t"));
                                break;
                            default:
                                $realtime[_0x1389("0xca")]((options[_0x1389("0xeb")] ? options[_0x1389("0xeb")] : "") + this[_0x1389("0xec")]);
                        }
                        var t;
                    }
                }), IS_DEBUG = true)), IS_DEBUG;
            }
            var $realtime = $(url);
            var options = $realtime[_0x1389("0x59")](_0x1389("0xf0"));
            /** @type {boolean} */
            var IS_DEBUG = false;
            closeNewFeatureModal();
            utils[_0x1389("0x3f")][_0x1389("0x64")](function () {
                closeNewFeatureModal();
            });
        });
    }
}), window.utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    /**
     * @param {?} option
     * @return {undefined}
     */
    function activate(option) {
        option[_0x1389("0x7a")](_0x1389("0xf1"))[_0x1389("0x6d")]("pagination-sm");
    }
    var $realtime = $(_0x1389("0xf2"));
    if ($realtime[_0x1389("0x5")]) {
        $realtime[_0x1389("0x43")](function (canCreateDiscussions, elem) {
            var self = $(elem);
            var dataPlus = $[_0x1389("0x58")]({
                responsive: true,
                dom: _0x1389("0xf3")
            }, self[_0x1389("0x59")]("options"));
            self[_0x1389("0xf4")](dataPlus);
            var $option = self[_0x1389("0xf5")](_0x1389("0xf6"));
            activate($option);
            self.on(_0x1389("0xf7"), function () {
                return activate($option);
            });
        });
    }
}), utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    var $realtime = $(_0x1389("0xf8"));
    var propertyValue = _0x1389("0xf9");
    var index = _0x1389("0xfa");
    if ($realtime[_0x1389("0x5")]) {
        $realtime[_0x1389("0x43")](function (canCreateDiscussions, e) {
            var match;
            var message = $(e);
            var date = message.data(index);
            if (_typeof(message[_0x1389("0x59")](propertyValue)) !== _typeof(void 0)) {
                match = message[_0x1389("0x59")](propertyValue);
            }
            message.countdown(date, function (canCreateDiscussions) {
                if (canCreateDiscussions[_0x1389("0xfb")]) {
                    message[_0x1389("0xca")](match);
                } else {
                    message[_0x1389("0xca")](canCreateDiscussions[_0x1389("0xfc")](_0x1389("0xfd")));
                }
            });
        });
    }
}), utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    if (window.is[_0x1389("0xfe")]()) {
        utils[_0x1389("0x32")][_0x1389("0x6d")]("opera");
    }
    if (window.is.mobile()) {
        utils[_0x1389("0x32")][_0x1389("0x6d")](_0x1389("0xff"));
    }
    if (window.is[_0x1389("0x100")]()) {
        utils.$html[_0x1389("0x6d")](_0x1389("0x100"));
    }
    if (window.is[_0x1389("0x101")]()) {
        utils.$html[_0x1389("0x6d")](_0x1389("0x101"));
    }
    if (window.is[_0x1389("0x102")]()) {
        utils[_0x1389("0x32")][_0x1389("0x6d")]("ios");
    }
    if (window.is.ie()) {
        utils[_0x1389("0x32")][_0x1389("0x6d")]("ie");
    }
    if (window.is[_0x1389("0x103")]()) {
        utils[_0x1389("0x32")][_0x1389("0x6d")](_0x1389("0x103"));
    }
    if (window.is.chrome()) {
        utils[_0x1389("0x32")].addClass(_0x1389("0x104"));
    }
    if (utils[_0x1389("0x105")][_0x1389("0x106")](/puppeteer/i)) {
        utils.$html[_0x1389("0x6d")](_0x1389("0x107"));
    }
    if (window.is[_0x1389("0x108")]()) {
        utils.$html[_0x1389("0x6d")](_0x1389("0x109"));
    }
    if (window.is[_0x1389("0x10a")]()) {
        utils[_0x1389("0x32")][_0x1389("0x6d")](_0x1389("0x10a"));
    }
}), utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    var $this = $("#components-nav");
    if ($this[_0x1389("0x5")]) {
        /** @type {string} */
        var link = window.location.href;
        var absRootPath = (link = link[_0x1389("0x11")]("#")[0])[_0x1389("0x11")]("/");
        var value = absRootPath[absRootPath.length - 2] + "/" + absRootPath[_0x1389("0x10b")]();
        var args = $this[_0x1389("0x10c")]("li").children("a");
        /** @type {number} */
        var i = 0;
        var arg_count = args.length;
        for (; i < arg_count; i = i + 1) {
            var absRootPath = args[i][_0x1389("0x10d")][_0x1389("0x11")]("/");
            if (absRootPath[absRootPath.length - 2] + "/" + absRootPath[_0x1389("0x10b")]() == value) {
                var $allPanels = $(args[i]);
                $allPanels.removeClass(_0x1389("0x10e"));
                $allPanels.addClass(_0x1389("0x10f"));
                break;
            }
        }
    }
}), window.utils[_0x1389("0x63")].ready(function () {
    if (window.is.ios()) {
        var containerEvent = _0x1389("0x110");
        var $closingAreaRight = _0x1389("0x111");
        $(_0x1389("0x112")).on(containerEvent, function (jEvent) {
            var self = $(this);
            var rowWithMoreColumns = $(jEvent.target)[_0x1389("0x7a")](".dropdown-menu");
            var mouseY = self[_0x1389("0x3c")]()[_0x1389("0x39")] + self[_0x1389("0x40")]();
            var workspaceTop = rowWithMoreColumns.offset()[_0x1389("0x39")] + rowWithMoreColumns[_0x1389("0xcb")](true);
            if (self[0][_0x1389("0x113")] > self[_0x1389("0x114")]()) {
                if (mouseY < workspaceTop + 20) {
                    self[_0x1389("0x72")]("padding-bottom", workspaceTop + 20 - mouseY);
                }
            } else {
                self[_0x1389("0x72")]("overflow", _0x1389("0x115"));
            }
        }).on($closingAreaRight, function (event) {
            $(event.currentTarget)[_0x1389("0x72")]({
                "padding-bottom": "",
                overflow: ""
            });
        });
    }
}), window[_0x1389("0x116")] && (window[_0x1389("0x116")][_0x1389("0x117")] = false), window.utils.$document[_0x1389("0x55")](function () {
    var input = _0x1389("0x118");
    var prop = _0x1389("0x119");
    var type = _0x1389("0x11a");
    var color = _0x1389("0x11b");
    var u = _0x1389("0x57");
    var d = _0x1389("0x11c");
    var $closingAreaRight = _0x1389("0x11d");
    var $realtime = $(_0x1389("0x11e"));
    if ($realtime[_0x1389("0x5")]) {
        $realtime[_0x1389("0x43")](function (canCreateDiscussions, params) {
            var div = params;
            var mark = $(div);
            var parent = mark[_0x1389("0x59")](u);
            var l = (parent = parent || {})[_0x1389("0x59")] ? parent[_0x1389("0x59")] : {};
            var filename = $.extend({
                url: _0x1389("0x11f"),
                addRemoveLinks: false,
                previewsContainer: div[_0x1389("0xde")](input),
                previewTemplate: div[_0x1389("0xde")](input)[_0x1389("0x120")],
                thumbnailWidth: null,
                thumbnailHeight: null,
                init: function init() {
                    var a = this;
                    if (l.length) {
                        $.each(l, function (canCreateDiscussions, row) {
                            var picture = {
                                name: row[_0x1389("0x121")],
                                size: row[_0x1389("0x122")]
                            };
                            a.options[_0x1389("0x11c")].call(a, picture);
                            a.options[_0x1389("0x123")].call(a, picture, row[_0x1389("0x124")] + "/" + row[_0x1389("0x121")]);
                        });
                    }
                    a.on(d, function () {
                        if (_0x1389("0x125") in parent) {
                            if (1 === parent[_0x1389("0x125")] && 1 < mark[_0x1389("0x7a")](prop)[_0x1389("0x5")]) {
                                mark[_0x1389("0x7a")](prop)[_0x1389("0x126")]().remove();
                            }
                            if (1 === parent[_0x1389("0x125")] && 1 < this.files[_0x1389("0x5")]) {
                                this[_0x1389("0x127")](this[_0x1389("0x128")][0]);
                            }
                        }
                    });
                }
            }, parent);
            /** @type {string} */
            div[_0x1389("0xde")](input).innerHTML = "";
            var app = new(window[_0x1389("0x116")])(params, filename);
            app.on(d, function () {
                mark.find(prop).removeClass(color);
                mark.addClass(type);
            });
            app.on($closingAreaRight, function () {
                mark[_0x1389("0x7a")](prop)[_0x1389("0x69")]("dz-processing");
                mark.addClass(color);
            });
        });
    }
});
/**
 * @param {!Object} uvx1
 * @param {?} uvy1
 * @param {?} a
 * @param {?} n
 * @param {?} c
 * @return {?}
 */
var getPosition = function _spriteWebGLAddQuad(uvx1, uvy1, a, n, c) {
    return {
        top: uvx1[1] - c[_0x1389("0x129")][1] - 10,
        left: uvx1[0] - c[_0x1389("0x129")][0] / 2
    };
};
/**
 * @return {undefined}
 */
function initMap() {
    var $realtime = $(_0x1389("0x12a"));
    var isDark = storage.isDark;
    if ($realtime[_0x1389("0x5")]) {
        var model = {
            Default: [{
                featureType: _0x1389("0x12b"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: _0x1389("0x12d")
                }, {
                    lightness: 17
                }]
            }, {
                featureType: _0x1389("0x12e"),
                elementType: "geometry",
                stylers: [{
                    color: _0x1389("0x12f")
                }, {
                    lightness: 20
                }]
            }, {
                featureType: _0x1389("0x130"),
                elementType: _0x1389("0x131"),
                stylers: [{
                    color: _0x1389("0x132")
                }, {
                    lightness: 17
                }]
            }, {
                featureType: _0x1389("0x130"),
                elementType: _0x1389("0x133"),
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 29
                }, {
                    weight: .2
                }]
            }, {
                featureType: _0x1389("0x134"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: _0x1389("0x132")
                }, {
                    lightness: 18
                }]
            }, {
                featureType: _0x1389("0x135"),
                elementType: "geometry",
                stylers: [{
                    color: "#ffffff"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: _0x1389("0x136"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: _0x1389("0x12f")
                }, {
                    lightness: 21
                }]
            }, {
                featureType: _0x1389("0x137"),
                elementType: "geometry",
                stylers: [{
                    color: _0x1389("0x138")
                }, {
                    lightness: 21
                }]
            }, {
                elementType: _0x1389("0x139"),
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#ffffff"
                }, {
                    lightness: 16
                }]
            }, {
                elementType: _0x1389("0x13a"),
                stylers: [{
                    saturation: 36
                }, {
                    color: _0x1389("0x13b")
                }, {
                    lightness: 40
                }]
            }, {
                elementType: _0x1389("0x13c"),
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: _0x1389("0x13d"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: _0x1389("0x13e")
                }, {
                    lightness: 19
                }]
            }, {
                featureType: _0x1389("0x13f"),
                elementType: _0x1389("0x131"),
                stylers: [{
                    color: _0x1389("0x140")
                }, {
                    lightness: 20
                }]
            }, {
                featureType: _0x1389("0x13f"),
                elementType: _0x1389("0x133"),
                stylers: [{
                    color: _0x1389("0x140")
                }, {
                    lightness: 17
                }, {
                    weight: 1.2
                }]
            }],
            Gray: [{
                featureType: _0x1389("0x141"),
                elementType: _0x1389("0x13a"),
                stylers: [{
                    saturation: 36
                }, {
                    color: "#000000"
                }, {
                    lightness: 40
                }]
            }, {
                featureType: _0x1389("0x141"),
                elementType: _0x1389("0x139"),
                stylers: [{
                    visibility: "on"
                }, {
                    color: _0x1389("0x142")
                }, {
                    lightness: 16
                }]
            }, {
                featureType: _0x1389("0x141"),
                elementType: _0x1389("0x13c"),
                stylers: [{
                    visibility: _0x1389("0x143")
                }]
            }, {
                featureType: _0x1389("0x13f"),
                elementType: _0x1389("0x131"),
                stylers: [{
                    color: _0x1389("0x142")
                }, {
                    lightness: 20
                }]
            }, {
                featureType: _0x1389("0x13f"),
                elementType: "geometry.stroke",
                stylers: [{
                    color: _0x1389("0x142")
                }, {
                    lightness: 17
                }, {
                    weight: 1.2
                }]
            }, {
                featureType: _0x1389("0x12e"),
                elementType: "geometry",
                stylers: [{
                    color: _0x1389("0x142")
                }, {
                    lightness: 20
                }]
            }, {
                featureType: _0x1389("0x136"),
                elementType: "geometry",
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 21
                }]
            }, {
                featureType: _0x1389("0x130"),
                elementType: _0x1389("0x131"),
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 17
                }]
            }, {
                featureType: _0x1389("0x130"),
                elementType: _0x1389("0x133"),
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 29
                }, {
                    weight: .2
                }]
            }, {
                featureType: _0x1389("0x134"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 18
                }]
            }, {
                featureType: "road.local",
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: _0x1389("0x13d"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 19
                }]
            }, {
                featureType: _0x1389("0x12b"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: _0x1389("0x142")
                }, {
                    lightness: 17
                }]
            }],
            Midnight: [{
                featureType: "all",
                elementType: _0x1389("0x13a"),
                stylers: [{
                    color: _0x1389("0x132")
                }]
            }, {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [{
                    color: _0x1389("0x142")
                }, {
                    lightness: 13
                }]
            }, {
                featureType: _0x1389("0x13f"),
                elementType: _0x1389("0x131"),
                stylers: [{
                    color: _0x1389("0x142")
                }]
            }, {
                featureType: "administrative",
                elementType: _0x1389("0x133"),
                stylers: [{
                    color: _0x1389("0x144")
                }, {
                    lightness: 14
                }, {
                    weight: 1.4
                }]
            }, {
                featureType: "landscape",
                elementType: "all",
                stylers: [{
                    color: "#08304b"
                }]
            }, {
                featureType: _0x1389("0x136"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: _0x1389("0x145")
                }, {
                    lightness: 5
                }]
            }, {
                featureType: "road.highway",
                elementType: _0x1389("0x131"),
                stylers: [{
                    color: _0x1389("0x142")
                }]
            }, {
                featureType: "road.highway",
                elementType: _0x1389("0x133"),
                stylers: [{
                    color: _0x1389("0x146")
                }, {
                    lightness: 25
                }]
            }, {
                featureType: "road.arterial",
                elementType: "geometry.fill",
                stylers: [{
                    color: _0x1389("0x142")
                }]
            }, {
                featureType: _0x1389("0x134"),
                elementType: _0x1389("0x133"),
                stylers: [{
                    color: "#0b3d51"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: _0x1389("0x135"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: "#000000"
                }]
            }, {
                featureType: _0x1389("0x13d"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    color: "#146474"
                }]
            }, {
                featureType: _0x1389("0x12b"),
                elementType: "all",
                stylers: [{
                    color: _0x1389("0x147")
                }]
            }],
            Hopper: [{
                featureType: _0x1389("0x12b"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    hue: _0x1389("0x148")
                }, {
                    saturation: 34
                }, {
                    lightness: -69
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: "landscape",
                elementType: _0x1389("0x12c"),
                stylers: [{
                    hue: "#b7caaa"
                }, {
                    saturation: -14
                }, {
                    lightness: -18
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: _0x1389("0x149"),
                elementType: "all",
                stylers: [{
                    hue: "#cbdac1"
                }, {
                    saturation: -6
                }, {
                    lightness: -9
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: _0x1389("0x14a"),
                elementType: "geometry",
                stylers: [{
                    hue: "#8d9b83"
                }, {
                    saturation: -89
                }, {
                    lightness: -12
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: "road.highway",
                elementType: _0x1389("0x12c"),
                stylers: [{
                    hue: _0x1389("0x14b")
                }, {
                    saturation: -88
                }, {
                    lightness: 54
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road.arterial",
                elementType: _0x1389("0x12c"),
                stylers: [{
                    hue: _0x1389("0x14c")
                }, {
                    saturation: -89
                }, {
                    lightness: -3
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road.local",
                elementType: _0x1389("0x12c"),
                stylers: [{
                    hue: _0x1389("0x14c")
                }, {
                    saturation: -89
                }, {
                    lightness: -26
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: _0x1389("0x136"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    hue: _0x1389("0x14d")
                }, {
                    saturation: 61
                }, {
                    lightness: -45
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: _0x1389("0x137"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    hue: _0x1389("0x14e")
                }, {
                    saturation: -46
                }, {
                    lightness: -28
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: _0x1389("0x13d"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    hue: _0x1389("0x14f")
                }, {
                    saturation: 74
                }, {
                    lightness: -51
                }, {
                    visibility: _0x1389("0x150")
                }]
            }, {
                featureType: _0x1389("0x151"),
                elementType: "all",
                stylers: [{
                    hue: "#ffffff"
                }, {
                    saturation: 0
                }, {
                    lightness: 100
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "administrative.neighborhood",
                elementType: _0x1389("0x141"),
                stylers: [{
                    hue: _0x1389("0x132")
                }, {
                    saturation: 0
                }, {
                    lightness: 100
                }, {
                    visibility: _0x1389("0x143")
                }]
            }, {
                featureType: _0x1389("0x152"),
                elementType: _0x1389("0x153"),
                stylers: [{
                    hue: "#ffffff"
                }, {
                    saturation: 0
                }, {
                    lightness: 100
                }, {
                    visibility: "off"
                }]
            }, {
                featureType: _0x1389("0x154"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    hue: _0x1389("0x132")
                }, {
                    saturation: 0
                }, {
                    lightness: 100
                }, {
                    visibility: _0x1389("0x143")
                }]
            }, {
                featureType: _0x1389("0x13f"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    hue: _0x1389("0x155")
                }, {
                    saturation: 5
                }, {
                    lightness: -57
                }, {
                    visibility: "off"
                }]
            }, {
                featureType: _0x1389("0x156"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    hue: _0x1389("0x157")
                }, {
                    saturation: 50
                }, {
                    lightness: -46
                }, {
                    visibility: "on"
                }]
            }],
            Beard: [{
                featureType: _0x1389("0x158"),
                elementType: _0x1389("0x159"),
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#333333"
                }]
            }],
            AssassianCreed: [{
                featureType: _0x1389("0x141"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    visibility: "on"
                }]
            }, {
                featureType: _0x1389("0x141"),
                elementType: _0x1389("0x153"),
                stylers: [{
                    visibility: _0x1389("0x143")
                }, {
                    saturation: "-100"
                }]
            }, {
                featureType: "all",
                elementType: _0x1389("0x13a"),
                stylers: [{
                    saturation: 36
                }, {
                    color: _0x1389("0x142")
                }, {
                    lightness: 40
                }, {
                    visibility: _0x1389("0x143")
                }]
            }, {
                featureType: _0x1389("0x141"),
                elementType: _0x1389("0x139"),
                stylers: [{
                    visibility: _0x1389("0x143")
                }, {
                    color: _0x1389("0x142")
                }, {
                    lightness: 16
                }]
            }, {
                featureType: _0x1389("0x141"),
                elementType: _0x1389("0x13c"),
                stylers: [{
                    visibility: _0x1389("0x143")
                }]
            }, {
                featureType: "administrative",
                elementType: _0x1389("0x131"),
                stylers: [{
                    color: _0x1389("0x142")
                }, {
                    lightness: 20
                }]
            }, {
                featureType: _0x1389("0x13f"),
                elementType: "geometry.stroke",
                stylers: [{
                    color: _0x1389("0x142")
                }, {
                    lightness: 17
                }, {
                    weight: 1.2
                }]
            }, {
                featureType: _0x1389("0x12e"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: _0x1389("0x142")
                }, {
                    lightness: 20
                }]
            }, {
                featureType: _0x1389("0x12e"),
                elementType: _0x1389("0x131"),
                stylers: [{
                    color: _0x1389("0x15a")
                }]
            }, {
                featureType: _0x1389("0x12e"),
                elementType: _0x1389("0x133"),
                stylers: [{
                    color: _0x1389("0x15a")
                }]
            }, {
                featureType: _0x1389("0x15b"),
                elementType: _0x1389("0x131"),
                stylers: [{
                    color: "#4d6059"
                }]
            }, {
                featureType: _0x1389("0x136"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    lightness: 21
                }]
            }, {
                featureType: _0x1389("0x136"),
                elementType: _0x1389("0x131"),
                stylers: [{
                    color: _0x1389("0x15a")
                }]
            }, {
                featureType: _0x1389("0x136"),
                elementType: _0x1389("0x133"),
                stylers: [{
                    color: _0x1389("0x15a")
                }]
            }, {
                featureType: _0x1389("0x14a"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    visibility: "on"
                }, {
                    color: _0x1389("0x15c")
                }]
            }, {
                featureType: "road",
                elementType: _0x1389("0x131"),
                stylers: [{
                    color: _0x1389("0x15c")
                }]
            }, {
                featureType: _0x1389("0x130"),
                elementType: "geometry.fill",
                stylers: [{
                    color: _0x1389("0x15c")
                }, {
                    lightness: 17
                }]
            }, {
                featureType: _0x1389("0x130"),
                elementType: _0x1389("0x133"),
                stylers: [{
                    color: "#7f8d89"
                }, {
                    lightness: 29
                }, {
                    weight: .2
                }]
            }, {
                featureType: _0x1389("0x134"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: _0x1389("0x142")
                }, {
                    lightness: 18
                }]
            }, {
                featureType: _0x1389("0x134"),
                elementType: _0x1389("0x131"),
                stylers: [{
                    color: _0x1389("0x15c")
                }]
            }, {
                featureType: _0x1389("0x134"),
                elementType: _0x1389("0x133"),
                stylers: [{
                    color: "#7f8d89"
                }]
            }, {
                featureType: "road.local",
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: "#000000"
                }, {
                    lightness: 16
                }]
            }, {
                featureType: _0x1389("0x135"),
                elementType: "geometry.fill",
                stylers: [{
                    color: _0x1389("0x15c")
                }]
            }, {
                featureType: _0x1389("0x135"),
                elementType: _0x1389("0x133"),
                stylers: [{
                    color: _0x1389("0x15c")
                }]
            }, {
                featureType: _0x1389("0x13d"),
                elementType: _0x1389("0x12c"),
                stylers: [{
                    color: _0x1389("0x142")
                }, {
                    lightness: 19
                }]
            }, {
                featureType: _0x1389("0x12b"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    color: _0x1389("0x15d")
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: _0x1389("0x12b"),
                elementType: "geometry",
                stylers: [{
                    color: "#2b3638"
                }, {
                    lightness: 17
                }]
            }, {
                featureType: "water",
                elementType: _0x1389("0x131"),
                stylers: [{
                    color: _0x1389("0x15e")
                }]
            }, {
                featureType: _0x1389("0x12b"),
                elementType: _0x1389("0x133"),
                stylers: [{
                    color: "#24282b"
                }]
            }, {
                featureType: _0x1389("0x12b"),
                elementType: _0x1389("0x153"),
                stylers: [{
                    visibility: _0x1389("0x143")
                }]
            }, {
                featureType: _0x1389("0x12b"),
                elementType: _0x1389("0x159"),
                stylers: [{
                    visibility: _0x1389("0x15f")
                }]
            }, {
                featureType: _0x1389("0x12b"),
                elementType: _0x1389("0x13a"),
                stylers: [{
                    visibility: _0x1389("0x143")
                }]
            }, {
                featureType: _0x1389("0x12b"),
                elementType: "labels.text.stroke",
                stylers: [{
                    visibility: _0x1389("0x143")
                }]
            }, {
                featureType: _0x1389("0x12b"),
                elementType: _0x1389("0x13c"),
                stylers: [{
                    visibility: "off"
                }]
            }],
            SubtleGray: [{
                featureType: _0x1389("0x13f"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    saturation: _0x1389("0x160")
                }]
            }, {
                featureType: _0x1389("0x151"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    visibility: _0x1389("0x143")
                }]
            }, {
                featureType: _0x1389("0x12e"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    saturation: -100
                }, {
                    lightness: 65
                }, {
                    visibility: "on"
                }]
            }, {
                featureType: _0x1389("0x136"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    saturation: -100
                }, {
                    lightness: "50"
                }, {
                    visibility: _0x1389("0x150")
                }]
            }, {
                featureType: "road",
                elementType: _0x1389("0x141"),
                stylers: [{
                    saturation: -100
                }]
            }, {
                featureType: _0x1389("0x130"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    visibility: _0x1389("0x150")
                }]
            }, {
                featureType: "road.arterial",
                elementType: _0x1389("0x141"),
                stylers: [{
                    lightness: "30"
                }]
            }, {
                featureType: _0x1389("0x135"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    lightness: "40"
                }]
            }, {
                featureType: _0x1389("0x13d"),
                elementType: "all",
                stylers: [{
                    saturation: -100
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "water",
                elementType: _0x1389("0x12c"),
                stylers: [{
                    hue: _0x1389("0x161")
                }, {
                    lightness: -25
                }, {
                    saturation: -97
                }]
            }, {
                featureType: "water",
                elementType: _0x1389("0x153"),
                stylers: [{
                    lightness: -25
                }, {
                    saturation: -100
                }]
            }],
            Tripitty: [{
                featureType: "all",
                elementType: _0x1389("0x153"),
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: _0x1389("0x13f"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    visibility: _0x1389("0x143")
                }]
            }, {
                featureType: "landscape",
                elementType: _0x1389("0x141"),
                stylers: [{
                    color: "#2c5ca5"
                }]
            }, {
                featureType: _0x1389("0x136"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    color: "#2c5ca5"
                }]
            }, {
                featureType: _0x1389("0x14a"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "transit",
                elementType: _0x1389("0x141"),
                stylers: [{
                    visibility: _0x1389("0x143")
                }]
            }, {
                featureType: _0x1389("0x12b"),
                elementType: _0x1389("0x141"),
                stylers: [{
                    color: _0x1389("0x162")
                }, {
                    visibility: "on"
                }]
            }]
        };
        $realtime[_0x1389("0x43")](function (canCreateDiscussions, e) {
            var t = $(e);
            var filem = t.data(_0x1389("0x163")).split(",");
            var nirXml = t.html();
            var awesomeIcon = t[_0x1389("0x59")](_0x1389("0x164")) ? t[_0x1389("0x59")](_0x1389("0x164")) : _0x1389("0x165");
            var urlZoom = t.data(_0x1389("0x166"));
            var savedPropertyName = isDark ? _0x1389("0x167") : t[_0x1389("0x59")]("theme");
            var browserEvent = e;
            if (_0x1389("0x168") === t.data(_0x1389("0x4f"))) {
                var toNop = t.data(_0x1389("0x169"));
                var options = {
                    position: {
                        lat: Number(filem[0]),
                        lng: Number(filem[1])
                    },
                    pov: toNop,
                    zoom: urlZoom,
                    gestureHandling: _0x1389("0x16a"),
                    scrollwheel: false
                };
                return new(google[_0x1389("0x16b")][_0x1389("0x16c")])(browserEvent, options);
            }
            var options = {
                zoom: urlZoom,
                scrollwheel: t.data(_0x1389("0x16d")),
                center: new(google[_0x1389("0x16b")][_0x1389("0x16e")])(filem[0], filem[1]),
                styles: model[savedPropertyName]
            };
            var event = new(google.maps[_0x1389("0x16f")])(browserEvent, options);
            var _captchaInput = new(google[_0x1389("0x16b")][_0x1389("0x170")])({
                content: nirXml
            });
            var disable = new(google[_0x1389("0x16b")].Marker)({
                position: new(google[_0x1389("0x16b")][_0x1389("0x16e")])(filem[0], filem[1]),
                icon: awesomeIcon,
                map: event
            });
            return disable.addListener(_0x1389("0x88"), function () {
                _captchaInput[_0x1389("0x171")](event, disable);
            }), null;
        });
    }
}
utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    var form = _0x1389("0x172");
    var DOM_CONTENT_LOADED = _0x1389("0x173");
    var base = _0x1389("0x174");
    var reconnectingCallback = _0x1389("0x175");
    var DOMContentLoaded = _0x1389("0x176");
    var div = _0x1389("0x177");
    var button = document[_0x1389("0xde")](form);
    if (button) {
        var moderationBanner = $(button).data(_0x1389("0x57"));
        var Component = window[_0x1389("0x178")][_0x1389("0x179")](button);
        var options = {
            tooltip: {
                triggerOn: _0x1389("0x17a"),
                trigger: "axis",
                padding: [7, 10],
                formatter: _0x1389("0x17b"),
                backgroundColor: utils[_0x1389("0x17c")][_0x1389("0x17d")],
                borderColor: utils.grays[300],
                borderWidth: 1,
                transitionDuration: 0,
                position: function calcUV(uvx1, uvy1, rect, point, curve) {
                    return getPosition(uvx1, uvy1, rect, point, curve);
                },
                textStyle: {
                    color: utils[_0x1389("0x49")][_0x1389("0x2f")]
                }
            },
            xAxis: {
                type: _0x1389("0x17e"),
                data: [_0x1389("0x17f"), "Week 5"],
                boundaryGap: false,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: utils[_0x1389("0x17c")][300],
                        type: _0x1389("0x180")
                    }
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisPointer: {
                    type: _0x1389("0x16a")
                }
            },
            yAxis: {
                type: _0x1389("0xf"),
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisPointer: {
                    show: false
                }
            },
            series: [{
                type: _0x1389("0x9e"),
                lineStyle: {
                    color: utils[_0x1389("0x49")][_0x1389("0x53")],
                    width: 3
                },
                itemStyle: {
                    color: utils.grays[_0x1389("0x17d")],
                    borderColor: utils[_0x1389("0x49")][_0x1389("0x53")],
                    borderWidth: 2
                },
                hoverAnimation: true,
                data: [20, 130],
                connectNulls: true,
                smooth: .6,
                smoothMonotone: "x",
                symbol: "circle",
                symbolSize: 8,
                areaStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: utils[_0x1389("0x4c")](utils[_0x1389("0x49")][_0x1389("0x53")], .25)
                        }, {
                            offset: 1,
                            color: utils.rgbaColor(utils.colors.primary, 0)
                        }]
                    }
                }
            }],
            grid: {
                bottom: "2%",
                top: "0%",
                right: _0x1389("0x181"),
                left: _0x1389("0x181")
            }
        };
        var el = window._[_0x1389("0x182")](options, moderationBanner);
        Component[_0x1389("0x183")](el);
    }
    var permissions = document[_0x1389("0xde")](DOM_CONTENT_LOADED);
    if (permissions) {
        var moderationBanner = $(permissions)[_0x1389("0x59")](_0x1389("0x57"));
        /** @type {!Array} */
        var column = [120, 200, 150, 80, 70, 110, 120];
        var total = Math[_0x1389("0x184")][_0x1389("0x4")](Math, column);
        var maindata3 = column[_0x1389("0x4b")](function () {
            return total;
        });
        var res = window.echarts[_0x1389("0x179")](permissions);
        var options = {
            tooltip: {
                trigger: "axis",
                padding: [7, 10],
                formatter: "{b1}: {c1}",
                backgroundColor: utils[_0x1389("0x17c")][_0x1389("0x17d")],
                borderColor: utils[_0x1389("0x17c")][300],
                borderWidth: 1,
                textStyle: {
                    color: utils.colors[_0x1389("0x2f")]
                },
                transitionDuration: 0,
                position: function calcUV(uvx1, uvy1, rect, point, curve) {
                    return getPosition(uvx1, uvy1, rect, point, curve);
                }
            },
            xAxis: {
                type: _0x1389("0x17e"),
                data: [_0x1389("0x185"), _0x1389("0x186"), _0x1389("0x187"), _0x1389("0x188"), _0x1389("0x189"), "Fri", _0x1389("0x18a")],
                boundaryGap: false,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisPointer: {
                    type: _0x1389("0x16a")
                }
            },
            yAxis: {
                type: _0x1389("0xf"),
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisPointer: {
                    type: _0x1389("0x16a")
                }
            },
            series: [{
                type: "bar",
                barWidth: "5px",
                barGap: _0x1389("0x18b"),
                itemStyle: {
                    color: utils[_0x1389("0x17c")][200],
                    barBorderRadius: 10
                },
                data: maindata3,
                animation: false,
                emphasis: {
                    itemStyle: {
                        color: utils[_0x1389("0x17c")][200]
                    }
                }
            }, {
                type: _0x1389("0xad"),
                barWidth: "5px",
                itemStyle: {
                    color: utils.colors[_0x1389("0x53")],
                    barBorderRadius: 10
                },
                data: column,
                emphasis: {
                    itemStyle: {
                        color: utils[_0x1389("0x49")].primary
                    }
                },
                z: 10
            }],
            grid: {
                right: 5,
                left: 10,
                top: 0,
                bottom: 0
            }
        };
        var el = window._[_0x1389("0x182")](options, moderationBanner);
        res[_0x1389("0x183")](el);
    }
    var b = document[_0x1389("0xde")](base);
    /** @type {!Array} */
    var months = [_0x1389("0x18c"), _0x1389("0x18d"), "Mar", _0x1389("0x18e"), _0x1389("0x18f"), "Jun", _0x1389("0x190"), "Aug", _0x1389("0x191"), _0x1389("0x192"), "Nov", _0x1389("0x193")];
    if (b) {
        var aggs = $(b)[_0x1389("0x59")]("options");
        var originalB = window[_0x1389("0x178")].init(b);
        /** @type {!Array} */
        var matches = [
            [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70],
            [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50],
            [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60],
            [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80],
            [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50],
            [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70],
            [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50],
            [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110],
            [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70],
            [50,
                80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110
            ],
            [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70],
            [20, 40, 20, 50, 30, 80, 120, 100, 30, 40, 30, 70]
        ];
        var options = {
            color: utils[_0x1389("0x17c")][_0x1389("0x17d")],
            tooltip: {
                trigger: _0x1389("0x194"),
                padding: [7, 10],
                backgroundColor: utils[_0x1389("0x17c")][_0x1389("0x17d")],
                borderColor: utils[_0x1389("0x17c")][300],
                borderWidth: 1,
                textStyle: {
                    color: utils[_0x1389("0x49")][_0x1389("0x2f")]
                },
                formatter: function formatter(b) {
                    return e = b[0], i = e[_0x1389("0x121")], pickerVal = e.value, valueDate = new Date(i), months[0] + " " + valueDate[_0x1389("0x195")]() + ", " + pickerVal;
                    var e;
                    var i;
                    var pickerVal;
                    var valueDate;
                },
                transitionDuration: 0,
                position: function calcUV(uvx1, uvy1, rect, point, curve) {
                    return getPosition(uvx1, uvy1, rect, point, curve);
                }
            },
            xAxis: {
                type: _0x1389("0x17e"),
                data: [_0x1389("0x196"), _0x1389("0x197"), _0x1389("0x198"), _0x1389("0x199"), _0x1389("0x19a"), _0x1389("0x19b"), _0x1389("0x19c"), _0x1389("0x19d"), "2019-01-13", _0x1389("0x19e"), _0x1389("0x19f"), _0x1389("0x1a0")],
                boundaryGap: false,
                axisPointer: {
                    lineStyle: {
                        color: utils[_0x1389("0x17c")][300],
                        type: _0x1389("0x180")
                    }
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: utils[_0x1389("0x4c")]("#000", .01),
                        type: _0x1389("0x180")
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: utils[_0x1389("0x17c")][400],
                    formatter: function getLogFilename(match) {
                        /** @type {!Date} */
                        var f = new Date(match);
                        return months[f.getMonth()] + " " + f[_0x1389("0x195")]();
                    },
                    margin: 15
                }
            },
            yAxis: {
                type: "value",
                axisPointer: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: utils[_0x1389("0x17c")][300],
                        type: _0x1389("0x180")
                    }
                },
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    color: utils.grays[400],
                    margin: 15
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            },
            series: [{
                type: _0x1389("0x9e"),
                data: matches[0],
                lineStyle: {
                    color: utils.colors[_0x1389("0x53")]
                },
                itemStyle: {
                    borderColor: utils[_0x1389("0x49")][_0x1389("0x53")],
                    borderWidth: 2
                },
                symbol: _0x1389("0x1a1"),
                symbolSize: 10,
                smooth: false,
                hoverAnimation: true,
                areaStyle: {
                    color: {
                        type: _0x1389("0x1a2"),
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: utils[_0x1389("0x4c")](utils.colors[_0x1389("0x53")], .2)
                        }, {
                            offset: 1,
                            color: utils[_0x1389("0x4c")](utils[_0x1389("0x49")][_0x1389("0x53")], 0)
                        }]
                    }
                }
            }],
            grid: {
                right: _0x1389("0x1a3"),
                left: _0x1389("0x1a4"),
                bottom: "15%",
                top: "5%"
            }
        };
        var params = window._[_0x1389("0x182")](options, aggs);
        originalB.setOption(params);
        utils[_0x1389("0x63")].on("change", reconnectingCallback, function (arrayOfSelects) {
            var $conditionsRuleMajor = $(arrayOfSelects[_0x1389("0x8f")]);
            var i = $conditionsRuleMajor.val();
            var m = matches[i];
            originalB[_0x1389("0x183")]({
                tooltip: {
                    formatter: function formatter(b) {
                        var e = b[0];
                        var t = e.name;
                        var free = e[_0x1389("0xf")];
                        /** @type {!Date} */
                        var tx = new Date(t);
                        return months[i] + " " + tx[_0x1389("0x195")]() + ", " + free;
                    }
                },
                xAxis: {
                    axisLabel: {
                        formatter: function cmpTargetYears(match) {
                            /** @type {!Date} */
                            var r = new Date(match);
                            return months[$conditionsRuleMajor.val()] + " " + r[_0x1389("0x195")]();
                        },
                        margin: 15
                    }
                },
                series: [{
                    data: m
                }]
            });
        });
    }
    var url = document[_0x1389("0xde")](".echart-bar-top-products");
    if (url) {
        var moderationBanner = $(url).data(_0x1389("0x57"));
        var dict = window[_0x1389("0x178")].init(url);
        var options = {
            color: [utils[_0x1389("0x49")].primary, utils[_0x1389("0x17c")][300]],
            dataset: {
                source: [
                    [_0x1389("0x1a5"), _0x1389("0x1a6"), _0x1389("0x1a7")],
                    ["Boots4", 43, 85],
                    [_0x1389("0x1a8"), 83, 73],
                    [_0x1389("0x1a9"), 86, 62],
                    ["Falcon", 72, 53],
                    [_0x1389("0x1aa"), 80, 50],
                    [_0x1389("0x1ab"), 50, 70],
                    [_0x1389("0x1ac"), 80, 90]
                ]
            },
            tooltip: {
                trigger: _0x1389("0xe"),
                padding: [7, 10],
                backgroundColor: utils[_0x1389("0x17c")][_0x1389("0x17d")],
                borderColor: utils[_0x1389("0x17c")][300],
                borderWidth: 1,
                textStyle: {
                    color: utils[_0x1389("0x49")].dark
                },
                transitionDuration: 0,
                position: function calcUV(uvx1, uvy1, rect, point, curve) {
                    return getPosition(uvx1, uvy1, rect, point, curve);
                },
                formatter: function finishPrevPart(end) {
                    return _0x1389("0x1ad") + end[_0x1389("0x1ae")] + _0x1389("0x1af") + end.name + _0x1389("0x1b0") + end[_0x1389("0xf")][end[_0x1389("0x1b1")] + 1] + "</div>";
                }
            },
            legend: {
                data: [_0x1389("0x1a6"), _0x1389("0x1a7")],
                left: _0x1389("0x3a"),
                itemWidth: 10,
                itemHeight: 10,
                borderRadius: 0,
                icon: _0x1389("0x1a1"),
                inactiveColor: utils[_0x1389("0x17c")][500],
                textStyle: {
                    color: utils[_0x1389("0x17c")][700]
                }
            },
            xAxis: {
                type: "category",
                axisLabel: {
                    color: utils[_0x1389("0x17c")][400]
                },
                axisLine: {
                    lineStyle: {
                        color: utils[_0x1389("0x17c")][300],
                        type: _0x1389("0x180")
                    }
                },
                axisTick: false,
                boundaryGap: true
            },
            yAxis: {
                axisPointer: {
                    type: "none"
                },
                axisTick: _0x1389("0x16a"),
                splitLine: {
                    lineStyle: {
                        color: utils.grays[300],
                        type: _0x1389("0x180")
                    }
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    color: utils[_0x1389("0x17c")][400]
                }
            },
            series: [{
                type: _0x1389("0xad"),
                barWidth: _0x1389("0x1b2"),
                barGap: _0x1389("0x1b3"),
                label: {
                    normal: {
                        show: false
                    }
                },
                z: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: [10, 10, 0, 0],
                        color: utils[_0x1389("0x49")][_0x1389("0x53")]
                    }
                }
            }, {
                type: _0x1389("0xad"),
                barWidth: "12%",
                barGap: _0x1389("0x1b3"),
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: [4, 4, 0, 0],
                        color: utils.grays[300]
                    }
                }
            }],
            grid: {
                right: "0",
                left: _0x1389("0x1b4"),
                bottom: _0x1389("0x1b5"),
                top: _0x1389("0x1b6")
            }
        };
        var el = window._[_0x1389("0x182")](options, moderationBanner);
        dict[_0x1389("0x183")](el);
    }
    /** @type {(Element|null)} */
    var button2 = document.querySelector(div);
    if (button2) {
        var inter_id = $(button2)[_0x1389("0x59")](_0x1389("0x57"));
        var inlinedFunctions = window[_0x1389("0x178")][_0x1389("0x179")](button2);
        var options = {
            color: [utils[_0x1389("0x49")][_0x1389("0x53")], utils[_0x1389("0x49")][_0x1389("0xb1")], utils[_0x1389("0x17c")][300]],
            tooltip: {
                trigger: _0x1389("0xe"),
                padding: [7, 10],
                backgroundColor: utils.grays[_0x1389("0x17d")],
                textStyle: {
                    color: utils[_0x1389("0x17c")].black
                },
                transitionDuration: 0,
                borderColor: utils.grays[300],
                borderWidth: 1,
                formatter: function getfieldindex(axefields) {
                    return "<strong>" + axefields[_0x1389("0x59")].name + _0x1389("0x1b0") + axefields[_0x1389("0x1b7")] + "%";
                }
            },
            position: function calcUV(uvx1, uvy1, rect, point, curve) {
                return getPosition(uvx1, uvy1, rect, point, curve);
            },
            legend: {
                show: false
            },
            series: [{
                type: _0x1389("0xb7"),
                radius: [_0x1389("0x73"), "87%"],
                avoidLabelOverlap: false,
                hoverAnimation: false,
                itemStyle: {
                    borderWidth: 2,
                    borderColor: utils[_0x1389("0x17c")][_0x1389("0x17d")]
                },
                label: {
                    normal: {
                        show: false,
                        position: _0x1389("0x1b8"),
                        textStyle: {
                            fontSize: "20",
                            fontWeight: "500",
                            color: utils.grays[700]
                        }
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 53e5,
                    name: "Type 0+"
                }, {
                    value: 19e5,
                    name: "Type B-"
                }, {
                    value: 2e6,
                    name: "Type A+"
                }]
            }]
        };
        var node = window._[_0x1389("0x182")](options, inter_id);
        inlinedFunctions[_0x1389("0x183")](node);
    }
    var e = document[_0x1389("0xde")](DOMContentLoaded);
    if (e) {
        var commonErrorData = $(e)[_0x1389("0x59")](_0x1389("0x57"));
        var target = window[_0x1389("0x178")].init(e);
        var options = {
            tooltip: {
                show: true,
                trigger: "item",
                backgroundColor: utils.grays[100],
                textStyle: {
                    color: utils[_0x1389("0x17c")][_0x1389("0x1bb")]
                },
                transitionDuration: 0,
                formatter: function getPublisherData(result) {
                    var onlineSupportTitle = result[_0x1389("0x121")];
                    var position = result[_0x1389("0xf")];
                    return "<strong>" + onlineSupportTitle + "</strong><br/>Active user: " + (position ? "" + Math.round(position / 1e4) : 0);
                }
            },
            visualMap: {
                min: 0,
                max: 1e5,
                text: ["High", _0x1389("0x1bc")],
                realtime: false,
                calculable: true,
                inRange: {
                    color: [utils[_0x1389("0x4c")](utils.colors[_0x1389("0x53")], _0x1389("0x1bd")), utils[_0x1389("0x49")][_0x1389("0x53")]]
                },
                textStyle: {
                    color: utils[_0x1389("0x17c")][700]
                }
            },
            series: [{
                type: _0x1389("0x4b"),
                mapType: _0x1389("0x1be"),
                roam: true,
                zoom: 1.25,
                scaleLimit: {
                    min: .9,
                    max: 17
                },
                itemStyle: {
                    normal: {
                        borderColor: utils[_0x1389("0x17c")][200],
                        borderWidth: .5,
                        areaStyle: {
                            color: utils.grays[300]
                        }
                    },
                    emphasis: {
                        areaColor: "#0443a2",
                        borderColor: utils.grays[300],
                        label: {
                            show: false
                        }
                    }
                },
                data: [{
                    name: _0x1389("0x1bf"),
                    value: 28397.812
                }, {
                    name: _0x1389("0x1c0"),
                    value: 19549.124
                }, {
                    name: "Albania",
                    value: 3150.143
                }, {
                    name: _0x1389("0x1c1"),
                    value: 8441.537
                }, {
                    name: _0x1389("0x1c2"),
                    value: 40374.224
                }, {
                    name: _0x1389("0x1c3"),
                    value: 2963.496
                }, {
                    name: "French Southern and Antarctic Lands",
                    value: 268.065
                }, {
                    name: "Australia",
                    value: 22404.488
                }, {
                    name: "Austria",
                    value: 8401.924
                }, {
                    name: _0x1389("0x1c4"),
                    value: 9094.718
                }, {
                    name: "Burundi",
                    value: 9232.753
                }, {
                    name: _0x1389("0x1c5"),
                    value: 10941.288
                }, {
                    name: _0x1389("0x1c6"),
                    value: 9509.798
                }, {
                    name: "Burkina Faso",
                    value: 15540.284
                }, {
                    name: "Bangladesh",
                    value: 151125.475
                }, {
                    name: "Bulgaria",
                    value: 7389.175
                }, {
                    name: _0x1389("0x1c7"),
                    value: 66402.316
                }, {
                    name: "Bosnia and Herzegovina",
                    value: 3845.929
                }, {
                    name: _0x1389("0x1c8"),
                    value: 9491.07
                }, {
                    name: "Belize",
                    value: 308.595
                }, {
                    name: _0x1389("0x1c9"),
                    value: 64.951
                }, {
                    name: _0x1389("0x1ca"),
                    value: 716.939
                }, {
                    name: _0x1389("0x1cb"),
                    value: 195210.154
                }, {
                    name: _0x1389("0x1cc"),
                    value: 27.223
                }, {
                    name: _0x1389("0x1cd"),
                    value: 716.939
                }, {
                    name: "Botswana",
                    value: 1969.341
                }, {
                    name: _0x1389("0x1ce"),
                    value: 4349.921
                }, {
                    name: _0x1389("0x1cf"),
                    value: 34126.24
                }, {
                    name: _0x1389("0x1d0"),
                    value: 7830.534
                }, {
                    name: _0x1389("0x1d1"),
                    value: 17150.76
                }, {
                    name: _0x1389("0x1d2"),
                    value: 1359821.465
                }, {
                    name: _0x1389("0x1d3"),
                    value: 60508.978
                }, {
                    name: _0x1389("0x1d4"),
                    value: 20624.343
                }, {
                    name: _0x1389("0x1d5"),
                    value: 62191.161
                }, {
                    name: _0x1389("0x1d6"),
                    value: 3573.024
                }, {
                    name: _0x1389("0x1d7"),
                    value: 46444.798
                }, {
                    name: _0x1389("0x1d8"),
                    value: 4669.685
                }, {
                    name: _0x1389("0x1d9"),
                    value: 11281.768
                }, {
                    name: _0x1389("0x1da"),
                    value: 1.468
                }, {
                    name: _0x1389("0x1db"),
                    value: 1103.685
                }, {
                    name: _0x1389("0x1dc"),
                    value: 10553.701
                }, {
                    name: _0x1389("0x1dd"),
                    value: 83017.404
                }, {
                    name: _0x1389("0x1de"),
                    value: 834.036
                }, {
                    name: _0x1389("0x1df"),
                    value: 5550.959
                }, {
                    name: _0x1389("0x1e0"),
                    value: 10016.797
                }, {
                    name: "Algeria",
                    value: 37062.82
                }, {
                    name: _0x1389("0x1e1"),
                    value: 15001.072
                }, {
                    name: _0x1389("0x1e2"),
                    value: 78075.705
                }, {
                    name: _0x1389("0x1e3"),
                    value: 5741.159
                }, {
                    name: _0x1389("0x1e4"),
                    value: 46182.038
                }, {
                    name: "Estonia",
                    value: 1298.533
                }, {
                    name: _0x1389("0x1e5"),
                    value: 87095.281
                }, {
                    name: _0x1389("0x1e6"),
                    value: 5367.693
                }, {
                    name: _0x1389("0x1e7"),
                    value: 860.559
                }, {
                    name: _0x1389("0x1e8"),
                    value: 49.581
                }, {
                    name: _0x1389("0x1e9"),
                    value: 63230.866
                }, {
                    name: _0x1389("0x1ea"),
                    value: 1556.222
                }, {
                    name: "United Kingdom",
                    value: 62066.35
                }, {
                    name: "Georgia",
                    value: 4388.674
                }, {
                    name: "Ghana",
                    value: 24262.901
                }, {
                    name: _0x1389("0x1eb"),
                    value: 10876.033
                }, {
                    name: "Gambia",
                    value: 1680.64
                }, {
                    name: "Guinea Bissau",
                    value: 10876.033
                }, {
                    name: "Equatorial Guinea",
                    value: 696.167
                }, {
                    name: _0x1389("0x1ec"),
                    value: 11109.999
                }, {
                    name: _0x1389("0x1ed"),
                    value: 56.546
                }, {
                    name: "Guatemala",
                    value: 14341.576
                }, {
                    name: _0x1389("0x1ee"),
                    value: 231.169
                }, {
                    name: "Guyana",
                    value: 786.126
                }, {
                    name: _0x1389("0x1ef"),
                    value: 7621.204
                }, {
                    name: "Croatia",
                    value: 4338.027
                }, {
                    name: _0x1389("0x1f0"),
                    value: 9896.4
                }, {
                    name: _0x1389("0x1f1"),
                    value: 10014.633
                }, {
                    name: "Indonesia",
                    value: 240676.485
                }, {
                    name: _0x1389("0x1f2"),
                    value: 1205624.648
                }, {
                    name: _0x1389("0x1f3"),
                    value: 4467.561
                }, {
                    name: "Iran",
                    value: 240676.485
                }, {
                    name: _0x1389("0x1f4"),
                    value: 30962.38
                }, {
                    name: _0x1389("0x1f5"),
                    value: 318.042
                }, {
                    name: "Israel",
                    value: 7420.368
                }, {
                    name: _0x1389("0x1f6"),
                    value: 60508.978
                }, {
                    name: _0x1389("0x1f7"),
                    value: 2741.485
                }, {
                    name: _0x1389("0x1f8"),
                    value: 6454.554
                }, {
                    name: _0x1389("0x1f9"),
                    value: 127352.833
                }, {
                    name: _0x1389("0x1fa"),
                    value: 15921.127
                }, {
                    name: "Kenya",
                    value: 40909.194
                }, {
                    name: _0x1389("0x1fb"),
                    value: 5334.223
                }, {
                    name: _0x1389("0x1fc"),
                    value: 14364.931
                }, {
                    name: _0x1389("0x1fd"),
                    value: 51452.352
                }, {
                    name: "Kosovo",
                    value: 97.743
                }, {
                    name: _0x1389("0x1fe"),
                    value: 2991.58
                }, {
                    name: _0x1389("0x1ff"),
                    value: 6395.713
                }, {
                    name: _0x1389("0x200"),
                    value: 4341.092
                }, {
                    name: _0x1389("0x201"),
                    value: 3957.99
                }, {
                    name: _0x1389("0x202"),
                    value: 6040.612
                }, {
                    name: _0x1389("0x203"),
                    value: 20758.779
                }, {
                    name: "Lesotho",
                    value: 2008.921
                }, {
                    name: _0x1389("0x204"),
                    value: 3068.457
                }, {
                    name: "Luxembourg",
                    value: 507.885
                }, {
                    name: _0x1389("0x205"),
                    value: 2090.519
                }, {
                    name: _0x1389("0x206"),
                    value: 31642.36
                }, {
                    name: _0x1389("0x207"),
                    value: 103.619
                }, {
                    name: _0x1389("0x208"),
                    value: 21079.532
                }, {
                    name: _0x1389("0x209"),
                    value: 117886.404
                }, {
                    name: "Macedonia",
                    value: 507.885
                }, {
                    name: _0x1389("0x20a"),
                    value: 13985.961
                }, {
                    name: _0x1389("0x20b"),
                    value: 51931.231
                }, {
                    name: _0x1389("0x20c"),
                    value: 620.078
                }, {
                    name: _0x1389("0x20d"),
                    value: 2712.738
                }, {
                    name: "Mozambique",
                    value: 23967.265
                }, {
                    name: _0x1389("0x20e"),
                    value: 3609.42
                }, {
                    name: _0x1389("0x20f"),
                    value: 15013.694
                }, {
                    name: _0x1389("0x210"),
                    value: 28275.835
                }, {
                    name: _0x1389("0x211"),
                    value: 2178.967
                }, {
                    name: _0x1389("0x212"),
                    value: 246.379
                }, {
                    name: "Niger",
                    value: 15893.746
                }, {
                    name: _0x1389("0x213"),
                    value: 159707.78
                }, {
                    name: _0x1389("0x214"),
                    value: 5822.209
                }, {
                    name: _0x1389("0x215"),
                    value: 16615.243
                }, {
                    name: _0x1389("0x216"),
                    value: 4891.251
                }, {
                    name: _0x1389("0x217"),
                    value: 26846.016
                }, {
                    name: _0x1389("0x218"),
                    value: 4368.136
                }, {
                    name: _0x1389("0x219"),
                    value: 2802.768
                }, {
                    name: "Pakistan",
                    value: 173149.306
                }, {
                    name: _0x1389("0x21a"),
                    value: 3678.128
                }, {
                    name: _0x1389("0x21b"),
                    value: 29262.83
                }, {
                    name: _0x1389("0x21c"),
                    value: 93444.322
                }, {
                    name: _0x1389("0x21d"),
                    value: 6858.945
                }, {
                    name: _0x1389("0x21e"),
                    value: 38198.754
                }, {
                    name: _0x1389("0x21f"),
                    value: 3709.671
                }, {
                    name: _0x1389("0x220"),
                    value: 1.468
                }, {
                    name: _0x1389("0x221"),
                    value: 10589.792
                }, {
                    name: _0x1389("0x222"),
                    value: 6459.721
                }, {
                    name: _0x1389("0x223"),
                    value: 1749.713
                }, {
                    name: _0x1389("0x224"),
                    value: 21861.476
                }, {
                    name: _0x1389("0x225"),
                    value: 21861.476
                }, {
                    name: "Rwanda",
                    value: 10836.732
                }, {
                    name: _0x1389("0x226"),
                    value: 514.648
                }, {
                    name: _0x1389("0x227"),
                    value: 27258.387
                }, {
                    name: _0x1389("0x228"),
                    value: 35652.002
                }, {
                    name: _0x1389("0x229"),
                    value: 9940.929
                }, {
                    name: _0x1389("0x22a"),
                    value: 12950.564
                }, {
                    name: "Solomon Islands",
                    value: 526.447
                }, {
                    name: _0x1389("0x22b"),
                    value: 5751.976
                }, {
                    name: _0x1389("0x22c"),
                    value: 6218.195
                }, {
                    name: _0x1389("0x22d"),
                    value: 9636.173
                }, {
                    name: _0x1389("0x22e"),
                    value: 9636.173
                }, {
                    name: _0x1389("0x22f"),
                    value: 3573.024
                }, {
                    name: _0x1389("0x230"),
                    value: 524.96
                }, {
                    name: "Slovakia",
                    value: 5433.437
                }, {
                    name: _0x1389("0x231"),
                    value: 2054.232
                }, {
                    name: _0x1389("0x232"),
                    value: 9382.297
                }, {
                    name: "Swaziland",
                    value: 1193.148
                }, {
                    name: "Syria",
                    value: 7830.534
                }, {
                    name: _0x1389("0x233"),
                    value: 11720.781
                }, {
                    name: "Togo",
                    value: 6306.014
                }, {
                    name: "Thailand",
                    value: 66402.316
                }, {
                    name: "Tajikistan",
                    value: 7627.326
                }, {
                    name: _0x1389("0x234"),
                    value: 5041.995
                }, {
                    name: _0x1389("0x235"),
                    value: 10016.797
                }, {
                    name: _0x1389("0x236"),
                    value: 1328.095
                }, {
                    name: _0x1389("0x237"),
                    value: 10631.83
                }, {
                    name: _0x1389("0x238"),
                    value: 72137.546
                }, {
                    name: "United Republic of Tanzania",
                    value: 44973.33
                }, {
                    name: _0x1389("0x239"),
                    value: 33987.213
                }, {
                    name: _0x1389("0x23a"),
                    value: 46050.22
                }, {
                    name: _0x1389("0x23b"),
                    value: 3371.982
                }, {
                    name: "United States of America",
                    value: 312247.116
                }, {
                    name: _0x1389("0x23c"),
                    value: 27769.27
                }, {
                    name: "Venezuela",
                    value: 236.299
                }, {
                    name: "Vietnam",
                    value: 89047.397
                }, {
                    name: _0x1389("0x23d"),
                    value: 236.299
                }, {
                    name: _0x1389("0x23e"),
                    value: 13.565
                }, {
                    name: "Yemen",
                    value: 22763.008
                }, {
                    name: _0x1389("0x23f"),
                    value: 51452.352
                }, {
                    name: _0x1389("0x240"),
                    value: 13216.985
                }, {
                    name: _0x1389("0x241"),
                    value: 13076.978
                }]
            }]
        };
        var data = window._.merge(options, commonErrorData);
        target[_0x1389("0x183")](data);
    }
    var elems = document[_0x1389("0x242")](_0x1389("0x243"));
    /**
     * @return {undefined}
     */
    window[_0x1389("0x244")] = function () {
        if (elems.length) {
            $[_0x1389("0x43")](elems, function (canCreateDiscussions, svg) {
                if ($(svg).data("echart-responsive")) {
                    window[_0x1389("0x178")][_0x1389("0x179")](svg).resize();
                }
            });
        }
    };
}), utils[_0x1389("0x63")][_0x1389("0x55")](function ($) {
    $(_0x1389("0x245")).click(function (canCreateDiscussions) {
        var $realtime = $(this);
        if (utils.location[_0x1389("0x246")] === $realtime[0][_0x1389("0x246")] && utils.location[_0x1389("0x246")][_0x1389("0x46")](/^\//, "") === this[_0x1389("0x246")][_0x1389("0x46")](/^\//, "") && utils[_0x1389("0x34")][_0x1389("0x247")] === this[_0x1389("0x247")]) {
            canCreateDiscussions[_0x1389("0x248")]();
            var inputs = $(this[_0x1389("0x249")]);
            if ((inputs = inputs.length ? inputs : $(_0x1389("0x24a") + this[_0x1389("0x249")][_0x1389("0xae")](1) + "]"))[_0x1389("0x5")]) {
                return $(_0x1389("0x24b"))[_0x1389("0x24c")]({
                    scrollTop: inputs[_0x1389("0x3c")]()[_0x1389("0x39")] - ($realtime[_0x1389("0x59")](_0x1389("0x3c")) || 0)
                }, 400, _0x1389("0x24d"), function () {
                    var artistTrack = $realtime[_0x1389("0x33")](_0x1389("0x10d"));
                    if (window.history[_0x1389("0x24e")]) {
                        window.history[_0x1389("0x24e")](null, null, artistTrack);
                    } else {
                        window[_0x1389("0x34")][_0x1389("0x249")] = artistTrack;
                    }
                }), false;
            }
        }
        return true;
    });
    var testString = window[_0x1389("0x34")].hash;
    if (testString && document[_0x1389("0xab")](testString.slice(1))) {
        var result = $(testString);
        $(_0x1389("0x24b")).animate({
            scrollTop: result[_0x1389("0x3c")]().top - $("a[href='" + testString + "']")[_0x1389("0x59")]("offset")
        }, 400, _0x1389("0x24d"), function () {
            if (window[_0x1389("0x24f")][_0x1389("0x24e")]) {
                window[_0x1389("0x24f")][_0x1389("0x24e")](null, null, testString);
            } else {
                window[_0x1389("0x34")][_0x1389("0x249")] = testString;
            }
        });
    }
}), window[_0x1389("0x54")][_0x1389("0x63")][_0x1389("0x55")](function () {
    var $realtime = $(_0x1389("0x250"));
    if ($realtime[_0x1389("0x5")]) {
        $realtime[_0x1389("0x43")](function (canCreateDiscussions, document) {
            var calcResult = $(document);
            var result = $[_0x1389("0x58")]({
                dateFormat: _0x1389("0x251"),
                disableMobile: true
            }, calcResult[_0x1389("0x59")](_0x1389("0x57")));
            calcResult[_0x1389("0x33")](_0x1389("0x252"), result[_0x1389("0x253")]);
            calcResult[_0x1389("0x254")](result);
        });
    }
}), window[_0x1389("0x255")]("load", function () {
    var placeMidpointLine = document[_0x1389("0x256")](_0x1389("0x257"));
    Array[_0x1389("0x258")][_0x1389("0x67")].call(placeMidpointLine, function (canCreateDiscussions) {
        canCreateDiscussions[_0x1389("0x255")](_0x1389("0x259"), function (canCreateDiscussions) {
            if (false === canCreateDiscussions[_0x1389("0x25a")]()) {
                canCreateDiscussions[_0x1389("0x248")]();
                canCreateDiscussions[_0x1389("0x25b")]();
            }
            canCreateDiscussions[_0x1389("0x25c")][_0x1389("0x25d")](_0x1389("0x25e"));
        }, false);
    });
}, false), utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    var reconnectingCallback = _0x1389("0x25f");
    var dataPlus = _0x1389("0x260");
    var i = _0x1389("0x261");
    var el = _0x1389("0x262");
    utils[_0x1389("0x63")].on(_0x1389("0x88"), reconnectingCallback, function (arrayOfSelects) {
        var self = $(arrayOfSelects[_0x1389("0x8f")]);
        var $sendIcon = self[_0x1389("0x59")](i);
        var d = self[_0x1389("0x263")](dataPlus)[_0x1389("0x10c")]("." + $sendIcon);
        var legacyIndex = self[_0x1389("0x59")](el);
        /** @type {number} */
        var days = parseInt(d[_0x1389("0x264")](), 10);
        var h = d[_0x1389("0x33")]("min");
        /** @type {number} */
        h = h ? parseInt(h, 10) : 0;
        if (_0x1389("0x265") === legacyIndex) {
            /** @type {number} */
            days = days + 1;
        } else {
            if (h < days) {
                /** @type {number} */
                days = days - 1;
            }
        }
        d.val(days);
    });
}), window[_0x1389("0x54")].$document[_0x1389("0x55")](function () {
    var $existing_results = $(_0x1389("0x266"));
    if ($existing_results.length) {
        $existing_results[_0x1389("0x43")](function (canCreateDiscussions, window) {
            var $w = $(window);
            var value = $[_0x1389("0x58")]({}, $w[_0x1389("0x59")]("options"));
            $w[_0x1389("0x267")](value);
        });
    }
}), window[_0x1389("0x54")][_0x1389("0x63")].ready(function () {
    var L = window.L;
    if (L) {
        var key2layer;
        /** @type {!Array} */
        var updatedFilter = [_0x1389("0x268"), _0x1389("0x269"), _0x1389("0x26a"), _0x1389("0x26b")];
        var latlngs = _0x1389("0x26c");
        if (storage.isDark) {
            /** @type {!Array} */
            updatedFilter = ["invert:98%", _0x1389("0x26d"), _0x1389("0x26e"), _0x1389("0x26f"), _0x1389("0x270"), _0x1389("0x271")];
        }
        key2layer = window.is.ie() ? (storage.isDark && (latlngs = _0x1389("0x272")), L[_0x1389("0x273")](latlngs, {
            attribution: null,
            transparent: true
        })) : L[_0x1389("0x273")][_0x1389("0x274")](latlngs, {
            attribution: null,
            transparent: true,
            filter: updatedFilter
        });
        var indexMap = L.map(_0x1389("0x4b"), {
            center: L.latLng(10.737, 0),
            zoom: 0,
            layers: [key2layer],
            minZoom: 1,
            zoomSnap: .5
        });
        var i = L.markerClusterGroup({
            chunkedLoading: false,
            spiderfyOnMaxZoom: false
        });
        [{
            lat: 53.958332,
            long: -1.080278,
            name: _0x1389("0x275"),
            street: "Slude Strand 27",
            location: _0x1389("0x276")
        }, {
            lat: 52.958332,
            long: -1.080278,
            name: "Diana Meyer",
            street: _0x1389("0x277"),
            location: _0x1389("0x276")
        }, {
            lat: 51.958332,
            long: -1.080278,
            name: _0x1389("0x275"),
            street: _0x1389("0x277"),
            location: _0x1389("0x276")
        }, {
            lat: 53.958332,
            long: -1.080278,
            name: "Diana Meyer",
            street: "Slude Strand 27",
            location: "1130 Kobenhavn"
        }, {
            lat: 54.958332,
            long: -1.080278,
            name: _0x1389("0x275"),
            street: _0x1389("0x277"),
            location: _0x1389("0x276")
        }, {
            lat: 55.958332,
            long: -1.080278,
            name: _0x1389("0x275"),
            street: "Slude Strand 27",
            location: _0x1389("0x276")
        }, {
            lat: 53.908332,
            long: -1.080278,
            name: _0x1389("0x275"),
            street: _0x1389("0x277"),
            location: _0x1389("0x276")
        }, {
            lat: 53.008332,
            long: -1.080278,
            name: _0x1389("0x275"),
            street: "Slude Strand 27",
            location: _0x1389("0x276")
        }, {
            lat: 53.158332,
            long: -1.080278,
            name: _0x1389("0x275"),
            street: "Slude Strand 27",
            location: "1130 Kobenhavn"
        }, {
            lat: 53.000032,
            long: -1.080278,
            name: "Diana Meyer",
            street: _0x1389("0x277"),
            location: _0x1389("0x276")
        }, {
            lat: 52.292001,
            long: -2.22,
            name: "Anke Schroder",
            street: _0x1389("0x278"),
            location: _0x1389("0x279")
        }, {
            lat: 52.392001,
            long: -2.22,
            name: _0x1389("0x27a"),
            street: _0x1389("0x278"),
            location: _0x1389("0x279")
        }, {
            lat: 51.492001,
            long: -2.22,
            name: _0x1389("0x27a"),
            street: _0x1389("0x278"),
            location: _0x1389("0x279")
        }, {
            lat: 51.192001,
            long: -2.22,
            name: "Anke Schroder",
            street: _0x1389("0x278"),
            location: _0x1389("0x279")
        }, {
            lat: 52.292001,
            long: -2.22,
            name: _0x1389("0x27a"),
            street: _0x1389("0x278"),
            location: _0x1389("0x279")
        }, {
            lat: 54.392001,
            long: -2.22,
            name: "Anke Schroder",
            street: "Industrivej 54",
            location: _0x1389("0x279")
        }, {
            lat: 51.292001,
            long: -2.22,
            name: "Anke Schroder",
            street: _0x1389("0x278"),
            location: _0x1389("0x279")
        }, {
            lat: 52.102001,
            long: -2.22,
            name: _0x1389("0x27a"),
            street: _0x1389("0x278"),
            location: "4140 Borup"
        }, {
            lat: 52.202001,
            long: -2.22,
            name: _0x1389("0x27a"),
            street: _0x1389("0x278"),
            location: _0x1389("0x279")
        }, {
            lat: 51.063202,
            long: -1.308,
            name: "Tobias Vogel",
            street: "Mollebakken 33",
            location: _0x1389("0x27b")
        }, {
            lat: 51.363202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 51.463202,
            long: -1.308,
            name: "Tobias Vogel",
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 51.563202,
            long: -1.308,
            name: "Tobias Vogel",
            street: _0x1389("0x27d"),
            location: "3650 Olstykke"
        }, {
            lat: 51.763202,
            long: -1.308,
            name: "Tobias Vogel",
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 51.863202,
            long: -1.308,
            name: "Tobias Vogel",
            street: "Mollebakken 33",
            location: _0x1389("0x27b")
        }, {
            lat: 51.963202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: "Mollebakken 33",
            location: _0x1389("0x27b")
        }, {
            lat: 51.000202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 51.000202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 51.163202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: "Mollebakken 33",
            location: _0x1389("0x27b")
        }, {
            lat: 52.263202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 53.463202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 55.163202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 56.263202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: "3650 Olstykke"
        }, {
            lat: 56.463202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 56.563202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: "3650 Olstykke"
        }, {
            lat: 56.663202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: "3650 Olstykke"
        }, {
            lat: 56.763202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 56.863202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 56.963202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 57.973202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 57.163202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: "Mollebakken 33",
            location: _0x1389("0x27b")
        }, {
            lat: 51.163202,
            long: -1.308,
            name: _0x1389("0x27c"),
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 51.263202,
            long: -1.308,
            name: "Tobias Vogel",
            street: "Mollebakken 33",
            location: _0x1389("0x27b")
        }, {
            lat: 51.363202,
            long: -1.308,
            name: "Tobias Vogel",
            street: _0x1389("0x27d"),
            location: _0x1389("0x27b")
        }, {
            lat: 51.409,
            long: -2.647,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.68,
            long: -1.49,
            name: "Richard Hendricks",
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 50.259998,
            long: -5.051,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 54.906101,
            long: -1.38113,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.383331,
            long: -1.466667,
            name: "Richard Hendricks",
            street: "37 Seafield Place",
            location: _0x1389("0x280")
        }, {
            lat: 53.483002,
            long: -2.2931,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 51.509865,
            long: -.118092,
            name: "Richard Hendricks",
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 51.109865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 51.209865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: "London"
        }, {
            lat: 51.309865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 51.409865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 51.609865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: "37 Seafield Place",
            location: _0x1389("0x280")
        }, {
            lat: 51.709865,
            long: -.118092,
            name: "Richard Hendricks",
            street: "37 Seafield Place",
            location: _0x1389("0x280")
        }, {
            lat: 51.809865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 51.909865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: "London"
        }, {
            lat: 52.109865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: "London"
        }, {
            lat: 52.209865,
            long: -.118092,
            name: "Richard Hendricks",
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 52.309865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: "37 Seafield Place",
            location: _0x1389("0x280")
        }, {
            lat: 52.409865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 52.509865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: "37 Seafield Place",
            location: _0x1389("0x280")
        }, {
            lat: 52.609865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 52.709865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: "London"
        }, {
            lat: 52.809865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: "London"
        }, {
            lat: 52.909865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: "37 Seafield Place",
            location: _0x1389("0x280")
        }, {
            lat: 52.519865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: "37 Seafield Place",
            location: _0x1389("0x280")
        }, {
            lat: 52.529865,
            long: -.118092,
            name: "Richard Hendricks",
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 52.539865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: "37 Seafield Place",
            location: _0x1389("0x280")
        }, {
            lat: 53.549865,
            long: -.118092,
            name: "Richard Hendricks",
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 52.549865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.109865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: "37 Seafield Place",
            location: _0x1389("0x280")
        }, {
            lat: 53.209865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.319865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.329865,
            long: -.118092,
            name: "Richard Hendricks",
            street: "37 Seafield Place",
            location: _0x1389("0x280")
        }, {
            lat: 53.409865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.559865,
            long: -.118092,
            name: "Richard Hendricks",
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.619865,
            long: -.118092,
            name: "Richard Hendricks",
            street: "37 Seafield Place",
            location: _0x1389("0x280")
        }, {
            lat: 53.629865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: "37 Seafield Place",
            location: _0x1389("0x280")
        }, {
            lat: 53.639865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.649865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.669865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.669865,
            long: -.118092,
            name: "Richard Hendricks",
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.719865,
            long: -.118092,
            name: "Richard Hendricks",
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.739865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.749865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.759865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: "37 Seafield Place",
            location: _0x1389("0x280")
        }, {
            lat: 53.769865,
            long: -.118092,
            name: "Richard Hendricks",
            street: "37 Seafield Place",
            location: "London"
        }, {
            lat: 53.769865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.819865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.829865,
            long: -.118092,
            name: _0x1389("0x27e"),
            street: _0x1389("0x27f"),
            location: _0x1389("0x280")
        }, {
            lat: 53.483959,
            long: -2.244644,
            name: _0x1389("0x281"),
            street: _0x1389("0x282")
        }, {
            lat: 40.737,
            long: -73.923,
            name: "Marshall D. Lewis",
            street: _0x1389("0x283"),
            location: _0x1389("0x284")
        }, {
            lat: 39.737,
            long: -73.923,
            name: _0x1389("0x285"),
            street: "1489 Michigan Avenue",
            location: "Michigan"
        }, {
            lat: 38.737,
            long: -73.923,
            name: _0x1389("0x285"),
            street: _0x1389("0x283"),
            location: _0x1389("0x284")
        }, {
            lat: 37.737,
            long: -73.923,
            name: _0x1389("0x285"),
            street: _0x1389("0x283"),
            location: _0x1389("0x284")
        }, {
            lat: 40.737,
            long: -73.923,
            name: "Marshall D. Lewis",
            street: "1489 Michigan Avenue",
            location: _0x1389("0x284")
        }, {
            lat: 41.737,
            long: -73.923,
            name: "Marshall D. Lewis",
            street: _0x1389("0x283"),
            location: _0x1389("0x284")
        }, {
            lat: 42.737,
            long: -73.923,
            name: _0x1389("0x285"),
            street: _0x1389("0x283"),
            location: "Michigan"
        }, {
            lat: 43.737,
            long: -73.923,
            name: _0x1389("0x285"),
            street: _0x1389("0x283"),
            location: "Michigan"
        }, {
            lat: 44.737,
            long: -73.923,
            name: _0x1389("0x285"),
            street: _0x1389("0x283"),
            location: _0x1389("0x284")
        }, {
            lat: 45.737,
            long: -73.923,
            name: _0x1389("0x285"),
            street: "1489 Michigan Avenue",
            location: _0x1389("0x284")
        }, {
            lat: 46.7128,
            long: 74.006,
            name: _0x1389("0x286"),
            street: _0x1389("0x287"),
            location: "Fort Lauderdale"
        }, {
            lat: 40.7128,
            long: 74.1181,
            name: _0x1389("0x286"),
            street: _0x1389("0x287"),
            location: _0x1389("0x288")
        }, {
            lat: 14.235,
            long: 51.9253,
            name: _0x1389("0x289"),
            street: "3186 Levy Court",
            location: _0x1389("0x28a")
        }, {
            lat: 15.235,
            long: 51.9253,
            name: _0x1389("0x289"),
            street: _0x1389("0x28b"),
            location: "North Reading"
        }, {
            lat: 16.235,
            long: 51.9253,
            name: _0x1389("0x289"),
            street: "3186 Levy Court",
            location: _0x1389("0x28a")
        }, {
            lat: 14.235,
            long: 51.9253,
            name: _0x1389("0x289"),
            street: _0x1389("0x28b"),
            location: _0x1389("0x28a")
        }, {
            lat: 15.8267,
            long: 47.9218,
            name: "Hope A. Atkins",
            street: _0x1389("0x28c"),
            location: "Seattle"
        }, {
            lat: 15.9267,
            long: 47.9218,
            name: _0x1389("0x28d"),
            street: "3715 Hillcrest Drive",
            location: "Seattle"
        }, {
            lat: 23.4425,
            long: 58.4438,
            name: _0x1389("0x28e"),
            street: _0x1389("0x28f"),
            location: _0x1389("0x290")
        }, {
            lat: 23.5425,
            long: 58.3438,
            name: "xxxSamuel R. Bailey",
            street: _0x1389("0x28f"),
            location: _0x1389("0x290")
        }, {
            lat: -37.8927369333,
            long: 175.4087452333,
            name: _0x1389("0x28e"),
            street: "3228 Glory Road",
            location: "xxxNashville"
        }, {
            lat: -38.9064188833,
            long: 175.4441556833,
            name: _0x1389("0x28e"),
            street: "3228 Glory Road",
            location: "xxxNashville"
        }, {
            lat: -12.409874,
            long: -65.596832,
            name: _0x1389("0x291"),
            street: _0x1389("0x292"),
            location: "Dublin"
        }, {
            lat: -22.090887,
            long: -57.411827,
            name: _0x1389("0x293"),
            street: "4800 North Bend River Road",
            location: _0x1389("0x294")
        }, {
            lat: -19.019585,
            long: -65.261963,
            name: _0x1389("0x295"),
            street: _0x1389("0x296"),
            location: _0x1389("0x297")
        }, {
            lat: -16.500093,
            long: -68.214684,
            name: _0x1389("0x295"),
            street: _0x1389("0x296"),
            location: _0x1389("0x297")
        }, {
            lat: -17.413977,
            long: -66.165321,
            name: _0x1389("0x295"),
            street: _0x1389("0x296"),
            location: "Appleton"
        }, {
            lat: -16.489689,
            long: -68.119293,
            name: _0x1389("0x295"),
            street: "4068 Hartland Avenue",
            location: _0x1389("0x297")
        }, {
            lat: 54.766323,
            long: 3.08603729,
            name: _0x1389("0x295"),
            street: _0x1389("0x296"),
            location: _0x1389("0x297")
        }, {
            lat: 54.866323,
            long: 3.08603729,
            name: _0x1389("0x295"),
            street: _0x1389("0x296"),
            location: _0x1389("0x297")
        }, {
            lat: 49.537685,
            long: 3.08603729,
            name: "Russ E. Panek",
            street: _0x1389("0x296"),
            location: _0x1389("0x297")
        }, {
            lat: 54.715424,
            long: .509207,
            name: _0x1389("0x295"),
            street: _0x1389("0x296"),
            location: "Appleton"
        }, {
            lat: 44.891666,
            long: 10.136665,
            name: _0x1389("0x295"),
            street: "4068 Hartland Avenue",
            location: _0x1389("0x297")
        }, {
            lat: 48.078335,
            long: 14.535004,
            name: _0x1389("0x295"),
            street: "4068 Hartland Avenue",
            location: "Appleton"
        }, {
            lat: -26.358055,
            long: 27.398056,
            name: "Russ E. Panek",
            street: _0x1389("0x296"),
            location: _0x1389("0x297")
        }, {
            lat: -29.1,
            long: 26.2167,
            name: _0x1389("0x298"),
            street: _0x1389("0x299"),
            location: "Northbrook"
        }, {
            lat: -29.883333,
            long: 31.049999,
            name: "Wilbur J. Dry",
            street: _0x1389("0x299"),
            location: _0x1389("0x29a")
        }, {
            lat: -26.266111,
            long: 27.865833,
            name: "Wilbur J. Dry",
            street: _0x1389("0x299"),
            location: _0x1389("0x29a")
        }, {
            lat: -29.087217,
            long: 26.154898,
            name: _0x1389("0x298"),
            street: _0x1389("0x299"),
            location: _0x1389("0x29a")
        }, {
            lat: -33.958252,
            long: 25.619022,
            name: _0x1389("0x298"),
            street: "2043 Jadewood Drive",
            location: _0x1389("0x29a")
        }, {
            lat: -33.977074,
            long: 22.457581,
            name: _0x1389("0x298"),
            street: "2043 Jadewood Drive",
            location: "Northbrook"
        }, {
            lat: -26.563404,
            long: 27.844164,
            name: "Wilbur J. Dry",
            street: _0x1389("0x299"),
            location: "Northbrook"
        }, {
            lat: 51.21389,
            long: -102.462776,
            name: "Joseph B. Poole",
            street: _0x1389("0x29b"),
            location: "Wichita Falls"
        }, {
            lat: 52.321945,
            long: -106.584167,
            name: "Joseph B. Poole",
            street: _0x1389("0x29b"),
            location: _0x1389("0x29c")
        }, {
            lat: 50.288055,
            long: -107.793892,
            name: _0x1389("0x29d"),
            street: _0x1389("0x29b"),
            location: _0x1389("0x29c")
        }, {
            lat: 52.7575,
            long: -108.28611,
            name: "Joseph B. Poole",
            street: "3364 Lunetta Street",
            location: _0x1389("0x29c")
        }, {
            lat: 50.393333,
            long: -105.551941,
            name: _0x1389("0x29d"),
            street: "3364 Lunetta Street",
            location: _0x1389("0x29c")
        }, {
            lat: 50.930557,
            long: -102.807777,
            name: "Joseph B. Poole",
            street: "3364 Lunetta Street",
            location: _0x1389("0x29c")
        }, {
            lat: 52.856388,
            long: -104.610001,
            name: _0x1389("0x29d"),
            street: _0x1389("0x29b"),
            location: "Wichita Falls"
        }, {
            lat: 52.289722,
            long: -106.666664,
            name: _0x1389("0x29d"),
            street: "3364 Lunetta Street",
            location: _0x1389("0x29c")
        }, {
            lat: 52.201942,
            long: -105.123055,
            name: "Joseph B. Poole",
            street: _0x1389("0x29b"),
            location: _0x1389("0x29c")
        }, {
            lat: 53.278046,
            long: -110.00547,
            name: _0x1389("0x29d"),
            street: _0x1389("0x29b"),
            location: _0x1389("0x29c")
        }, {
            lat: 49.13673,
            long: -102.990959,
            name: _0x1389("0x29d"),
            street: _0x1389("0x29b"),
            location: "Wichita Falls"
        }, {
            lat: 45.484531,
            long: -73.597023,
            name: _0x1389("0x29e"),
            street: _0x1389("0x29f"),
            location: _0x1389("0x2a0")
        }, {
            lat: 45.266666,
            long: -71.900002,
            name: _0x1389("0x29e"),
            street: _0x1389("0x29f"),
            location: _0x1389("0x2a0")
        }, {
            lat: 45.349998,
            long: -72.51667,
            name: "Claudette D. Nowakowski",
            street: _0x1389("0x29f"),
            location: _0x1389("0x2a0")
        }, {
            lat: 47.333332,
            long: -79.433334,
            name: _0x1389("0x29e"),
            street: _0x1389("0x29f"),
            location: _0x1389("0x2a0")
        }, {
            lat: 45.400002,
            long: -74.033333,
            name: _0x1389("0x29e"),
            street: "3742 Farland Avenue",
            location: _0x1389("0x2a0")
        }, {
            lat: 45.683334,
            long: -73.433334,
            name: _0x1389("0x29e"),
            street: _0x1389("0x29f"),
            location: _0x1389("0x2a0")
        }, {
            lat: 48.099998,
            long: -77.783333,
            name: _0x1389("0x29e"),
            street: _0x1389("0x29f"),
            location: _0x1389("0x2a0")
        }, {
            lat: 45.5,
            long: -72.316666,
            name: _0x1389("0x29e"),
            street: _0x1389("0x29f"),
            location: _0x1389("0x2a0")
        }, {
            lat: 46.349998,
            long: -72.550003,
            name: "Claudette D. Nowakowski",
            street: _0x1389("0x29f"),
            location: _0x1389("0x2a0")
        }, {
            lat: 48.119999,
            long: -69.18,
            name: _0x1389("0x29e"),
            street: _0x1389("0x29f"),
            location: "San Antonio"
        }, {
            lat: 45.599998,
            long: -75.25,
            name: _0x1389("0x29e"),
            street: "3742 Farland Avenue",
            location: _0x1389("0x2a0")
        }, {
            lat: 46.099998,
            long: -71.300003,
            name: _0x1389("0x29e"),
            street: "3742 Farland Avenue",
            location: "San Antonio"
        }, {
            lat: 45.700001,
            long: -73.633331,
            name: _0x1389("0x29e"),
            street: _0x1389("0x29f"),
            location: _0x1389("0x2a0")
        }, {
            lat: 47.68,
            long: -68.879997,
            name: _0x1389("0x29e"),
            street: _0x1389("0x29f"),
            location: _0x1389("0x2a0")
        }, {
            lat: 46.716667,
            long: -79.099998,
            name: _0x1389("0x2a1")
        }, {
            lat: 45.016666,
            long: -72.099998,
            name: "299"
        }][_0x1389("0x4b")](function (coords) {
            var u = coords[_0x1389("0x121")];
            var line = coords[_0x1389("0x34")];
            var UTMEasting = coords[_0x1389("0x2a2")];
            var id = L[_0x1389("0x2a3")](new L.LatLng(coords[_0x1389("0x2a4")], coords.long), {
                name: u,
                location: line
            });
            /** @type {string} */
            var button2 = _0x1389("0x2a5") + u + _0x1389("0x2a6") + UTMEasting + ", " + line + _0x1389("0x2a7");
            var button2Component = L[_0x1389("0x2a8")]({
                minWidth: 180
            })[_0x1389("0x2a9")](button2);
            return id[_0x1389("0x2aa")](button2Component), i[_0x1389("0x2ab")](id), true;
        });
        indexMap[_0x1389("0x2ab")](i);
    }
}), utils.$document.ready(function () {
    if ($(_0x1389("0x2ac")).length) {
        lightbox[_0x1389("0x2ad")]({
            resizeDuration: 400,
            wrapAround: true,
            fadeDuration: 300,
            imageFadeDuration: 300
        });
    }
});
/**
 * @param {!Object} value
 * @param {boolean} key
 * @return {?}
 */
var setItemToStore = function store_set(value, key) {
    return localStorage.setItem(value, JSON[_0x1389("0x2ae")](key));
};
window.utils.$document[_0x1389("0x55")](function () {
    /**
     * @param {string} name
     * @return {undefined}
     */
    function init(name) {
        that[_0x1389("0x63")].on("change", name, function (arrayOfSelects) {
            var url1IsSimple = $(coloring)[_0x1389("0x1a")]("checked");
            var url2IsSimple = $(table).prop(_0x1389("0x16"));
            var value = $(arrayOfSelects[_0x1389("0x8f")])[_0x1389("0x59")](_0x1389("0x2af"))[_0x1389("0x2b0")]();
            var config = window[_0x1389("0x34")][_0x1389("0x10d")];
            if (url1IsSimple && url2IsSimple) {
                var rewrittenURL = config[_0x1389("0x46")](value, _0x1389("0x2b1"));
                window[_0x1389("0x34")].href = rewrittenURL;
            } else {
                if (url1IsSimple && !url2IsSimple) {
                    var thumbnailChart = config.replace(value, "dark");
                    window[_0x1389("0x34")][_0x1389("0x10d")] = thumbnailChart;
                } else {
                    if (url1IsSimple || url2IsSimple) {
                        if (!url1IsSimple && url2IsSimple) {
                            var rewrittenURL = config[_0x1389("0x46")](value, _0x1389("0x2b2"));
                            window[_0x1389("0x34")].href = rewrittenURL;
                        }
                    } else {
                        var name = config.replace(value, "default");
                        window[_0x1389("0x34")][_0x1389("0x10d")] = name;
                    }
                }
            }
        });
    }
    var wsFunction;
    var realVal;
    var validationVM;
    /** @type {!Window} */
    var e = window;
    var that = e.utils;
    /** @type {!Location} */
    var latlng = e.location;
    var v = storage[_0x1389("0x18")];
    var coloring = _0x1389("0x2b3");
    /** @type {string} */
    var table = "#mode-rtl";
    var local_mobile_core_user_remove_user_device = _0x1389("0x19");
    init(coloring);
    init(table);
    wsFunction = local_mobile_core_user_remove_user_device;
    realVal = _0x1389("0x18");
    validationVM = v;
    that.$document.on("change", wsFunction, function () {
        setItemToStore(realVal, !validationVM);
        latlng[_0x1389("0x2b4")]();
    });
}), window[_0x1389("0x54")][_0x1389("0x63")][_0x1389("0x55")](function () {
    var $realtime = $(_0x1389("0x2b5"));
    if ($realtime[_0x1389("0x5")]) {
        $realtime[_0x1389("0x43")](function (canCreateDiscussions, editContainer) {
            var khover = $(editContainer);
            var item = $[_0x1389("0x58")]({
                container: editContainer,
                path: _0x1389("0x2b6"),
                renderer: _0x1389("0x7b"),
                loop: true,
                autoplay: true,
                name: _0x1389("0x7c")
            }, khover.data(_0x1389("0x57")));
            window[_0x1389("0x7d")].loadAnimation(item);
        });
    }
}), window[_0x1389("0x54")][_0x1389("0x63")][_0x1389("0x55")](function () {
    /**
     * @param {?} target
     * @return {undefined}
     */
    function callback(target) {
        if (0 < target[_0x1389("0x41")]() && n) {
            tools[_0x1389("0x6d")](el);
        } else {
            tools.removeClass(el);
        }
    }
    /**
     * @return {undefined}
     */
    function _insert_template() {
        var artistTrack = $(c)[_0x1389("0x42")]() + 30;
        $(d)[_0x1389("0x2c6")](artistTrack);
    }
    var filter_error;
    var that = window.utils;
    var win = that.$window;
    var data = that[_0x1389("0x44")];
    /** @type {boolean} */
    var n = true;
    var el = _0x1389("0x2b7");
    var val = _0x1389("0x2b8");
    var GET_AUTH_URL_TIMEOUT = _0x1389("0x2b9");
    var i = _0x1389("0x2ba");
    var reconnectingCallback = _0x1389("0x2bb");
    var script = _0x1389("0x2bc");
    /** @type {string} */
    var delete_behavior_form = ".navbar-vertical-collapsed";
    var c = _0x1389("0x2bd");
    var d = _0x1389("0x2be");
    var selector = _0x1389("0x2bf");
    var b = _0x1389("0x2c0");
    var PROCESS_MESSAGE = _0x1389("0x64");
    var $closingAreaLeft = _0x1389("0x88");
    var $scrollerWrap = _0x1389("0x2c1");
    var $closingAreaRight = _0x1389("0x2c2");
    var collapseEvent = _0x1389("0x2c3");
    var $el = $("html");
    var tools = $(".navbar:not(.navbar-vertical)");
    var process = $(script);
    var k = $(i)[_0x1389("0x33")](_0x1389("0x66"));
    if (k) {
        filter_error = data[k[_0x1389("0x11")](" ")[_0x1389("0x67")](function (canCreateDiscussions) {
            return 0 === canCreateDiscussions[_0x1389("0x13")](_0x1389("0x68"));
        }).pop()[_0x1389("0x11")]("-").pop()];
    }
    win.on(b, function () {
        return callback(win);
    });
    process.on(PROCESS_MESSAGE, function () {
        /** @type {boolean} */
        n = true;
        callback(process);
    });
    process.on($closingAreaRight, function () {
        if (win[_0x1389("0x42")]() < filter_error) {
            /** @type {boolean} */
            n = false;
            callback(win);
        }
    });
    process.on(collapseEvent, function () {
        /** @type {boolean} */
        n = !(process[_0x1389("0x6b")]("show") && win[_0x1389("0x42")]() < filter_error);
        callback(win);
    });
    process[_0x1389("0x2c4")](function (arrayOfSelects) {
        setTimeout(function () {
            if ($(arrayOfSelects[_0x1389("0xdf")]).is(_0x1389("0x2c5"))) {
                $(delete_behavior_form)[_0x1389("0x6d")](GET_AUTH_URL_TIMEOUT);
            }
        }, 100);
    }, function () {
        $(delete_behavior_form)[_0x1389("0x69")](GET_AUTH_URL_TIMEOUT);
    });
    $(document).on($closingAreaLeft, reconnectingCallback, function () {
        /** @type {*} */
        var hiddenBefore = JSON.parse(localStorage[_0x1389("0x15")]("isNavbarVerticalCollapsed"));
        localStorage.setItem(_0x1389("0x2c7"), !hiddenBefore);
        $el[_0x1389("0x6f")](val);
        _insert_template();
        var simple = $(selector);
        if (simple[_0x1389("0x5")]) {
            simple.owlCarousel(_0x1389("0x2c8"));
        }
        var elems = document[_0x1389("0x242")]("[data-echart-responsive]");
        if (elems.length) {
            $[_0x1389("0x43")](elems, function (canCreateDiscussions, e) {
                if ($(e)[_0x1389("0x59")](_0x1389("0x2c9"))) {
                    window[_0x1389("0x178")][_0x1389("0x179")](e)[_0x1389("0x2c1")]();
                }
            });
        }
    });
    win.on($scrollerWrap, function () {
        _insert_template();
    });
});
var $carousel = $(".owl-carousel");
utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    if ($carousel[_0x1389("0x5")]) {
        var groupPlansQuery = _0x1389("0x2ca");
        var map = {
            zanimTimeline: function displayGroup(Group) {
                return Group.find(groupPlansQuery);
            },
            play: function _processRemaining(data) {
                if (0 !== this[_0x1389("0x2cb")](data).length) {
                    data[_0x1389("0x7a")](".owl-item.active" + _0x1389("0x2cc") + groupPlansQuery)[_0x1389("0x2cd")](function (canCreateDiscussions) {
                        canCreateDiscussions[_0x1389("0x85")]();
                    });
                }
            },
            kill: function $get(mmCoreSplitViewBlock) {
                if (0 !== this[_0x1389("0x2cb")](mmCoreSplitViewBlock)[_0x1389("0x5")]) {
                    this[_0x1389("0x2cb")](mmCoreSplitViewBlock).zanimation(function (canCreateDiscussions) {
                        canCreateDiscussions[_0x1389("0x2ce")]();
                    });
                }
            }
        };
        $carousel[_0x1389("0x43")](function (canCreateDiscussions, e) {
            var t = $(e);
            var useQuery = t.data(_0x1389("0x57")) || {};
            if (utils[_0x1389("0x2cf")]()) {
                /** @type {boolean} */
                useQuery[_0x1389("0x2b2")] = true;
            }
            if (!useQuery[_0x1389("0x2d0")]) {
                /** @type {!Array} */
                useQuery[_0x1389("0x2d0")] = [_0x1389("0x2d1"), _0x1389("0x2d2")];
            }
            /** @type {boolean} */
            useQuery[_0x1389("0x2d3")] = true;
            t[_0x1389("0x2d4")]($[_0x1389("0x58")](useQuery || {}, {
                onInitialized: function ThreeDView($container) {
                    map[_0x1389("0x85")]($($container[_0x1389("0x8f")]));
                },
                onTranslate: function initAdsInfos($scope) {
                    map[_0x1389("0x2ce")]($($scope.target));
                },
                onTranslated: function onPageActionClicked(tab) {
                    map[_0x1389("0x85")]($(tab[_0x1389("0x8f")]));
                }
            }));
        });
    }
    var thread_rows = $(_0x1389("0x2d5"));
    if (thread_rows[_0x1389("0x5")]) {
        thread_rows.each(function (canCreateDiscussions, e) {
            var t = $(e);
            var a = $(t[_0x1389("0x59")](_0x1389("0x2d6")));
            a[_0x1389("0x7a")](_0x1389("0x2d7")).addClass(_0x1389("0x2d8"));
            a.on("click", _0x1389("0x2d9"), function (arrayOfSelects) {
                var onSizeChange = $(arrayOfSelects[_0x1389("0x8f")])[_0x1389("0x263")](".owl-item")[_0x1389("0xa3")]();
                $(_0x1389("0x2da"))[_0x1389("0x69")](_0x1389("0x2d8"));
                $(arrayOfSelects[_0x1389("0x8f")])[_0x1389("0x263")](_0x1389("0x2da")).addClass(_0x1389("0x2d8"));
                t[_0x1389("0x2db")](_0x1389("0x2dc"), onSizeChange, 500);
            });
            t.on(_0x1389("0x2dd"), function (template_args) {
                var e = template_args.item[_0x1389("0xa3")];
                var id = e + 1;
                $(_0x1389("0x2da"))[_0x1389("0x69")](_0x1389("0x2d8"));
                a[_0x1389("0x7a")](_0x1389("0x2de") + id + ")")[_0x1389("0x6d")](_0x1389("0x2d8"));
                a.trigger(_0x1389("0x2dc"), e, 500);
            });
        });
    }
}), window[_0x1389("0x54")][_0x1389("0x63")][_0x1389("0x55")](function () {
    if (window.is.ie() || window.is[_0x1389("0x103")]()) {
        /** @type {!NodeList<Element>} */
        var fields_to_add = document.querySelectorAll(".perfect-scrollbar");
        if (fields_to_add[_0x1389("0x5")]) {
            $.each(fields_to_add, function (canCreateDiscussions, e) {
                var suffix = $(e)[_0x1389("0x59")]("options");
                var methods = $[_0x1389("0x58")]({
                    wheelPropagation: true,
                    suppressScrollX: true,
                    suppressScrollY: false
                }, suffix);
                (new PerfectScrollbar(e, methods))[_0x1389("0xaa")]();
            });
        }
    }
}), utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    var $realtime = $(_0x1389("0x2df"));
    return $realtime[_0x1389("0x5")] && $realtime[_0x1389("0x43")](function (canCreateDiscussions, e) {
        return new Plyr($(e), {
            captions: {
                active: true
            }
        });
    }), false;
}), utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    var extend = window._[_0x1389("0x182")];
    var $realtime = $(_0x1389("0x2e0"));
    if ($realtime[_0x1389("0x5")]) {
        $realtime[_0x1389("0x43")](function (canCreateDiscussions, url) {
            /**
             * @return {?}
             */
            function iOSInfo() {
                return r || (utils[_0x1389("0xe8")](url) || utils[_0x1389("0x105")][_0x1389("0x106")](/puppeteer/i)) && (route[_0x1389("0x24c")](options[_0x1389("0x2eb")] / 100), r = true), r;
            }
            var opts = $(url)[_0x1389("0x59")](_0x1389("0x57"));
            var defaults = {
                strokeWidth: 2,
                trailWidth: 2,
                trailColor: utils.grays[200],
                easing: _0x1389("0x2e1"),
                duration: 3e3,
                svgStyle: {
                    "stroke-linecap": "round",
                    display: "block",
                    width: _0x1389("0x73")
                },
                text: {
                    autoStyleContainer: false
                },
                step: function addError(columnNo, error) {
                    var t = Math[_0x1389("0x2e2")](100 * error.value());
                    error[_0x1389("0x2e3")](_0x1389("0x2e4") + t + _0x1389("0x2e5") + (opts[_0x1389("0xca")] || "") + _0x1389("0x2e6"));
                }
            };
            if (window.is.ie()) {
                opts[_0x1389("0x2e7")] = utils[_0x1389("0x49")][_0x1389("0x53")];
            }
            var options = extend(defaults, opts);
            var route = new(ProgressBar[_0x1389("0x2e8")])(url, options);
            if (!window.is.ie()) {
                route[_0x1389("0x7b")][_0x1389("0x2e9")](_0x1389("0x2ea"), '<defs>\n          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">\n            <stop offset="0%" stop-color=\'#1970e2\' />\n            <stop offset="100%" stop-color=\'#4695ff\' />\n          </linearGradient>\n        </defs>');
            }
            /** @type {boolean} */
            var r = false;
            iOSInfo();
            utils[_0x1389("0x3f")].scroll(function () {
                iOSInfo();
            });
        });
    }
    var thread_rows = $(_0x1389("0x2ec"));
    if (thread_rows[_0x1389("0x5")]) {
        thread_rows.each(function (canCreateDiscussions, url) {
            /**
             * @return {?}
             */
            function iOSInfo() {
                return o || (utils[_0x1389("0xe8")](url) || utils[_0x1389("0x105")].match(/puppeteer/i)) && (_qt[_0x1389("0x24c")](pubPromise.progress / 100), o = true), o;
            }
            var pubPromise = $(url)[_0x1389("0x59")](_0x1389("0x57"));
            var _qt = new(ProgressBar[_0x1389("0x2ed")])(url, {
                strokeWidth: 1,
                easing: "easeInOut",
                duration: 3e3,
                color: "#333",
                trailColor: _0x1389("0x2ee"),
                trailWidth: 1,
                svgStyle: {
                    width: "100%",
                    height: _0x1389("0x2ef"),
                    "stroke-linecap": _0x1389("0x2e2"),
                    "border-radius": _0x1389("0x2f0")
                },
                text: {
                    style: {
                        transform: null
                    },
                    autoStyleContainer: false
                },
                from: {
                    color: _0x1389("0x2f1")
                },
                to: {
                    color: _0x1389("0x2f2")
                },
                step: function TYPE_BYTES(buffer, value) {
                    value[_0x1389("0x2e3")](_0x1389("0x2e4") + Math[_0x1389("0x2e2")](100 * value[_0x1389("0xf")]()) + "<b>%</b></span> <span>" + pubPromise[_0x1389("0xca")] + _0x1389("0x2e6"));
                }
            });
            /** @type {boolean} */
            var o = false;
            iOSInfo();
            utils[_0x1389("0x3f")][_0x1389("0x64")](function () {
                iOSInfo();
            });
        });
    }
}), window[_0x1389("0x54")][_0x1389("0x63")][_0x1389("0x55")](function () {
    var $realtime = $(_0x1389("0x2f3"));
    if ($realtime[_0x1389("0x5")]) {
        $realtime[_0x1389("0x43")](function (canCreateDiscussions, text) {
            var policy = $(text);
            var artistTrack = $[_0x1389("0x58")]({
                starHalf: _0x1389("0x2f4"),
                starOff: _0x1389("0x2f5"),
                starOn: _0x1389("0x2f6"),
                starType: _0x1389("0x2f7"),
                size: 30
            }, policy[_0x1389("0x59")](_0x1389("0x57")));
            $(text)[_0x1389("0x2f8")](artistTrack);
        });
    }
}), window[_0x1389("0x54")][_0x1389("0x63")].ready(function () {
    var $realtime = $(".selectpicker");
    if ($realtime[_0x1389("0x5")]) {
        $realtime[_0x1389("0x43")](function (canCreateDiscussions, e) {
            var t = $(e);
            var param = $[_0x1389("0x58")]({}, t.data(_0x1389("0x57")));
            t[_0x1389("0x2f9")](param);
        });
    }
}), utils.$document.ready(function () {
    Stickyfill.add($(_0x1389("0x2fa")));
    Stickyfill[_0x1389("0x25d")]($(_0x1389("0x2fb")));
}), utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    var $existing_results = $(_0x1389("0x2fc"));
    if ($existing_results.length) {
        $existing_results[_0x1389("0x43")](function (canCreateDiscussions, tile) {
            var options = $(tile);
            var datum = _objectSpread({}, options[_0x1389("0x59")](_0x1389("0x57")));
            options[_0x1389("0x2fd")](datum);
        });
    }
}), utils.$document.ready(function () {
    var thread_rows = $(_0x1389("0x2fe"));
    if (thread_rows[_0x1389("0x5")]) {
        /**
         * @param {?} $item
         * @param {?} $container
         * @param {!Object} viewport
         * @return {undefined}
         */
        var _handleScrollStopEvent = function _isWithinViewport($item, $container, viewport) {
            var _ileft = viewport.position()[_0x1389("0x3a")];
            /** @type {number} */
            var _caption_margin = $container[_0x1389("0x10c")](body)[_0x1389("0x2c6")]() - (_ileft + viewport.outerWidth());
            $item[_0x1389("0x72")]({
                left: _ileft,
                right: _caption_margin
            });
        };
        var body = _0x1389("0x2ff");
        var a = _0x1389("0x300");
        var cls = _0x1389("0x301");
        var id = _0x1389("0x302");
        var real_type = _0x1389("0x303");
        var activeClass = _0x1389("0x304");
        thread_rows.each(function (canCreateDiscussions, dom_el) {
            var $this = $(dom_el);
            var parent = $this.children(body);
            var container = parent.children(a + "." + id);
            parent[_0x1389("0x305")](_0x1389("0x306") + activeClass + "></div>\n      ");
            var event = parent[_0x1389("0x10c")]("." + activeClass);
            var maxThreshold = container[_0x1389("0xa3")]();
            _handleScrollStopEvent(event, $this, container);
            parent.children(a)[_0x1389("0x88")](function (arrayOfSelects) {
                var value = (container = $(arrayOfSelects[_0x1389("0xdf")]))[_0x1389("0xa3")]();
                var types = $this.children(cls)[_0x1389("0x10c")]().eq(value);
                container[_0x1389("0x307")]()[_0x1389("0x69")](id);
                container.addClass(id);
                types[_0x1389("0x307")]()[_0x1389("0x69")](id);
                types[_0x1389("0x6d")](id);
                _handleScrollStopEvent(event, $this, container);
                if (value - maxThreshold <= 0) {
                    event[_0x1389("0x6d")](real_type);
                } else {
                    event[_0x1389("0x69")](real_type);
                }
                maxThreshold = value;
            });
            utils[_0x1389("0x3f")].on("resize", function () {
                _handleScrollStopEvent(event, $this, container);
            });
        });
    }
    $(_0x1389("0x308"))[_0x1389("0x88")](function (arrayOfSelects) {
        var $realtime = $(arrayOfSelects[_0x1389("0xdf")]);
        $($realtime[_0x1389("0x59")](_0x1389("0x309"))).trigger(_0x1389("0x88"));
    });
}), window[_0x1389("0x54")][_0x1389("0x63")].ready(function () {
    if ($(".tinymce")[_0x1389("0x5")]) {
        window[_0x1389("0x30a")][_0x1389("0x179")]({
            selector: _0x1389("0x30b"),
            height: "50vh",
            menubar: false,
            skin: utils[_0x1389("0x30c")][_0x1389("0x30a")][_0x1389("0x4f")],
            content_style: _0x1389("0x30d") + utils[_0x1389("0x17c")].black + " }",
            mobile: {
                theme: "mobile",
                toolbar: [_0x1389("0x30e"), _0x1389("0x30f")]
            },
            statusbar: false,
            plugins: "link,image,lists,table,media",
            toolbar: _0x1389("0x310")
        });
    }
    $("#progress-toggle-animation").on(_0x1389("0x88"), function () {
        return $(_0x1389("0x311"))[_0x1389("0x6f")]("progress-bar-animated");
    });
}), utils.$document.ready(function () {
    $(_0x1389("0x312"))[_0x1389("0x313")]();
}), window.utils.$document[_0x1389("0x55")](function () {
    $("[data-notification]")[_0x1389("0x43")](function (canCreateDiscussions, e) {
        var options = window[_0x1389("0x314")];
        var t = $(e);
        var o = t[_0x1389("0x59")]("notification");
        var opts = {
            closeButton: true,
            newestOnTop: false,
            positionClass: "toast-bottom-right"
        };
        t.on(_0x1389("0x88"), function () {
            var onetype = o[_0x1389("0x262")];
            var index = o[_0x1389("0x315")];
            var item = o[_0x1389("0x316")];
            var filter = $.extend(opts, o);
            switch (options.options[_0x1389("0x317")] !== filter[_0x1389("0x317")] && options[_0x1389("0x318")](), options[_0x1389("0x57")] = filter, onetype) {
                case _0x1389("0xb3"):
                    options[_0x1389("0xb3")](item, index);
                    break;
                case _0x1389("0xb0"):
                    options.warning(item, index);
                    break;
                case _0x1389("0x319"):
                    options[_0x1389("0x319")](item, index);
                    break;
                default:
                    options[_0x1389("0xb1")](item, index);
            }
        });
    });
}), utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    $(_0x1389("0x31a"))[_0x1389("0x31b")]();
    $('[data-toggle="popover"]')[_0x1389("0x31c")]();
    $(_0x1389("0x30")).tooltip({
        selector: "[data-toggle=tooltip]"
    });
}), utils[_0x1389("0x63")].ready(function () {
    var thread_rows = $(_0x1389("0x31d"));
    if (thread_rows[_0x1389("0x5")]) {
        thread_rows.each(function (canCreateDiscussions, e) {
            return new Typed(e, {
                strings: $(e)[_0x1389("0x59")](_0x1389("0x31e")),
                typeSpeed: 100,
                loop: true,
                backDelay: 1500
            });
        });
    }
}), utils[_0x1389("0x63")][_0x1389("0x55")](function () {
    var joystickWrapper = _0x1389("0x31f");
    var req = _0x1389("0x320");
    var thread_rows = $(_0x1389("0x321"));
    if (thread_rows[_0x1389("0x5")]) {
        thread_rows.each(function (canCreateDiscussions, permissions) {
            var result = $(permissions);
            result[_0x1389("0x59")](req, $.extend(result[_0x1389("0x59")](req), {
                showControls: false,
                loop: true,
                autoPlay: true,
                mute: true,
                containment: result[_0x1389("0x322")](joystickWrapper)
            }));
            result[_0x1389("0x323")]();
        });
    }
});