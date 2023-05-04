declare namespace API {
  type controlPlaneAccount = {
    id?: string;
    name?: string;
    organizationId?: string;
    status?: controlPlaneAccountStatus;
    createdAt?: string;
  };

  type controlPlaneAccountStatus = 'AccountStatusCreating' | 'AccountStatusNormal';

  type controlPlaneChangePasswordRequest = {
    oldPassword?: string;
    newPassword?: string;
  };

  type controlPlaneChangePasswordResponse = true;

  type controlPlaneCloud = {
    id?: string;
    name?: string;
  };

  type controlPlaneCreateAccountResponse = {
    accountId?: string;
  };

  type controlPlaneCreateOrganizationRequest = {
    organizationName?: string;
    accountName?: string;
    cloudId?: string;
    regionId?: string;
    userName?: string;
    password?: string;
    email?: string;
    surname?: string;
    givenName?: string;
  };

  type controlPlaneCreateOrganizationResponse = {
    organizationId?: string;
  };

  type controlPlaneCreateUserResponse = {
    userId?: string;
  };

  type controlPlaneCreateWarehouseResponse = {
    warehouseId?: string;
  };

  type controlPlaneDropAccountResponse = true;

  type controlPlaneDropUserResponse = true;

  type controlPlaneDropWarehouseResponse = true;

  type controlPlaneGetAccountResponse = {
    account?: controlPlaneAccount;
  };

  type controlPlaneGetUserResponse = {
    user?: controlPlaneUser;
  };

  type controlPlaneGetWarehouseResponse = {
    warehouse?: controlPlaneWarehouse;
  };

  type controlPlaneGrantUserRoleResponse = true;

  type controlPlaneInitializeAccountRequest = {
    accountId?: string;
    endpoint?: string;
    internalEndpoint?: string;
    status?: controlPlaneAccountStatus;
  };

  type controlPlaneInitializeAccountResponse = true;

  type controlPlaneListAccountsResponse = {
    count?: number;
    total?: number;
    content?: controlPlaneAccount[];
  };

  type controlPlaneListCloudsResponse = {
    count?: number;
    total?: number;
    content?: controlPlaneCloud[];
  };

  type controlPlaneListRegionsResponse = {
    count?: number;
    total?: number;
    content?: controlPlaneRegion[];
  };

  type controlPlaneListRolesResponse = {
    roles?: string[];
  };

  type controlPlaneListUsersResponse = {
    count?: number;
    total?: number;
    content?: controlPlaneUser[];
  };

  type controlPlaneListWarehouseSpecsResponse = {
    content?: controlPlaneWarehouseSpec[];
  };

  type controlPlaneListWarehousesResponse = {
    count?: number;
    total?: number;
    content?: controlPlaneWarehouse[];
  };

  type controlPlaneLoginRequest = {
    organizationName?: string;
    accountName?: string;
    userName?: string;
    password?: string;
    roles?: string[];
  };

  type controlPlaneLoginResponse = {
    hashdataCloudToken?: string;
  };

  type controlPlaneRefreshTokenResponse = {
    newToken?: string;
  };

  type controlPlaneRegion = {
    id?: string;
    name?: string;
    cloudId?: string;
  };

  type controlPlaneRevokeUserRoleResponse = true;

  type ControlPlaneServiceChangePassword2Params = {
    oldPassword?: string;
    newPassword?: string;
  };

  type ControlPlaneServiceCreateAccountParams = {
    organizationId: string;
  };

  type ControlPlaneServiceCreateUser2Params = {
    accountId: string;
  };

  type ControlPlaneServiceCreateUserParams = {
    /** organization_id will be ignored for now */
    organizationId: string;
    accountId: string;
  };

  type ControlPlaneServiceCreateWarehouse2Params = {
    accountId: string;
  };

  type ControlPlaneServiceCreateWarehouseParams = {
    organizationId: string;
    accountId: string;
  };

  type ControlPlaneServiceDropAccount2Params = {
    accountId: string;
    organizationId?: string;
  };

  type ControlPlaneServiceDropAccountParams = {
    organizationId: string;
    accountId: string;
  };

  type ControlPlaneServiceDropUser2Params = {
    userId: string;
    /** ignored */
    organizationId?: string;
    /** ignored */
    accountId?: string;
  };

  type ControlPlaneServiceDropUserParams = {
    /** ignored */
    organizationId: string;
    /** ignored */
    accountId: string;
    userId: string;
  };

  type ControlPlaneServiceDropWarehouse2Params = {
    warehouseId: string;
    organizationId?: string;
    accountId?: string;
  };

  type ControlPlaneServiceDropWarehouseParams = {
    organizationId: string;
    accountId: string;
    warehouseId: string;
  };

  type ControlPlaneServiceGetAccount2Params = {
    accountId: string;
    organizationId?: string;
  };

  type ControlPlaneServiceGetAccountParams = {
    organizationId: string;
    accountId: string;
  };

  type ControlPlaneServiceGetUser2Params = {
    userId: string;
    organizationId?: string;
    accountId?: string;
  };

  type ControlPlaneServiceGetUserParams = {
    organizationId: string;
    accountId: string;
    userId: string;
  };

  type ControlPlaneServiceGetWarehouse2Params = {
    warehouseId: string;
    organizationId?: string;
    accountId?: string;
  };

  type ControlPlaneServiceGetWarehouseParams = {
    organizationId: string;
    accountId: string;
    warehouseId: string;
  };

  type ControlPlaneServiceGrantUserRole2Params = {
    userId: string;
  };

  type ControlPlaneServiceGrantUserRoleParams = {
    /** ignored */
    organizationId: string;
    /** ignored */
    accountId: string;
    userId: string;
  };

  type ControlPlaneServiceListAccountsParams = {
    organizationId: string;
    offset?: number;
    limit?: number;
  };

  type ControlPlaneServiceListCloudsParams = {
    offset?: number;
    limit?: number;
  };

  type ControlPlaneServiceListRegionsParams = {
    cloudId: string;
    offset?: number;
    limit?: number;
  };

  type ControlPlaneServiceListUsers2Params = {
    accountId: string;
    /** ignored */
    organizationId?: string;
    offset?: number;
    limit?: number;
  };

  type ControlPlaneServiceListUsersParams = {
    /** ignored */
    organizationId: string;
    accountId: string;
    offset?: number;
    limit?: number;
  };

  type ControlPlaneServiceListWarehouses2Params = {
    accountId: string;
    organizationId?: string;
    offset?: number;
    limit?: number;
  };

  type ControlPlaneServiceListWarehousesParams = {
    organizationId: string;
    accountId: string;
    offset?: number;
    limit?: number;
  };

  type ControlPlaneServiceRefreshTokenParams = {
    /** if len(new_roles) == 0, it's refreshing, else it's assuming new roles */
    newRoles?: string[];
  };

  type ControlPlaneServiceRevokeUserRole2Params = {
    userId: string;
    role: string;
    /** ignored */
    organizationId?: string;
    /** ignored */
    accountId?: string;
  };

  type ControlPlaneServiceRevokeUserRoleParams = {
    /** ignored */
    organizationId: string;
    /** ignored */
    accountId: string;
    userId: string;
    role: string;
  };

  type controlPlaneUpdateAccountStatusRequest = {
    accountId?: string;
    status?: controlPlaneAccountStatus;
  };

  type controlPlaneUpdateAccountStatusResponse = true;

  type controlPlaneUpdateWarehouseStatusRequest = {
    warehouseId?: string;
    status?: controlPlaneWarehouseStatus;
  };

  type controlPlaneUpdateWarehouseStatusResponse = true;

  type controlPlaneUser = {
    id?: string;
    name?: string;
    email?: string;
    surname?: string;
    givenName?: string;
    accountId?: string;
    roles?: string[];
    createdAt?: string;
  };

  type controlPlaneWarehouse = {
    id?: string;
    name?: string;
    accountId?: string;
    status?: controlPlaneWarehouseStatus;
    size?: string;
    createdAt?: string;
  };

  type controlPlaneWarehouseSpec = {
    size?: string;
    sequence?: number;
  };

  type controlPlaneWarehouseStatus =
    | 'WarehouseStatusCreating'
    | 'WarehouseStatusNormal'
    | 'WarehouseStatusScaling';

  type protobufAny = {
    '@type'?: string;
  };

  type rpcStatus = {
    code?: number;
    message?: string;
    details?: protobufAny[];
  };
}
