import EasyAccess, { defaultMutations } from 'vuex-easy-access'

export const state = () => ({
  drawer: true,
  berita: [],
  event: [],
  artikel: [],
  loaderNews: false,
  loaderEvent: false,
  loaderArtikel: false,
  message: '',
  terbaru: ['hello'],
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
        return true
      })
      .catch((err) => {
        dispatch('set/message', err.response.data.message)
        return false
      })
  },
  getTerbaru({ dispatch }) {
    return this.$axios
      .get(`http://localhost:5000/getTerbaru`)
      .then((response) => {
        dispatch('set/terbaru', response.data)
        return true
      })
      .catch(() => {
        return false
      })
  },
  getNews({ dispatch }) {
    dispatch('set/loaderNews', true)
    return this.$axios
      .get(`http://localhost:5000/getNews`)
      .then((response) => {
        setTimeout(() => {
          /**
           * Close the Snackbar.
           */
          dispatch('set/berita', response.data)
        }, 3000)
        dispatch('set/loaderNews', false)
        return true
      })
      .catch(() => {
        dispatch('set/loaderNews', true)
        return false
      })
  },
  getEvent({ dispatch }) {
    dispatch('set/loaderEvent', true)
    return this.$axios
      .get(`http://localhost:5000/getEvent`)
      .then((response) => {
        dispatch('set/event', response.data)
        dispatch('set/loaderEvent', false)
        return true
      })
      .catch(() => {
        dispatch('set/loaderEvent', false)
        return false
      })
  },
  getArtikel({ dispatch }) {
    dispatch('set/loaderArtikel', true)
    return this.$axios
      .get(`http://localhost:5000/getArtikel`)
      .then((response) => {
        dispatch('set/artikel', response.data)
        dispatch('set/loaderArtikel', false)
        return true
      })
      .catch(() => {
        dispatch('set/loaderArtikel', false)
        return false
      })
  },
}
