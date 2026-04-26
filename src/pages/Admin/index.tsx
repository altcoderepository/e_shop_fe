import { useQuery } from '@tanstack/react-query';
import type { TableColumnsType, TableProps } from 'antd';
import { Table } from 'antd';

import React from 'react';

import { getProducts } from '@/api';
import { AdminLayout } from '@/components/AdminLayout';
import type { Product } from '@/types';

import { ModalCreateProduct } from './components';

const columns: TableColumnsType<Product> = [
  {
    key: 'title',
    title: 'Название',
    dataIndex: 'title',
  },
  {
    key: 'artist',
    title: 'Исполнитель',
    dataIndex: 'artist',
  },
  {
    key: 'price',
    title: 'Цена',
    dataIndex: 'price',
  },
];

const rowSelection: TableProps<Product>['rowSelection'] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: Product[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
};

export const Admin: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    select: (data) => data.map((item: Product) => ({ ...item, key: item.id })),
  });

  return (
    <AdminLayout>
      <>
        <Table<Product>
          rowSelection={{ type: 'checkbox', ...rowSelection }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <ModalCreateProduct />
      </>
    </AdminLayout>
  );
};
