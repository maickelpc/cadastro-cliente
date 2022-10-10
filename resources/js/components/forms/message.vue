<script>

export default {
    
     props: [
        'erros',
        'sucesso',
        'cor',
        'titulo',
        'fechar'
    ],
    data(){
        return{
            tituloD: ''
        }
    },

    methods: {
        fecharJanela(){
            this.$emit('fechar')
        }
    },

    computed: {
        TituloF() {
            if(this.$props.titulo)
                return this.$props.titulo
            else if(this.tituloD.length > 0)
                return this.tituloD
            return "Ops! algo errado aconteceu";
        },
        fecharF() {
            if(this.$props.fechar)
                return this.$props.fechar
            return true
        },
        errorMessages() {
            
            if(this.$props.erros === undefined)
                return false;
            let error = this.$props.erros;
            console.log("ERROR: ", error, typeof error)
            if(typeof(error) == 'string')
                return [error];
            
            if(error.isAxiosError){
                switch(error.response.status){
                     case 400:
                       return [error.response.data.message];
                    case 403:
                       return [error.response.data.message];
                        break;
                    case 404:
                        this.tituloD = "Dados não encontrados!";
                        if(error.response.data.errors){
                            let fields = Object.keys(error.response.data.errors)
                            let errors = [];
                            fields.forEach(field => {
                                errors.push(`${field}: ${error.response.data.errors[field].join(' | ')}`)
                            });
                            return errors;
                        }else{
                            return ['Os dados podem ter sido removidos, ou não estar disponíveis no momento!'];
                        }
                        break;
                    case 405:
                        this.tituloD = "Método indisponível!";
                        return ["Entre en contato com o suporte"]
                        break;
                    case 422:
                        this.tituloD = "Campos inválidos!";
                        let fields = Object.keys(error.response.data.errors)
                        let errors = [];
                        fields.forEach(field => {
                            errors.push(`${field}: ${error.response.data.errors[field].join(' | ')}`)
                        });
                        return errors;
                    case 500:
                        return ['Ocorreu um erro no servidor, tente novamente, caso o erro persista entre em contato com o suporte', error.response.data.message];
                    default:
                        ['Entre em contato com o suporte']
                }
            }else if(error.$params){
                 return  Object.keys(error.$params).reduce(
                    (errors, validator) => {
                        if (error[validator].$invalid ) {
                            errors.push(validator);
                        }
                    return errors;
                    },[]);

            }
            else{
                return error;
            }
            
            return [];
        },
    },

};
</script>

<template>
    <div role="alert" >
        <div v-if="erros" class="alert  fade show btn-block" role="alert" :class="{'alert-dismissible' : fechar, 'alert-warning' : cor ==='warning', 'alert-danger' : !cor || cor !== 'warning'}">
              <h4 class="alert-heading">{{TituloF}}</h4>
                <ul>
                    <li v-for="(e, index) in errorMessages" :key="index">
                        {{e}}
                    </li>
                </ul>
            <button v-if="fechar" type="button" class="close" data-dismiss="alert" aria-label="Close" @click="fecharJanela()">
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <div v-if="sucesso" class="alert  fade show btn-block" role="alert" :class="{'alert-dismissible' : fechar, 'alert-primary' : cor ==='primary', 'alert-success' : !cor || cor !== 'primary'}">
               <p>{{sucesso}}</p>
            <button v-if="fechar" type="button" class="close" data-dismiss="alert" aria-label="Close" @click="fecharJanela()">
                <span aria-hidden="true">×</span>
            </button>
        </div>
    </div>
</template>
