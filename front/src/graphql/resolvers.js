export const resolvers = {
  Mutation: {
    newNotification: (_, { input }, { cache }) => {
      cache.writeData({
        data: { Notification: { __typename: 'Notification', ...input } },
      });

      return true;
    },
    deleteNotification: (_, variables, { cache }) => {
      cache.writeData({
        data: { Notification: null },
      });

      return true;
    },
    setToken: (_, { token }, { cache }) => {
      cache.writeData({
        data: { App: { __typename: 'App', token } },
      });

      return true;
    },
  },
};

export default resolvers;
