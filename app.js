new Vue({
    el: '#app',
    data() {
        return {
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

    },
    watch:{

    }

})