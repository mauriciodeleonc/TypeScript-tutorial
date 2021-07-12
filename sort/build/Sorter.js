"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
        var _this = this;
        this.sort = function () {
            var length = _this.length;
            for (var i = 0; i < length; i++) {
                for (var j = 0; j < length - i - 1; j++) {
                    if (_this.compare(j, j + 1)) {
                        _this.swap(j, j + 1);
                    }
                }
            }
        };
    }
    return Sorter;
}());
exports.Sorter = Sorter;
