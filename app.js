new Vue({
    el: '#app',
    data() {
        return {
            running: false,
            playerLife: 100,
            monsterLife: 100,
            logs: []

        }
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }

    },
    methods: {
        startGame() {
            this.logs = []
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        },
        attack(special) {
            this.hurt('monsterLife', 5, 10, special, 'Player', 'Monster', 'player')
            if (this.monsterLife > 0) {
                this.hurt('playerLife', 7, 12, false, 'Monster', 'Player', 'monster')
            }
        },
        hurt(atr, min, max, special, source, target, cls) {
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            //Math.max nunca deixara o valor ser negativo
            this[atr] = Math.max(this[atr] - hurt, 0)
            this.registerLog(`${source} hit the ${target} for ${hurt} damage.`, cls)
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monster', 'Player', 'monster')
        },
        heal(max, min) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Player gained strength ${heal}.`, 'player')

        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }

    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }

    }

})