/**
 * Created by sepp on 18.05.16.
 */
import Auth0Lock from 'auth0-lock';

class Authentication {
  constructor() {
    this.lock = new Auth0Lock('y3ng0ydD00ZO865h3Xp3P1MtqKyCNKqJ', 'dearta.eu.auth0.com');
  }

  getProfile(idToken) {
    return new Promise((resolve, reject) => {
      this.lock.getProfile(idToken, (error, profile) => {
        if (error) {
          reject(error);
        } else {
          resolve(profile);
        }
      });
    });
  }

  getIdToken() {
    let idToken = localStorage.getItem('idToken');
    if (!idToken) {
      const authHash = this.lock.parseHash(window.location.hash);
      if (!authHash) {
        return undefined;
      } else if (authHash.error) {
        throw authHash.error;
      }
      idToken = authHash.id_token;
      localStorage.setItem('idToken', idToken);
    }
    return idToken;
  }

  showLogin() {
    this.lock.show();
  }

  logout() {
    localStorage.removeItem('idToken');
  }
}

export default new Authentication();
