export const state = () => ({
  authenticated: false,
  email: null,
  token: null
})

export const getters = {
  getAuth(state) {
    return {
      authenticated: state.authenticated,
      email: state.email,
      token: state.token
    }
  }
}

export const actions = {
  LOGIN({ commit, dispatch }, authInfo) {},
  LOGOUT({ commit, dispatch }) {},
  CREATEUSER({ commit, dispatch }) {}
}

export const mutations = {
  setAuth(state, authInfo) {}
}
