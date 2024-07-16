import {getClaimValue} from '../getClaimValue/getClaimValue';

const getUserOrganizations = (): {orgCodes: string[]} => {
  let orgCodes = getClaimValue('org_codes', 'id_token');
  if (orgCodes === null || orgCodes === undefined) {
    orgCodes = [];
  }
  orgCodes = orgCodes as string[];
  return {
    orgCodes
  };
};

export {getUserOrganizations};
