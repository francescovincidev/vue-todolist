const { createApp } = Vue;

createApp( {
    data() {
        return {
            newTodo:"",
            todoArray: [
                {
                    text:"Lavare i piatti",
                    done: false
                },
                {
                    text:"Buttare la spazatura",
                    done: true
                },
                {
                    text:"Completare l'esercizio todo",
                    done: false
                },
                {
                    text:"Imparare vue",
                    done: true
                },
                {
                    text:"fare la spesa",
                    done: true
                },
                {
                    text:"fare visita alla nonna",
                    done: true
                },
            ]
        };
    },
    methods:{

        addTodo(){
            this.newTodo = this.newTodo.trim();
            if(this.newTodo !== ""){
                this.todoArray.unshift({
                    text: this.newTodo,
                    done: false
                });
                this.newTodo="";
            }
            
        }
    }
}).mount("#app");