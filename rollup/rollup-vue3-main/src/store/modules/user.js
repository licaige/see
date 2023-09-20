/**
 * 当前登录用户数据信息
 */
export default {
  namespaced: true,
  state() {
    return {
      userInfo: {},
    };
  },
  getters: {
    isLogined() {
      return userInfo.id;
    },
  },
};
