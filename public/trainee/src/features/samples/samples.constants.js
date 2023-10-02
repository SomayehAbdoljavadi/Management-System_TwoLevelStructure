/*import {userVersion} from "../../environment";*/

const userVersion = '';
export const SAMPLES_CONST = getSamplesUrl();

function getSamplesUrl() {
  return {
    login: {
      url: 'app/authentication' + userVersion + '/login',
      action: {name: 'login'}
    },
    logout: {
      url: 'app/appUserManager' + userVersion + '/logOut',
      action: {name: ''}
    }
  };
}
