export const typeDefs = `
  enum NotificationType {
    success
    error
    warning
  }

  type App {
    token: String 
  }

  type Notification {
    header: String
    content: String
    type: NotificationType
  }

  type Mutation {
    newNotification(input: NotificationInput!): Notification
    deleteNotification(): Notification
    logIn(token: String): App
  }

  type Query {
    Notification: Notification
    App: App
  }
`;
