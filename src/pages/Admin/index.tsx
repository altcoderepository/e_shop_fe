import { DeleteOutlined } from '@ant-design/icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { PopconfirmProps, TableColumnsType, TableProps } from 'antd';
import { Button, message, Popconfirm, Table } from 'antd';

import React from 'react';

import { deleteProduct, getProducts } from '@/api';
import { AdminLayout } from '@/components/AdminLayout';
import type { Product } from '@/types';

import { ModalCreateProduct } from './components';

export const Admin: React.FC = () => {
  const [messageApi, holder] = message.useMessage();

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    select: (data) => data.map((item: Product) => ({ ...item, key: item.id })),
  });

  const { mutate } = useMutation({
    mutationFn: deleteProduct,
    mutationKey: ['deleteProduct'],
    onSuccess: () => {
      messageApi.success('Продукт успешно удален');
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

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
    {
      key: 'operations',
      title: '',
      render: (rowData) => (
        <>
          {holder}
          <Popconfirm
            title="Удаление продукта"
            description="Вы уверены, что хотите удалить этот продукт?"
            onConfirm={() => mutate(rowData.id)}
            onCancel={cancel}
            okText="Да"
            cancelText="Нет"
          >
            <Button danger type="primary" icon={<DeleteOutlined />} />
          </Popconfirm>
        </>
      ),
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

  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    messageApi.success('Click on Yes');
  };

  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    messageApi.error('Click on No');
  };

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
