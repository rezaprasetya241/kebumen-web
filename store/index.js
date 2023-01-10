import EasyAccess, { defaultMutations } from 'vuex-easy-access'

export const state = () => ({
  drawer: true,
})

export const mutations = { ...defaultMutations(state()) }
export const plugins = [EasyAccess()]
export const actions = {
  setDrawer({ dispatch }, drawer) {
    dispatch('set/drawer', drawer)
  },
}
