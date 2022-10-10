<template>
    <div class="row"  >
        
        <div class="col-lg-12">
            <div class="card">
                
                <div class="card-body" >
                    <div class="row">
                        <div class="col-md-12">
                            <h3>Cadastro de Cliente </h3>
                        </div>
                    </div>
                    <hr>
                    <form @submit.prevent="submit()" >
                        <div class="row">
                            <label class="col-sm-2 col-form-label">Id</label>
                            <div class="col-sm-4">
                                <input-component
                                    :disabled="true"
                                    v-model="form.id"                            
                                    />
                            </div>

                            <label class="col-sm-2 col-form-label text-right">Nome</label>
                            <div class="col-sm-4">
                                <input-component
                                    :autofocus="true"
                                    v-model="form.name"
                                    :validator="$v.form.name"
                                    @blur="$v.form.name.$touch"
                                    />
                            </div>

                            <label class="col-sm-2 col-form-label">CPF: </label>
                            <div class="col-sm-4">
                                <input-component
                                    mask="###.###.###-##"
                                    v-model="form.identity"
                                    :validator="$v.form.identity"
                                    @blur="$v.form.identity.$touch"
                                    />
                            </div>

                            <label class="col-sm-2 col-form-label text-right">Data Nascimento: </label>
                            <div class="col-sm-4">
                                <input-component
                                    mask="##/##/####"
                                    v-model="form.birth_date"
                                    :validator="$v.form.birth_date"
                                    @blur="$v.form.birth_date.$touch"
                                    />
                            </div>

                            <label class="col-sm-2 col-form-label">Sexo: </label>
                            <div class="col-sm-4">
                                <container-component :validator="$v.form.gender">
                                    <select class="custom-select form-control" v-model="form.gender" @blur="$v.form.gender.$touch">
                                        <option :value="'MALE'">Masculino</option>
                                        <option :value="'FEMALE'">Feminino</option>
                                    </select>
                                </container-component>
                            </div>
                         
                            <label class="col-sm-2 col-form-label text-right">Address</label>
                            <div class="col-sm-4">
                                <input-component
                                    v-model="form.address"
                                    :validator="$v.form.address"
                                    @blur="$v.form.address.$touch"
                                    />
                            </div>

                            <label class="col-sm-2 col-form-label">Estado:</label>
                            <div class="col-sm-4 ">
                                <container-component :validator="$v.form.state_id">
                                    <vue-select placeholder="Comece a digitar para buscar"
                                        :options="states" label="name"
                                        @search="searchStateDebounce"
                                        @input="form.state_id = form.state.id"
                                        :clearable="false"
                                        v-model="form.state">
                                        <template slot="option" slot-scope="option">
                                            {{ option.sigla}} - {{ option.name }}
                                        </template>
                                        <div slot="no-options">Nenhum item encontrado!</div>
                                        <div class="spinner" v-show="spinnerState">Buscando...</div>
                                    </vue-select>
                                </container-component>
                            </div>

                            <label class="col-sm-2 col-form-label text-right">Cidade:</label>
                            <div class="col-sm-4 ">
                                <container-component :validator="$v.form.city_id">
                                    <vue-select placeholder="Comece a digitar para buscar"
                                        :options="cities" label="name"
                                        @search="searchCityLocal"
                                        @input="form.city_id = form.city.id"
                                        :clearable="false"
                                        :disabled="!form.state"
                                        v-model="form.city">
                                        <template slot="option" slot-scope="option">
                                            {{ option.name }}
                                        </template>
                                        <div slot="no-options">Nenhum item encontrado!</div>
                                        <div class="spinner" v-show="spinnerCity">Buscando...</div>
                                    </vue-select>
                                </container-component>
                            </div>
                           
                        </div>
                        <div class="row" style="margin-top: 20px">
                            <div class="col-md-12 text-center" v-if="errors || success">
                                <message-component :titulo="errorsTitle" v-if="errors" :erros="errors" @fechar="errors = null"></message-component>
                                <message-component v-if="success" :sucesso="success" @fechar="success = null"></message-component>
                            </div>
                            <div class="col-md-12 button-items text-center">

                                <router-link class="btn btn-warning waves-effect waves-light w-sm" title="Voltar" :to="{name: 'customers.index'}">
                                    <i class="bx bx-arrow-back d-block font-size-16"></i> Voltar
                                </router-link>

                                <button type="submit" class="btn btn-primary waves-effect waves-light w-sm" title="salvar">
                                    <i class="bx bxs-save d-block font-size-16"></i> Salvar
                                </button>

                            </div>
                        </div>

                        <div class="row" style="margin-top: 40px" v-if="form.id">
                            <div class="col-md-12  text-right flex info" >
                               Criado Em: <span class="badge badge-secondary">{{form.created_at | timeformat}}</span><br>
                               Atualizado Em: <span class="badge badge-secondary">{{form.updated_at | timeformat}}</span><br>
                            </div>
                        </div>
                    </form>
                </div>
                    
            </div>
        </div>
    </div>
</template>

<script>

import { required,  maxLength} from "vuelidate/lib/validators";
import { isValidCpf, isDate, isBeforeToday } from "../../herpers/helpers";
import { CustomerService } from '../../services'
import AddressMixin from '../../mixins/address.mixin'
import moment from 'moment';
const customerService = new CustomerService();

export default {
    mixins: [AddressMixin],
    data() {
        return {
            form: {
                id: null,
                name: '',
                identity: '',
                birth_date: '',
                gender: '',
                address: '',
                state: null,
                state_id: '',
                city: null,  
                city_id: '',
            },
          
            success: null,
            errors:null,
            errorsTitle:'',
        } 
    },
    validations() {
        return {
            form: {
                name: {required, maxLength: maxLength(200)},
                identity: {required, isValidCpf},
                birth_date: {required, isDate, isBeforeToday},
                gender: {required},
                address: {required, maxLength: maxLength(200)},
                state_id: {required},
                city_id: {required},
            },
        }
        

    },
    mounted() {
        if (this.$route.params.id) {
            this.get(this.$route.params.id);
        }      
    },
    methods: {

        submit: function(){

            this.$v.form.$touch();
            this.errors = null;
            this.success = null;    
            this.errorsTitle ='';

            if (this.$v.form.$invalid){
                this.errorsTitle = 'Preencha o formulário corretamente, alguns campos estão com errors!'
                this.errors = this.$v.form;
                return false;
            }
            let obj = {...this.form};
            delete obj.city;
            delete obj.state;
            obj.birth_date = moment(obj.birth_date, 'DD/MM/YYYY', true).format('YYYY-MM-DD');
            
            let request = null;
            if(obj.id)    
                request = customerService.update(obj);
            else
                request = customerService.store(obj);

            request.then(
                response => {
                    let redireciona = !this.form.id;
                    this.success = "Registro salvo com successo!";
                    if(redireciona) {
                        let index = String(this.$route.path).lastIndexOf("/");
                        let newPath = String(this.$route.path).slice(0, index);
                        this.form.id = response.data.data.id;
                        newPath += "/" + this.form.id;
                        this.$router.push(newPath);
                        this.get(this.form.id);
                    }
                }   
            ).catch( erro => this.errors = erro )

        },

        get: function(id){
            customerService.get(id)
                .then(  response => {
                    this.form = response.data.data;
                    this.form.state = this.form.city.state
                    this.form.state_id = this.form.city.state.id
                    this.form.birth_date = moment(this.form.birth_date).format("DD/MM/YYYY");
                }).catch( erro => this.errors = erro)
        },

        searchCityLocal: function(text, loading){
            if(!this.form.state){
                Vue.$toast.error(`Para buscar a cidade, selecione o estado`);
                return
            }
            this.searchCityDebounce({
                state_id: this.form.state.id,
                name: text
            });
        }

        

    },

};
</script>
<style scoped>





</style>