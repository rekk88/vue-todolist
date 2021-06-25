const app = new Vue(
    {
        el:"#app",

        data:{
            tasks : [
                "chiamare thorin",
                "prenotare la cena da bilbo",
                "trovare la porta segreta",
                "recuperare l'archengemma",
            ],
            
            nuovaTask : '',
            
        },
        
        methods: {
            //   test(){
            //       alert("sono vue");
            //   }
            elimina(indice){
                this.tasks.splice(indice,1);
            },
            
            inserisci(){
                // this.tasks.push()
                console.log(this.nuovaTask.length);
                let str = this.nuovaTask.trim();
                console.log(str);
                if(this.nuovaTask.length > 0 && str !==  ''){
                    this.tasks.push(this.nuovaTask);
                    this.nuovaTask = '';
                }
                
            }
        },
 });