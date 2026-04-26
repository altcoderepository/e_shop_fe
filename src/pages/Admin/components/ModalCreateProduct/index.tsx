import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Form, Input, Modal, type FormProps } from 'antd';
import useNotification from 'antd/es/notification/useNotification';
import { v4 as uuidv4 } from 'uuid';

import React from 'react';

import { createProduct } from '@/api';
import type { Product } from '@/types';

type FieldType = Omit<Product, 'id'>;

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const ModalCreateProduct = () => {
  const [openCreatingModal, setOpenCreatingModal] = React.useState(false);
  const [api, contextHolder] = useNotification();

  const queryClient = useQueryClient();

  const [form] = Form.useForm<FieldType>();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      title: 'Продукт успешно добавлен',
    });
  };

  const { mutate } = useMutation({
    mutationFn: createProduct,
    mutationKey: ['createProduct'],
    onSuccess: () => {
      form.resetFields();
      setOpenCreatingModal(false);
      openNotificationWithIcon('success');
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const showModal = () => {
    setOpenCreatingModal(true);
  };

  const handleOk = () => {
    setOpenCreatingModal(false);
  };

  const handleCancel = () => {
    setOpenCreatingModal(false);
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    const id = uuidv4();
    mutate({ id, ...values });
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        Добавить
      </Button>
      <Modal
        title="Добавить новый продукт"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={openCreatingModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout="vertical"
          name="create-product"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Название"
            name="title"
            rules={[
              { required: true, message: 'Поле обязательное для заполнения' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Исполнитель"
            name="artist"
            rules={[
              { required: true, message: 'Поле обязательное для заполнения' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Жанр"
            name="genre"
            rules={[
              { required: true, message: 'Поле обязательное для заполнения' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Цена"
            name="price"
            rules={[
              { required: true, message: 'Поле обязательное для заполнения' },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Обложка" name="coverUrl">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Form>
      </Modal>
    </>
  );
};
