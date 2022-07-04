export const actions = {
  async login({ commit }, params) {
    params = { ...params, device_name: 'Web Browser' }
    return await this.$axios.$post('login', params)
  },
}
