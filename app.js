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
        },
        attack(special){
           this.hurt('monsterLife', 7, 12, special)
           this.hurt('playerLife', 7, 12, false)
        },
        hurt(atr, min, max, special){
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            //Math.max nunca deixara o valor ser negativo
            this[atr] = Math.max(this[atr] - hurt, 0)
        },
        healAndHurt(){
            this.heal(10,15)
            this.hurt('playerLife', 7, 12, false)
        },
        heal(max, min){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)

        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }

    },
    watch:{
        hasResult(value){
            if (value) this.running = false
        }

    }

})