/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
import { RoleEnum } from '@/enums/index';

export default function access(
  initialState: { currentUser?: API.CurrentUser; tokenJSON: TOKEN_JSON } | undefined,
) {
  const { tokenJSON } = initialState ?? {};
  if (!tokenJSON) return {};
  const { roles = [] } = tokenJSON;
  const currentRole = roles.find((role) => role.assumed);
  return {
    isDatabaseUser: currentRole?.name === RoleEnum.DB_USER,
    isAccountAdmin: currentRole?.name === RoleEnum.ACCOUNT_ADMIN,
    isOrganizationAdmin: currentRole?.name === RoleEnum.ORG_ADMIN,
  };
}
