import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps, TableColumnsType, TableProps } from 'antd';
import { Layout, Menu, Table } from 'antd';
import type { Product } from '../../types';
import { products } from '../../data';

const { Header, Content, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const columns: TableColumnsType<Product> = [
  {
    title: 'Название',
    dataIndex: 'title',
  },
  {
    title: 'Исполнитель',
    dataIndex: 'artist',
  },
  {
    title: 'Цена',
    dataIndex: 'price',
  },
];

const data: Product[] = products;

const rowSelection: TableProps<Product>['rowSelection'] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: Product[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};

export const Admin: React.FC = () => {

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Table<Product>
            rowSelection={{ type: 'checkbox', ...rowSelection }}
            columns={columns}
            dataSource={data}
          />
        </Content>
      </Layout>
    </Layout>
  );
};
