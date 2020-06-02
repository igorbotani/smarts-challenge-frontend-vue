<template>
    <div class="pagina-inicial">
        <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix text--center">
                <h1>Smarts Dashboard</h1>
            </div>

            <div v-loading="loading">
                <el-container class="text--center">
                    <el-main>
                        <el-row>
                            <el-col :span="24">
                                <el-button-group>
                                    <el-button type="primary" icon="el-icon-arrow-down" @click="filtroBtn('menor-budget')">Menor Budget</el-button>
                                    <el-button type="primary" icon="el-icon-arrow-up" @click="filtroBtn('maior-budget')">Maior Budget</el-button>
                                    <el-button type="primary" @click="filtroBtn('asc')">A-Z</el-button>
                                    <el-button type="primary" @click="filtroBtn('desc')">Z-A</el-button>
                                </el-button-group>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="24"><br/></el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="24">
                                <el-date-picker
                                        v-model="dataInicioFim"
                                        type="daterange"
                                        range-separator=" "
                                        start-placeholder="Início"
                                        end-placeholder="Fim"
                                        value-format="yyyy-MM-dd"
                                        format="dd/MM/yyyy"
                                        @input="buscarCustomers(true)"
                                >
                                </el-date-picker>
                            </el-col>
                        </el-row>

                    </el-main>
                </el-container>


                <div class="ctnListagem">
                    <el-select id="selectPaginacao" v-model="paginacao" placeholder="Paginação" class="selectPaginacao" @input="buscarCustomers(false)">
                        <el-option
                                v-for="i in [3,5,10]"
                                :key="i"
                                :label="i"
                                :value="i">
                        </el-option>
                    </el-select>

                    <div class="clearfix"></div>
                    <br/>

                    <el-card class="cardCustomer" v-for="c in customers" :key="c._id">
                        <el-row>
                            <el-col :span="8" class="text--center">
                                <img :src="c.pictures[0].url + '?r='+ Math.random()*100000" :alt="c.name.first + ' ' + c.name.last" :title="c.name.first + ' ' + c.name.last" :key="c._id" @click="detalhesCustomer(c)"/>
                            </el-col>
                            <el-col :span="16">
                                <p class="nomeCustomer">Nome: {{ c.name.first + ' ' + c.name.last }}</p>
                                <p>Email: {{ c.email }}</p>
                                <p>Company: {{ c.company }}</p>
                                <p>Age: {{ c.age }}</p>
                                <p>Budget: {{ c.budget }}</p>
                            </el-col>
                        </el-row>
                    </el-card>
                </div>

                <div class="ctnControleNavegacao text--center">
                    <el-button type="primary" icon="el-icon-arrow-left" :disabled="(paginaAtual <= 1)" @click="paginaAnterior">Anterior</el-button>
                    <span v-if="totalPaginas > 0" class="contagemPaginacao">Página {{ paginaAtual }} de {{ totalPaginas }}</span>
                    <el-button type="primary" :disabled="(paginaAtual >= totalPaginas)" @click="proximaPagina">Próximo <i class="el-icon-arrow-right"></i></el-button>
                </div>
            </div>

        </el-card>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'pagina-inicial',
        components: {},
        data() {
            return {
                loading: false,
            }
        },
        mounted() {
            this.buscarCustomers(false)
        },
        methods: {

            //Metodo geral para filtrar os customers
            buscarCustomers(resetarPaginacao) {
                if (resetarPaginacao == true) {
                    this.paginaAtual = 1
                }

                this.loading = true
                axios.get(this.endAPI()+'/api/Customers', {
                        params: {
                            page: this.paginaAtual,
                            limit: this.paginacao,
                            dataInicioFim: this.dataInicioFim,
                            filtro: this.filtroBotoes
                        }
                    }
                ).then(response => {
                    this.customers = response.data.customers
                    this.totalPaginas = response.data.totalPaginas
                }).finally(() => this.loading = false)
            },

            //Filtro dos botoes principais
            filtroBtn(tipoFiltro) {
                this.filtroBotoes = tipoFiltro
                this.buscarCustomers(true)
            },

            //Avancar 1 pagina
            proximaPagina() {
                if (this.paginaAtual < this.totalPaginas) {
                    this.paginaAtual++
                    this.buscarCustomers(false)
                    this.scrollResultados()
                }
            },

            //Voltar 1 pagina
            paginaAnterior() {
                if (this.paginaAtual > 1) {
                    this.paginaAtual--
                    this.buscarCustomers(false)
                    this.scrollResultados()
                }
            },

            //Disparado após cada mudança de página para ir ao topo dos resultados
            scrollResultados(){
                const y = document.getElementById('selectPaginacao').getBoundingClientRect().top + window.scrollY;
                window.scroll({
                    top: y,
                    behavior: 'smooth'
                });
            },

            //Abrir a pagina com detalhes do Customer
            detalhesCustomer(c){
                this.$router.push({name: 'detalhes-customer', params: { customer: c }})
            },

            //Obter a URL da API configurada no index.html
            endAPI(){
                if(window.endAPI != undefined){
                    return window.endAPI;
                }
                return '';
            }

        },

        //Manter o estado das opcoes da tela
        computed: {
            paginaAtual: {
                get () {
                    return this.$store.state.paginaAtual
                },
                set (value) {
                    this.$store.commit('paginaAtual', value)
                }
            },
            totalPaginas: {
                get () {
                    return this.$store.state.totalPaginas
                },
                set (value) {
                    this.$store.commit('totalPaginas', value)
                }
            },
            paginacao: {
                get () {
                    return this.$store.state.paginacao
                },
                set (value) {
                    this.$store.commit('paginacao', value)
                }
            },
            dataInicioFim: {
                get () {
                    return this.$store.state.dataInicioFim
                },
                set (value) {
                    this.$store.commit('dataInicioFim', value)
                }
            },
            filtroBotoes: {
                get () {
                    return this.$store.state.filtroBotoes
                },
                set (value) {
                    this.$store.commit('filtroBotoes', value)
                }
            },
            customers: {
                get () {
                    return this.$store.state.customers
                },
                set (value) {
                    this.$store.commit('customers', value)
                }
            },

        }
    }
</script>

<style lang="scss">

    .datePicker {
        display: inline-block;
        max-width: 150px;

        .el-input {
            max-width: 100%;
        }
    }

    .ctnListagem {
        max-width: 980px;
        margin-left: auto;
        margin-right: auto;
    }

    .selectPaginacao {
        float: right;
    }

    .cardCustomer {
        margin-bottom: 10px;

        p {
            margin-top: 5px;
            margin-bottom: 5px;
        }

        img {
            max-height: 150px;
            cursor: pointer;
            //Não colocado conforme o diagrama pois a imagem é retangular e fica com estética estranha
            //border-radius: 100%;
        }
    }

    .ctnControleNavegacao {
        margin-top: 20px;
    }

    .contagemPaginacao {
        display: inline-block;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>