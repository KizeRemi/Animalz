import { object, string } from 'yup';
import jwt from 'jsonwebtoken';

class User {
  constructor(user) {
    this.id = user.id || uuidv4();
    this.email = user.emails[0].value;
    this.username = user.displayName;

    this.isValidUser();
  }

  isValidUser() {
    return object()
      .shape({
        email: string().required('user email required'),
        username: string().required('user name required'),
      })
      .validateSync(this);
  }

  generateJWT() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
      email: this.email,
      id: this.id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
  }
}

export default User;
