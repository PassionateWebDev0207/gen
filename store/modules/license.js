import licenses from '~/data/license.json'

export const state = () => ({
  licenses: null,
  loading: true
})

export const getters = {
  getLicenses(state) {
    return state.licenses
  },
  getLicenseLoadStatus(state) {
    return state.loading
  }
}

export const actions = {
  GET_LICENSES({ commit }, user) {
    commit('setLoadStatus', true)
    commit('setLicenses', licenses)
    commit('setLoadStatus', false)
  }
}

export const mutations = {
  setLicenses(state, data) {
    state.licenses = data
  },

  setLoadStatus(state, status) {
    state.loading = status
  }
}
