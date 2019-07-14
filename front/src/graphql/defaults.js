export const defaults = {
  App: {
    __typename: 'App',
    token: localStorage.getItem('accessToken') || null,
  },
  Notification: null,
};
