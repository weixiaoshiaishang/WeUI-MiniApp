const _swan = require("../../__antmove/__antmove_baidu/api/index.js")(swan);
const _Page = require("../../__antmove/component/componentClass.js")("Page");

var base64 = require("../images/base64");

_Page({
    onLoad: function() {
        this.setData({
            icon: base64.icon20
        });
    }
});
