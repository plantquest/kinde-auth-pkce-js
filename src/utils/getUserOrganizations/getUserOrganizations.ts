import {getClaimValue} from '../getClaimValue/getClaimValue';
const orgCodes = [];

const getUserOrganizations = (): {orgCodes: string[]} => {
  let orgCodes = getClaimValue('org_codes', 'id_token');
  if (!Array.isArray(orgCodes)) {
    orgCodes = [];
  } else {
    orgCodes = orgCodes.filter((item) => typeof item === 'string');
  }
  return {
    orgCodes
  };
};

export {getUserOrganizations};
