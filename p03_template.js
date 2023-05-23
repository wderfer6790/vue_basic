var app = new Vue({
    el: '#app',
    data: {
        msg: "안녕하세요",
        rawHtml: "<span style=\"color: red\">msg</span>"
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        dynamicId: 'test2',
        isButtonDisabled: true, // false, null, undefined에서 disabled 안됨
        number: 123,
        ok: false,
        message: 'test message',
        no: 20,
    }
});