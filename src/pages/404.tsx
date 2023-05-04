import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';
import { FormattedMessage, useIntl } from '@umijs/max';

const NoFoundPage: React.FC = () => {
  const intl = useIntl();
  return (
    <Result
      status="404"
      title={intl.formatMessage({
        id: 'exception.404.title',
      })}
      subTitle={intl.formatMessage({
        id: 'exception.404.subTitle',
      })}
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          {intl.formatMessage({
            id: 'exception.backHome',
          })}
        </Button>
      }
    />
  );
};

export default NoFoundPage;
