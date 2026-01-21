
import { Flex, Layout } from 'antd';
import type { FC, ReactNode } from 'react';

const { Header, Footer, Sider, Content } = Layout;

import css from './styles.module.css';

type Props = {
  children: ReactNode;
};

export const PageLayout: FC<Props> = ({ children }) => (
  <Flex gap="middle" wrap>
    <Layout>
      <Header className={css.header}>Header</Header>
      <Layout>
        <Sider className={css.sider}>
          Sider
        </Sider>
        <Content className={css.content}>{children}</Content>
      </Layout>
      <Footer className={css.footer}>Footer</Footer>
    </Layout>
  </Flex>
);