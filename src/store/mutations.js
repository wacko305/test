import * as types from './mutation-types'

const mutations = {
  [types.storeCategoriesInfo] (state, CategoriesInfo) {
    state.CategoriesInfo = CategoriesInfo
  },
  [types.storePlayListInfo] (state, playListInfo) {
    state.playListInfo = playListInfo
  },
  [types.storeUserInfo] (state, userInfo) {
    state.userInfo = userInfo
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  },

  [types.FETCH_LOADING] (state, isLoading) {
    state.isLoading = isLoading
  },
  [types.SET_FULL_SCREEN] (state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAY_LIST] (state, list) {
    state.playList = list
  },
  [types.SET_CURRENT_SONG] (state, song) {
    state.currentSong = song
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_PLAYING_STATE] (state, isPlaying) {
    state.playing = isPlaying
  },
  [types.SET_REQUEST_END] (state, isEnd) {
    state.requestEnd = isEnd
  },
  [types.SET_SONG_READY] (state, isReady) {
    state.songIsReady = isReady
  },
  [types.SET_SONG_SEQUENCE] (state, sequence) {
    state.songSequence = sequence
  },

  [types.SET_PLAYER_MODE] (state, playerMode) {
    state.playerMode = playerMode
  },

  [types.REMOVE_STORAGE_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
    localStorage.removeItem('userInfo')
  },
  [types.SET_DRAWER_VIS] (state, drawerVis) {
    state.drawerVis = drawerVis
  }

}

export default mutations
