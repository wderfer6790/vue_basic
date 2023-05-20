// 기본 데이터 렌더링
var app = new Vue({
    el: '#app',
    data: {
        message: 'HELLO, VUE!'
    }
});

// v-bind:{element property}
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '동적 타이틀 속성 : ' + new Date()
    }
});

// v-if="seen" visibility on/off
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true,
    }
});

// v-for="{item} in {list}"
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'vue 튜토리얼 하기1'},
            { text: 'vue 튜토리얼 하기2'},
            { text: 'vue 튜토리얼 하기3'},
        ]
    }
});

/**
 * v-on:{event}="{function name}"
 * 
 * ※ reverseMessage 를 arrow function으로 작성하면 오류
 */
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: '안녕하세요! Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

/**
 * 사용자 입력에 따라 data.message 값 변경
 * 
 * <input type="text" 
 *        v-model="data.{property name}">
 */
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: '안녕하세요, vue!'
    }
});


// component
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});
/**
 * <todo-item
 *      v-for="item in groceryList"
 *      v-bind:todo="item"
 *      v-bind:key="item.id"
 * >
 * </todo-item>
 */
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '할일 1' },
            { id: 1, text: '할일 2' },
            { id: 2, text: '할일 3' },
        ]
    }
});
