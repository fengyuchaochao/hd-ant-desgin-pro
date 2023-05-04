import React from 'react';
import { history } from '@umijs/max';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './index.less';

export type GlobalPageTransitionProps = {
  children?: React.ReactNode;
};

const PageTransition: React.FC<GlobalPageTransitionProps> = ({ children }) => {
  const location = history.location;

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="page-transition"
        timeout={200}
        appear={true} // TODO: 表示首次渲染时，应用过度动画，但是目前并没有生效
        exit={false}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;
