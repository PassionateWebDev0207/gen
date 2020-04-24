import portfolios from '~/data/portfolio.json'

export const state = () => ({
  portfolios: null,
  loading: true
})

export const getters = {
  getPortfolios(state) {
    return state.portfolios
  },
  getPortfolioLoadStatus(state) {
    return state.loading
  }
}

export const actions = {
  GET_PORTFOLIOS({ commit }, user) {
    commit('setLoadStatus', true)
    commit('setPortfolios', portfolios)
    commit('setLoadStatus', false)
  }
}

export const mutations = {
  setPortfolios(state, data) {
    state.portfolios = data
  },

  setLoadStatus(state, status) {
    state.loading = status
  }
}
