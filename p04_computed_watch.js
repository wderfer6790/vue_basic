let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello',
    },
    computed: {
        /**
         * message에 바인딩되어, message가 변경될 때마다 실행
         * 속성에 의존하지 않는, 바인딩하지 않은 computed는 업데이트 되지 않음
         * 바인딩된 속성이 바뀌지 않으면 캐싱된 값을 리턴
         */
        reverseMessage: function() {
            return this.message.split('').reverse().join('');
        },
    }
});

console.log(app.reverseMessage);
app.message = 'Goodbye';
console.log(app.reverseMessage);

let app2 = new Vue({
    el: '#app2',
    data: {
        firstName: 'Hyeonsoo',
        lastName: 'Park',
        fullName: 'Hyeonsoo Park',
    },
    watch: {
        firstName: function(val) {
            this.fullName = `${val} ${this.lastName}`;
        },
        lastName: function(val) {
            this.fullName = `${this.firstName} ${val}`;
        },
    }
});

let app3 = new Vue({
    el: '#app3',
    data: {
        firstName: 'Hyeonsoo',
        lastName: 'Park',
    },
    computed: {
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
});

let app4 = new Vue({
    el: '#app4',
    data: {
        firstName: '',
        lastName: '',
    },
    methods: {
        setName: function() {
            this.fullName = document.getElementById('newName').value;
        },
    },
    computed: {
        fullName: {
            get: function() {
                return `${this.firstName} ${this.lastName}`;
            },
            set: function(name) {
                let tmp = name.split(' ');
                this.firstName = tmp.shift();
                this.lastName = tmp.pop();
            }
        }
    }
});

let app5 = new Vue({
    el: '#app5',
    data: {
        question: '',
        answer: 'any question?',
    },
    methods: {
        getAnswer: function() {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'please, input the question mark.';
                return
            }

            this.answer = 'I think about that...';

            let vm = this;
            axios.get('https://yesno.wtf/api')
                .then(function(response) {
                    vm.answer = _.capitalize(response.data.answer);
                })
                .catch(function(err) {
                    vm.answer = 'error!! ' + err;
                });
        }
    },
    created: function() {
        /**
         * question이 업데이트 될 때마다 이벤트가 호출되어 
         * 부하되는 것을 막기 위해 0.5초마다 호출되도록 조절
         */
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
    watch: {
        question: function(newQuestion) {
            this.answer = 'wating for answer...';
            this.debouncedGetAnswer;
        },
    },

});