<template>
  <div>
              <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0 font-size-18">Cadastro de Clientes</h4>
                    <div class="page-title-right">
                        <router-link :to="{name: 'customers.create'}" class="btn btn-outline-primary waves-effect waves-light">
                            <i class="bx bxs-plus-square font-size-16 align-middle mr-2"></i> Novo
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
        <!-- end page title -->
        <div class="card">
            <div class="card-body">
                <div class="row" style="padding:10px">
                    <div class="col-sm-12 col-md-1">
                        <label >Mostrar  
                        <select class="custom-select form-control" v-model="filter.per_page" @input="debounceSearch">
                            <option :value="5">5</option>
                            <option :value="10">10</option>
                            <option :value="25">25</option>
                            <option :value="50">50</option>
                            <option :value="100">100</option>
                        </select>
                        </label>                  
                    </div>
                    <div class="col-sm-12 col-md-2">
                        <label>CPF:
                            <input-component 
                                type="text" 
                                mask="###.###.###-##" 
                                placeholder="CPF" 
                                v-model="filter.identity" 
                                :validation="$v.filter.identity" 
                                @input="debounceSearch"
                            ></input-component>
                        </label>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <label style="width: 100%;">Nome:
                            <input-component type="text" placeholder="Nome" v-model="filter.name" @input="debounceSearch" ></input-component>
                        </label>
                    </div>
                    <div class="col-sm-12 col-md-2">
                        <label>Data Nascimento:
                            <input-component 
                                type="text" 
                                mask="##/##/####" 
                                placeholder="01/01/2000" 
                                :validation="$v.filter.birth_date" 
                                v-model="filter.birth_date" 
                                @input="debounceSearch" 
                            ></input-component>
                        </label>
                    </div>
                    <div class="col-sm-12 col-md-2">
                        <label>Sexo:
                            <select class="custom-select form-control" v-model="filter.gender" @input="debounceSearch">
                                <option :value="'ALL'">Todos</option>
                                <option :value="'MALE'">Masculino</option>
                                <option :value="'FEMALE'">Feminino</option>
                            </select>
                        </label>
                    </div>
                    <div class="col-sm-12 col-md-3">
                        <label for="">Estado</label>
                        <vue-select placeholder="Comece a digitar para buscar"
                            :options="states" label="name"
                            @search="searchStateDebounce"
                            @input="debounceSearch"
                            v-model="filter.state">
                            <template slot="option" slot-scope="option">
                                {{ option.sigla}} - {{ option.name }}
                            </template>
                            <div slot="no-options">Nenhum item encontrado!</div>
                            <div class="spinner" v-show="spinnerState">Buscando...</div>
                        </vue-select>
                    </div>

                    <div class="col-sm-12 col-md-3">
                        <label for="">Cidade</label>
                        <vue-select placeholder="Comece a digitar para buscar"
                            :options="cities" label="name"
                            @search="searchCityLocal"
                            @input="debounceSearch"
                            v-model="filter.city">
                            <template slot="option" slot-scope="option">
                                {{ option.name }}
                            </template>
                            <div slot="no-options">Nenhum item encontrado!</div>
                            <div class="spinner" v-show="spinnerCity">Buscando...</div>
                        </vue-select>
                    </div>

                    <div class="col-sm-12 col-md-2">
                        <label style="width: 90%">Filtrar:
                            <button @click="navigate(1)" class="btn btn-outline-primary btn-sm btn-block"><span class="bx bx-search-alt"></span></button>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Lista de Clientes</h4>
                        <div class="table-responsive">
                                <table class="table mb-0" >
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Data Nasc</th>
                                    <th>Estado</th>
                                    <th>Cidade</th>
                                    <th>Sexo</th>
                                    <th>Ações</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="item in data" :key="item.id">
                                    <td>{{item.id}}</td>
                                    <td>{{item.name}}</td>
                                    <td>{{item.identity}}</td>
                                    <td>{{item.birth_date | dateformat}}</td>
                                    <td>{{item.city.state.sigla}}</td>
                                    <td>{{item.city.name}}</td>
                                    <td>
                                        <span class="badge badge-soft-dark">{{item.gender == 'MALE' ? 'M' : 'F'}}</span>
                                    </td>
                                    <td>
                                        <router-link :to="{name: 'customers.edit', params: {id: item.id }}" class="btn btn-outline-success waves-effect waves-light" style="padding: 3px 12px 3px 12px;" title="Editar">
                                            <i class="mdi mdi-pencil d-block font-size-12"></i>
                                        </router-link>

                                        <button type="button" class="btn btn-outline-danger waves-effect waves-light" style="padding: 3px 12px 3px 12px;" title="Excluir"
                                                data-toggle="modal" data-target="#modal-delete" data-backdrop="static" @click="changeModalCustomer(item)">
                                            <i class="mdi mdi-trash-can d-block font-size-12"></i>
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="1000"> 
                                            <pagination-component :source="pagination" @navigate="navigate($event)"></pagination-component>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                    </div>
                </div>
            </div> <!-- end col -->
        </div> <!-- end row -->
        <div class="modal fade" id="modal-delete" tabindex="-1" aria-labelledby="modal-delete-title" aria-hidden="true" style="display: none;">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title mt-0" id="modal-deleteTitle">  Confirmação de Exclusão de Cliente</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body" v-if="objectModal">
                        <p v-if="!successDelete">Tem certeza que deseja excluir o cliente <strong> {{objectModal.name}} </strong> ?</p>
                        
                        <div v-if="successDelete" class="text-center" >
                            <div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;">
                                <div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                                <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
                                <div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                                <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                            </div>
                            <p class="success text-center font-size-18">{{successDelete}}</p>
                            
                        </div>
                        <message-component titulo="Erro!" v-if="errorDelete" :erros="errorDelete" @fechar="errorDelete = null"></message-component>
                    </div>
                    <div v-else class="modal-body"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" :disabled="successDelete || !objectModal" @click.prevent="deleteCustomer()"><i class="mdi mdi-trash-can font-size-18"></i> Excluir </button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">  <i class="mdi mdi-close-circle font-size-18"></i> Fechar</button>                        
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
  </div>
</template>

<script>

import { CustomerService } from '../../services'
import { isDate, isValidCpf } from "../../herpers/helpers";
import AddressMixin from '../../mixins/address.mixin'
import moment from 'moment'

const customerService = new CustomerService();

export default {

    data() {
        return {
            data: [],
            filter:{
                orderBy: 'name',
                order: 'asc',
                page: 1,
                per_page: 5,
                name: '',
                identity: '',
                birth_date: '',
                gender: 'ALL',
                state: null,
                city: null

            },
            pagination: {
                current_page: 0,
                total: 0,
                last_page: 0,
                from: 0,
                to: 0,
                per_page: 5
            },
            debounce: null,
            objectModal: null,
            successDelete: null,
            errorDelete: null
        };
    },
    validations(){
        return {
            filter:{
                birth_date: {isDate: isDate},
                identity: {isValidCpf: isValidCpf},
            }
        }
    },
    mounted() {
        this.search();
        this.$v.filter.$touch()
    },
    mixins: [
        AddressMixin
    ],
    methods: {
        changeModalCustomer: function(obj){
            this.successDelete = null;
            this.errorDelete = null;
            this.objectModal = {...obj};
        },

        deleteCustomer: function(){
            this.successDelete = null;
            this.errorDelete = null;

            customerService.delete(this.objectModal.id)
            .then( response => {
                this.data = this.data.filter(x => x.id != this.objectModal.id);
                this.successDelete = 'item removido com sucesso!';
            }).catch( erro => this.errorDelete = erro)
            
        },

        debounceSearch: function(){
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                this.navigate(1);
            }, 800);
        },
        
        search:function(){
            let obj = {...this.filter}
            if(this.$v.filter.birth_date.$invalid){
                delete obj.birth_date
            }else{
                obj.birth_date = moment(obj.birth_date, 'DD/MM/YYYY', true).format("YYYY-MM-DD")
            }
            if(this.$v.filter.identity.$invalid){
                delete obj.identity
            }

            if(obj.state){
                obj.state_id = obj.state.id
                delete obj.state;
            }

            if(obj.city){
                obj.city_id = obj.city.id
                delete obj.city;
            }

            customerService.index(obj).then(
                response => {
                    this.$data.data = response.data.data;
                    this.$data.pagination = response.data.meta;
                    this.$data.filter.page = response.data.meta.current_page;
                }
            )
        },

        navigate: function(pagina){
            this.filter.page = pagina;
            this.search();
        },

        searchCityLocal: function(text){
            if(!this.filter.state){
                Vue.$toast.error(`Para buscar a cidade, selecione o estado`);
                return
            }
            this.searchCityDebounce({
                state_id: this.filter.state.id,
                name: text
            });
        }
  
    }
};
</script>
<style scoped>
    tr:hover{
        background-color: #eff2f7 ;
    }
</style>
