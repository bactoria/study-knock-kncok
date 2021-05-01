import Vue from 'vue'
import Vuex from 'vuex'
import { board } from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    boards: [],
    board: {}
  },
  mutations: {
    SET_BOARDS (state, payload) {
      state.boards = payload;
    },
    CLEAR_BOARDS (state) {
      state.boards = []
    },
    SET_BOARD (state, payload) {
      state.board = payload;
    },
    CLEAR_BOARD (state) {
      state.board = {}
    }
  },
  actions: {
    FETCH_BOARDS ({commit}) {
      return board.fetch() //axios
        .then(data => commit('SET_BOARDS', data))
    },
    FETCH_BOARD ({commit}, id) {
      return board.fetch(id)
        .then(data => commit('SET_BOARD', data))
    },
    ADD_BOARD (_, {title, content}) {
      return board.create({title, content})
        .then(({item}) => item.id)
    },
    UPDATE_BOARD({ state, dispatch }, { id, title, content }) {
      return board.update(id, { title, content })
        .then(_ => dispatch('FETCH_BOARD', state.board.id))
    },
    DELETE_BOARD(_, id) {
      return board.destroy(id)
    },
  },
  getters: {
    boards(state) {
      return state.boards
    },
    board(state) {
      return state.board
    }
  }
})

export default store
