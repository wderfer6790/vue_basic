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

var app3 = new Vue({
    el: '#app3',
    data: {
        /**
         * 동적바인딩 html에서 camelcase를 사용했지만 
         * "attrname" is not defined 오류발생
         */
        attrname: 'href',
        url: 'http://wderfer6790.com/hsp',
        /**
         * 아래 methods 속성에 정의하면 찾지 못함
         * 동적바인딩에는 제약이 많은 것 같다.
         */
        eventname: 'click',
        msgAlert: function() {
            alert('test');
        }
        // methods: {
        //     msgAlert: function() {
        //         alert('test');
        //     }
        // }
    }
});