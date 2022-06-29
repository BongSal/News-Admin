export const states = {
  isLoading: false,
}

export const actions = {
  login({ commit }, params) {
    this.$axios.get('posts/1')
    .then(({data}) => console.log(data))
    console.log('login by vuex', params)
  },
}
