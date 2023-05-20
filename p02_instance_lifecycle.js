var data = {
    a: 1
};

var vm = new Vue({
    el: '#app',
    data: data
});

console.log(`vm.a === data.a : ${vm.a === data.a}`); // true

vm.a = 2;
console.log(`data.a : ${data.a}`); // 2

data.a = 3;
console.log(`vm.a : ${vm.a}`); // 3

/**
 * 데이터 변경시 화면 리 렌더링
 * 하지만 새로 추가되면 렌더링 안함
 * 따라서 초기값을 지정해둘 필요가 있음
 */
vm.b = 'hi';

/**
 * 예외로 Object.freeze(obj)를 사용하면 속성이
 * 변경되지 않기 때문에 반응하지 않음
 * 또 에러 발생함
 * Cannot assign to read only property 'foo' of object '#<Object>'
 */
var obj = {
    foo: 'bar'
};

Object.freeze(obj);

var app2 = new Vue({
    el: '#app2',
    data: obj
});

/**
 * vue instance는 data property 외에 여러 속성을 제공하는데,
 * 다른 사용자 정의 속성과 구분하기 위해 $ 접두어를 붙인다.
 */
var data2 = {
    a: 1
};
var vm2 = new Vue({
    el: '#app3',
    data: data2
});
console.log(`vm2.$data === data : ${vm2.$data === data2}`); // true
console.log(`vm2.$el === document.getElementById('app3') : ${vm2.$el === document.getElementById('app3')}`); // true


/**
 * 라이프사이클 훅
 * 
 * beforeCreate: 
 * created: instance가 생성된 후에 호출
 * beforeMount: 
 * mounted: vue가 html element
 * beforeUpdate:
 * updated: property update로 rerendering 될 때
 * beforeDestroy: 
 * destroyed: 
 */
var app4 = new Vue({
    data: {
        a: 1
    },
    created: function () {
        console.log(`a is ${this.a}`);
    }
});