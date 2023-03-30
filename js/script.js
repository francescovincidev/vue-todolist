const { createApp } = Vue;

createApp( {
    data() {
        return {
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
}).mount("#app");