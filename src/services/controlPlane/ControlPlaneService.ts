// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /control_plane.ControlPlaneService/InitializeAccount */
export async function ControlPlaneServiceInitializeAccount(
  body: API.controlPlaneInitializeAccountRequest,
  options?: { [key: string]: any },
) {
  return request<API.rpcStatus>('/control_plane.ControlPlaneService/InitializeAccount', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /control_plane.ControlPlaneService/UpdateAccountStatus */
export async function ControlPlaneServiceUpdateAccountStatus(
  body: API.controlPlaneUpdateAccountStatusRequest,
  options?: { [key: string]: any },
) {
  return request<API.rpcStatus>('/control_plane.ControlPlaneService/UpdateAccountStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /control_plane.ControlPlaneService/UpdateWarehouseStatus */
export async function ControlPlaneServiceUpdateWarehouseStatus(
  body: API.controlPlaneUpdateWarehouseStatusRequest,
  options?: { [key: string]: any },
) {
  return request<API.rpcStatus>('/control_plane.ControlPlaneService/UpdateWarehouseStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/accounts/${param0} */
export async function ControlPlaneServiceGetAccount2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceGetAccount2Params,
  options?: { [key: string]: any },
) {
  const { accountId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/accounts/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /v2/accounts/${param0} */
export async function ControlPlaneServiceDropAccount2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceDropAccount2Params,
  options?: { [key: string]: any },
) {
  const { accountId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/accounts/${param0}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/accounts/${param0}/users */
export async function ControlPlaneServiceListUsers2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceListUsers2Params,
  options?: { [key: string]: any },
) {
  const { accountId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/accounts/${param0}/users`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v2/accounts/${param0}/users */
export async function ControlPlaneServiceCreateUser2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceCreateUser2Params,
  body: {
    organizationId?: string;
    userName?: string;
    password?: string;
    email?: string;
    surname?: string;
    givenName?: string;
    roles?: string[];
  },
  options?: { [key: string]: any },
) {
  const { accountId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/accounts/${param0}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/accounts/${param0}/warehouses */
export async function ControlPlaneServiceListWarehouses2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceListWarehouses2Params,
  options?: { [key: string]: any },
) {
  const { accountId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/accounts/${param0}/warehouses`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v2/accounts/${param0}/warehouses */
export async function ControlPlaneServiceCreateWarehouse2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceCreateWarehouse2Params,
  body: {
    organizationId?: string;
    warehouseName?: string;
    warehouseSize?: string;
  },
  options?: { [key: string]: any },
) {
  const { accountId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/accounts/${param0}/warehouses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/clouds */
export async function ControlPlaneServiceListClouds(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceListCloudsParams,
  options?: { [key: string]: any },
) {
  return request<API.rpcStatus>('/v2/clouds', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/clouds/${param0}/regions */
export async function ControlPlaneServiceListRegions(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceListRegionsParams,
  options?: { [key: string]: any },
) {
  const { cloudId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/clouds/${param0}/regions`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v2/organizations */
export async function ControlPlaneServiceCreateOrganization(
  body: API.controlPlaneCreateOrganizationRequest,
  options?: { [key: string]: any },
) {
  return request<API.rpcStatus>('/v2/organizations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/organizations/${param0}/accounts */
export async function ControlPlaneServiceListAccounts(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceListAccountsParams,
  options?: { [key: string]: any },
) {
  const { organizationId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/organizations/${param0}/accounts`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v2/organizations/${param0}/accounts */
export async function ControlPlaneServiceCreateAccount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceCreateAccountParams,
  body: {
    accountName?: string;
    userName?: string;
    password?: string;
    email?: string;
    surname?: string;
    givenName?: string;
    cloudId?: string;
    regionId?: string;
  },
  options?: { [key: string]: any },
) {
  const { organizationId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/organizations/${param0}/accounts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/organizations/${param0}/accounts/${param1} */
export async function ControlPlaneServiceGetAccount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceGetAccountParams,
  options?: { [key: string]: any },
) {
  const { organizationId: param0, accountId: param1, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/organizations/${param0}/accounts/${param1}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /v2/organizations/${param0}/accounts/${param1} */
export async function ControlPlaneServiceDropAccount(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceDropAccountParams,
  options?: { [key: string]: any },
) {
  const { organizationId: param0, accountId: param1, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/organizations/${param0}/accounts/${param1}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/organizations/${param0}/accounts/${param1}/users */
export async function ControlPlaneServiceListUsers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceListUsersParams,
  options?: { [key: string]: any },
) {
  const { organizationId: param0, accountId: param1, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/organizations/${param0}/accounts/${param1}/users`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v2/organizations/${param0}/accounts/${param1}/users */
export async function ControlPlaneServiceCreateUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceCreateUserParams,
  body: {
    userName?: string;
    password?: string;
    email?: string;
    surname?: string;
    givenName?: string;
    roles?: string[];
  },
  options?: { [key: string]: any },
) {
  const { organizationId: param0, accountId: param1, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/organizations/${param0}/accounts/${param1}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/organizations/${param0}/accounts/${param1}/users/${param2} */
export async function ControlPlaneServiceGetUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceGetUserParams,
  options?: { [key: string]: any },
) {
  const { organizationId: param0, accountId: param1, userId: param2, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/organizations/${param0}/accounts/${param1}/users/${param2}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /v2/organizations/${param0}/accounts/${param1}/users/${param2} */
export async function ControlPlaneServiceDropUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceDropUserParams,
  options?: { [key: string]: any },
) {
  const { organizationId: param0, accountId: param1, userId: param2, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/organizations/${param0}/accounts/${param1}/users/${param2}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v2/organizations/${param0}/accounts/${param1}/users/${param2}/roles */
export async function ControlPlaneServiceGrantUserRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceGrantUserRoleParams,
  body: {
    role?: string;
  },
  options?: { [key: string]: any },
) {
  const { organizationId: param0, accountId: param1, userId: param2, ...queryParams } = params;
  return request<API.rpcStatus>(
    `/v2/organizations/${param0}/accounts/${param1}/users/${param2}/roles`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { ...queryParams },
      data: body,
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 DELETE /v2/organizations/${param0}/accounts/${param1}/users/${param2}/roles/${param3} */
export async function ControlPlaneServiceRevokeUserRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceRevokeUserRoleParams,
  options?: { [key: string]: any },
) {
  const {
    organizationId: param0,
    accountId: param1,
    userId: param2,
    role: param3,
    ...queryParams
  } = params;
  return request<API.rpcStatus>(
    `/v2/organizations/${param0}/accounts/${param1}/users/${param2}/roles/${param3}`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 GET /v2/organizations/${param0}/accounts/${param1}/warehouses */
export async function ControlPlaneServiceListWarehouses(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceListWarehousesParams,
  options?: { [key: string]: any },
) {
  const { organizationId: param0, accountId: param1, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/organizations/${param0}/accounts/${param1}/warehouses`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v2/organizations/${param0}/accounts/${param1}/warehouses */
export async function ControlPlaneServiceCreateWarehouse(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceCreateWarehouseParams,
  body: {
    warehouseName?: string;
    warehouseSize?: string;
  },
  options?: { [key: string]: any },
) {
  const { organizationId: param0, accountId: param1, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/organizations/${param0}/accounts/${param1}/warehouses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/organizations/${param0}/accounts/${param1}/warehouses/${param2} */
export async function ControlPlaneServiceGetWarehouse(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceGetWarehouseParams,
  options?: { [key: string]: any },
) {
  const { organizationId: param0, accountId: param1, warehouseId: param2, ...queryParams } = params;
  return request<API.rpcStatus>(
    `/v2/organizations/${param0}/accounts/${param1}/warehouses/${param2}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 DELETE /v2/organizations/${param0}/accounts/${param1}/warehouses/${param2} */
export async function ControlPlaneServiceDropWarehouse(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceDropWarehouseParams,
  options?: { [key: string]: any },
) {
  const { organizationId: param0, accountId: param1, warehouseId: param2, ...queryParams } = params;
  return request<API.rpcStatus>(
    `/v2/organizations/${param0}/accounts/${param1}/warehouses/${param2}`,
    {
      method: 'DELETE',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 PUT /v2/organizations/accounts/users/password/change */
export async function ControlPlaneServiceChangePassword(
  body: API.controlPlaneChangePasswordRequest,
  options?: { [key: string]: any },
) {
  return request<API.rpcStatus>('/v2/organizations/accounts/users/password/change', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/roles */
export async function ControlPlaneServiceListRoles(options?: { [key: string]: any }) {
  return request<API.rpcStatus>('/v2/roles', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/specs */
export async function ControlPlaneServiceListWarehouseSpecs(options?: { [key: string]: any }) {
  return request<API.rpcStatus>('/v2/specs', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/token */
export async function ControlPlaneServiceRefreshToken(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceRefreshTokenParams,
  options?: { [key: string]: any },
) {
  return request<API.rpcStatus>('/v2/token', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v2/token */
export async function ControlPlaneServiceLogin(
  body: API.controlPlaneLoginRequest,
  options?: { [key: string]: any },
) {
  return request<API.rpcStatus>('/v2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /v2/users */
export async function ControlPlaneServiceChangePassword2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceChangePassword2Params,
  options?: { [key: string]: any },
) {
  return request<API.rpcStatus>('/v2/users', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/users/${param0} */
export async function ControlPlaneServiceGetUser2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceGetUser2Params,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/users/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /v2/users/${param0} */
export async function ControlPlaneServiceDropUser2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceDropUser2Params,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/users/${param0}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /v2/users/${param0}/roles */
export async function ControlPlaneServiceGrantUserRole2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceGrantUserRole2Params,
  body: {
    organizationId?: string;
    accountId?: string;
    role?: string;
  },
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/users/${param0}/roles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /v2/users/${param0}/roles/${param1} */
export async function ControlPlaneServiceRevokeUserRole2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceRevokeUserRole2Params,
  options?: { [key: string]: any },
) {
  const { userId: param0, role: param1, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/users/${param0}/roles/${param1}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /v2/warehouses/${param0} */
export async function ControlPlaneServiceGetWarehouse2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceGetWarehouse2Params,
  options?: { [key: string]: any },
) {
  const { warehouseId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/warehouses/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /v2/warehouses/${param0} */
export async function ControlPlaneServiceDropWarehouse2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ControlPlaneServiceDropWarehouse2Params,
  options?: { [key: string]: any },
) {
  const { warehouseId: param0, ...queryParams } = params;
  return request<API.rpcStatus>(`/v2/warehouses/${param0}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
