export const ROLE_CONST = getRoleUrl();

function getRoleUrl() {
  return {
    getRole: {
      url: 'app/myAppSamad/samadRolesApi',
      action: {name: 'getRole'}
    },
    selectRole: {
      url: '/app/myAppSamad/selectRoleApi',
      action: {name: 'selectRole'}
    }
  };
}
