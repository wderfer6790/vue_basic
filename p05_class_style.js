let app = new Vue({
    el: '#app',
    data: {
        classObj: {
            active: true, 
            danger: false
        },
    },
    methods: {
        changeClass: function() {
            this.classObj.active = !this.classObj.active;
            this.classObj.danger = !this.classObj.danger;
        }
    }
});

// computed로 class를 좀 더 복잡한 계산과 함께 적용 가능
let app2 = new Vue({
    el: '#app2',
    data: {
        isActive: true,
        error: null
    }, 
    computed: {
        classObj: function() {
            return {
                active: this.isActive && !this.error,
                danger: this.error && this.error === 'fetal'
            }
        }
    }
});

// component에 class binding
Vue.component('test-component', {
    template: "<p class='foo bar'>TEXT</p>"
});

let app3 = new Vue({
    el: '#app3',
    data: {
        classObj: {
            active: false,
            danger: true
        }
    },
});

let app4 = new Vue({
    el: '#app4',
    data: {
        styleObj: {
            color: 'green',
            fontSize: '2em',
        }
    }
});