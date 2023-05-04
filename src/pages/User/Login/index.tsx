import { useState } from 'react';
import { Alert, message, Tabs } from 'antd';
import { LoginFormPage, ProFormText } from '@ant-design/pro-components';
import { FormattedMessage, history, SelectLang, useIntl, useModel, Helmet } from '@umijs/max';
import jwtDecode from 'jwt-decode';
import { flushSync } from 'react-dom';

import { ControlPlaneServiceLogin } from '@/services/controlPlane/ControlPlaneService';
import styles from './index.less';
import { currentUser } from '@/services/ant-design-pro/api';

const HDLogin: React.FC = () => {
  const intl = useIntl();
  const { initialState, setInitialState } = useModel('@@initialState');
  // 登录
  const handleLogin = async (values: API.controlPlaneLoginRequest) => {
    try {
      const res = await ControlPlaneServiceLogin(values);
      const { hashdataCloudToken: tokenStr } = res;
      if (tokenStr) {
        localStorage.setItem('token', tokenStr);
        // 获取用户信息
        const userInfo = await initialState?.fetchUserInfo?.();

        // 登录成功以后，需要更新全局数据
        flushSync(() => {
          setInitialState({
            ...initialState,
            currentUser: userInfo,
          });
        });

        // 登录成功跳转至redirect指定的页面
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }
    } catch (error) {
      console.log(error);
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
      });
      message.error(defaultLoginFailureMessage);
    }
  };
  return (
    <div className={styles.loginFormPageWrapper}>
      <LoginFormPage
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        logo="/logo.png"
        title={intl.formatMessage({ id: 'pages.login.title' })}
        subTitle={intl.formatMessage({ id: 'pages.login.subTitle' })}
        onFinish={async (values) => {
          await handleLogin(values as API.controlPlaneLoginRequest);
        }}
      >
        <ProFormText
          name="organizationName"
          placeholder={intl.formatMessage({ id: 'pages.login.form.organizationName.placeholder' })}
          rules={[
            {
              required: true,
              message: intl.formatMessage({ id: 'pages.login.form.organizationName.required' }),
            },
          ]}
        ></ProFormText>
        <ProFormText
          name="accountName"
          placeholder={intl.formatMessage({ id: 'pages.login.form.accountName.placeholder' })}
          rules={[
            {
              required: true,
              message: intl.formatMessage({ id: 'pages.login.form.accountName.required' }),
            },
          ]}
        ></ProFormText>
        <ProFormText
          name="userName"
          placeholder={intl.formatMessage({ id: 'pages.login.form.userName.placeholder' })}
          rules={[
            {
              required: true,
              message: intl.formatMessage({ id: 'pages.login.form.userName.required' }),
            },
          ]}
        ></ProFormText>
        <ProFormText.Password
          name="password"
          placeholder={intl.formatMessage({ id: 'pages.login.form.password.placeholder' })}
          rules={[
            {
              required: true,
              message: intl.formatMessage({ id: 'pages.login.form.password.required' }),
            },
          ]}
        ></ProFormText.Password>
      </LoginFormPage>
    </div>
  );
};
export default HDLogin;
