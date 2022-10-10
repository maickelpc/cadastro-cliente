<script>

import {mask} from 'vue-the-mask'

export default {
    directives: {mask},
     props: [
        'autofocus',
        'name',
        'label',
        'value',
        'validator',
        'mask',
        'type',
        'disabled',
        'readonly',
        'placeholder'
    ],
    mounted(){
        if(this.$props.autofocus && this.$props.autofocus != '')
            setTimeout(() => {
                this.$refs.focusMe.focus();
            }, 200);
    },
    computed: {
        errors() {
            // console.log(this.$props.validator)
            let errors = Object.values(this.$props.validator.$params).filter(x => !this.$props.validator[x.type])
            errors = errors.map(x => {
                switch (x.type){
                    case 'required':
                    case 'requiredIf':
                        return 'Campo obrigatório'
                        break
                    case 'minLength': return `Mínimo: ${this.$props.validator.$params.minLength.min} caracteres`
                        break
                    case 'maxLength': return `Máximo: ${this.$props.validator.$params.maxLength.max} caracteres`
                        break
                    case 'minValue': return `Valor Mínimo: ${this.$props.validator.$params.minValue.min}`
                        break
                    case 'maxValue': return `Valor Máximo: ${this.$props.validator.$params.maxValue.max}`
                        break
                    case 'email': return `Email inválido`
                        break
                    case 'sameAs': return `O campo está diferente do campo ${x.eq == 'email' ? 'Email' : (x.eq == 'password' ? 'Senha' : x.eq == 'newPassword' ? 'Nova Senha' : (x.eq =='confirm_password' ? 'Confirmar Senha' : x.eq))}`;
                        break;
                    case 'cpfValidator': return `CPF inválido`;
                        break;
                    case 'cnpjValidator': return `CNPJ inválido`;
                        break;
                    case 'cpfCnpjValidator': return `CPF ou CNPJ inválido`;
                        break;
                    case 'InvalidDate': return 'Data inválida';
                        break;
                    case 'integer': return 'Somente Números inteiros';
                        break;
                    case 'isDate': return 'Data inválida';
                    case 'isBeforeToday': return 'Data deve ser anterior a hoje';
                    default: console.log(x); return x;
                }
            })
            return errors
        },
        _disabled(){
            return this.$props.disabled === undefined ? false : this.$props.disabled;
        },
        _readonly(){
            return this.$props.readonly === undefined ? false : this.$props.readonly;
        }
    },
    methods: {
        updateValue(value){
            if(this.validator)
                this.validator.$touch()
            this.$emit('input', value)
        },
        blur(){
            this.$emit('blur')
        }
    }

};
</script>

<template>
    <div class="form-group" :class="{ 'invalido':validator && validator.$dirty && validator.$invalid }">
        <label v-if="label && label.length">{{ label }}</label>
        <div>
            <input ref='focusMe' v-if="mask" v-mask="mask ? mask : ['X']"
             :disabled="_disabled" :readonly="_readonly" @blur="blur()" :placeholder="placeholder" :name="name"
             :value="value" @input="updateValue($event.target.value)" :type="type ? type : 'text'" :id="name"
              class="form-control"   />
              <!-- :class="{ 'is-invalid':validator && validator.$dirty && validator.$invalid }" -->

            <input ref='focusMe' v-else :disabled="_disabled" :readonly="_readonly" @blur="blur()" :placeholder="placeholder" :name="name"
             :value="value" @input="updateValue($event.target.value)" :type="type ? type : 'text'" :id="name"
              class="form-control"   />
              <!-- :class="{ 'is-invalid':validator && validator.$dirty && validator.$invalid }" -->
            <div v-if="validator && validator.$dirty && validator.$invalid" class="invalid-feedback" style="display:block">
                <ul>
                    <li v-for="(error, index) in errors" :key=index style="list-style: none;">{{error}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.invalido{
    border-left: 2px solid red;
}
</style>
