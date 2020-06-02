import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paginaAtual: 1,
        totalPaginas: 0,
        paginacao: 3,
        dataInicioFim: null,
        filtroBotoes: null,
        customers: []
    },
    mutations: {
        paginaAtual(state, p) {
            state.paginaAtual = p
        },
        totalPaginas(state, p) {
            state.totalPaginas = p
        },
        paginacao(state, p) {
            state.paginacao = p
        },
        dataInicioFim(state, p) {
            state.dataInicioFim = p
        },
        filtroBotoes(state, p) {
            state.filtroBotoes = p
        },
        customers(state, p) {
            state.customers = p
        },
    },
    actions: {
        paginaAtual({commit}, p) {
            commit('paginaAtual', p)
        },
        totalPaginas({commit}, p) {
            commit('totalPaginas', p)
        },
        paginacao({commit}, p) {
            commit('paginacao', p)
        },
        dataInicioFim({commit}, p) {
            commit('dataInicioFim', p)
        },
        filtroBotoes({commit}, p) {
            commit('filtroBotoes', p)
        },
        customers({commit}, p) {
            commit('customers', p)
        },
    },
    getters: {
        paginaAtual: state => {
            return state.paginaAtual
        },
        totalPaginas: state => {
            return state.totalPaginas
        },
        paginacao: state => {
            return state.paginacao
        },
        dataInicioFim: state => {
            return state.dataInicioFim
        },
        filtroBotoes: state => {
            return state.filtroBotoes
        },
        customers: state => {
            return state.customers
        },

    }
})
