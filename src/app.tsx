import Footer from '@/components/Footer';
import { SelectLang } from '@/components/RightContent';
import { LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer, PageLoading } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
import { ControlPlaneServiceGetUser } from '@/services/controlPlane/ControlPlaneService';
import React from 'react';
import { AvatarDropdown, AvatarName } from './components/RightContent/AvatarDropdown';
import PageTransition from './components/PageTransition';
import Exception403 from './pages/403';
import jwtDecode from 'jwt-decode';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.controlPlaneUser;
  loading?: boolean;
  tokenJSON?: TOKEN_JSON;
  fetchUserInfo?: () => Promise<API.controlPlaneUser | undefined>;
}> {
  const tokenStr = localStorage.getItem('token') as string;
  const tokenJSON: TOKEN_JSON = jwtDecode(tokenStr);
  let loading = false;

  console.log('tokenJSON', tokenJSON);

  const fetchUserInfo = async () => {
    loading = true;
    try {
      const { organizationId, accountId, userId } = tokenJSON;
      const data = await ControlPlaneServiceGetUser({
        organizationId,
        accountId,
        userId,
      });
      loading = false;
      return data.user as API.controlPlaneUser;
    } catch (error) {
      history.push(loginPath);
    }
    loading = false;
    return undefined;
  };
  // 如果不是登录页面，执行
  const { location } = history;
  if (tokenStr && location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      tokenJSON,
      loading,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  return {
    fetchUserInfo,
    loading,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    actionsRender: () => [<SelectLang key="SelectLang" />],
    avatarProps: {
      src: initialState?.currentUser?.avatar,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown menu={false}>{avatarChildren}</AvatarDropdown>;
      },
    },
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      console.log('initialState?.currentUser', initialState?.currentUser);
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    layoutBgImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 路由切换时的loading效果
    // dynamicImport: {
    //   loading: '@ant-design/pro-layout/es/PageLoading',
    // },
    // 自定义 403 页面
    unAccessible: <Exception403 />,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      console.log(123123, initialState?.loading);
      // 这里是当 getInitialState 比较慢时，其实通常就是获取用户信息接口比较慢时，也可以加一个loading效果
      if (initialState?.loading) return <PageLoading />;
      return (
        <>
          <PageTransition>{children}</PageTransition>
          <SettingDrawer
            disableUrlParams
            enableDarkTheme
            settings={initialState?.settings}
            onSettingChange={(settings) => {
              setInitialState((preInitialState) => ({
                ...preInitialState,
                settings,
              }));
            }}
          />
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
};
