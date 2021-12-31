export const state = () => ({
  expand: false,
  showChat: true,
})

export const mutations = {
  toggleChat(state) {
    state.showChat = !state.showChat
  },
  toggleExpand(state) {
    state.expand = !state.expand
  },
}
