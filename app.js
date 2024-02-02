new Vue({
    el: '#app',
    data() {
        return {
            running: false,
            playerLife: 10,
            monsterLife: 0,
        
        }
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }

    },
    methods:{
        startGame(){
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        }

    },
    watch:{

    }

})