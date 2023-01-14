import EasyAccess, { defaultMutations } from 'vuex-easy-access'

export const state = () => ({
  drawer: true,
  berita: [],
  event: [],
  artikel: [],
})

export const mutations = { ...defaultMutations(state()) }
export const plugins = [EasyAccess()]
export const actions = {
  setDrawer({ dispatch }, drawer) {
    dispatch('set/drawer', drawer)
  },

  postNews({ dispatch }, payload) {
    return this.$axios
      .post(`http://localhost:5000/postNews`, payload)
      .then(() => {
        console.log('success')
        return true
      })
      .catch((err) => {
        console.log(err)
        return false
      })
  },
  getNews({ dispatch }) {
    return this.$axios
      .get(`http://localhost:5000/getNews`)
      .then((response) => {
        dispatch('set/berita', response.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  getEvent({ dispatch }) {
    return this.$axios
      .get(`http://localhost:5000/getEvent`)
      .then((response) => {
        dispatch('set/event', response.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  getArtikel({ dispatch }) {
    return this.$axios
      .get(`http://localhost:5000/getArtikel`)
      .then((response) => {
        dispatch('set/artikel', response.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
}
