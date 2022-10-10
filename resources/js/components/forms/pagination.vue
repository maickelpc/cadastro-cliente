<script>

// import {range} from 'lodash'
    export default {
        props: ['source'],
        data() {
            return {
                pages: [],
            }
        },
        watch: {
            source() {
                this.$data.pages = this.$props.source.links.filter(x => x.url && (x.label * 1) > 0).map(x => Number(x.label));
            }
        },
        methods: {
            navigate( page) {
                if (page == 0 || page == this.source.last_page + 1)
                    return;
                this.$emit('navigate', page)
            },
        }
    }
</script>

<template>
    <div class="row">
        <div class="col-sm-12 col-md-5">
            <div class="dataTables_info" id="datatable_info" role="status" aria-live="polite">
                Total de registros encontados: {{source.total}}
            </div>
        </div>
        <div class="col-sm-12 col-md-7">
            <div class="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                <ul class="pagination">
                    <li class="paginate_button page-item previous disabled" id="datatable_previous" :class="{'disabled': source.current_page==1}">
                        <a href="#" @click.prevent="navigate(source.current_page - 1)"  :class="{'inactive': source.current_page==1}" title="Anterior"
                         class="page-link"> <i class="bx bx-chevron-left"></i> </a>
                    </li>
                    <li v-for="page in pages" :key="page"  class="paginate_button page-item" :class="{'active': page == source.current_page}">
                        <a href="#" class="page-link" @click="navigate(page)">{{page}}</a>
                    </li>
                    <li class="paginate_button page-item next" id="datatable_next" :class="{'disabled': source.current_page==source.last_page}">
                        <a href="#" @click.prevent="navigate(source.current_page + 1)" :class="{'inactive': source.current_page==source.last_page}"
                            title="Próxima" class="page-link"><i class="bx bx-chevron-right"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
