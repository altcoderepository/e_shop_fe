import type { FC } from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import {
  Button,
  Flex,
  InputNumber,
  type InputNumberProps,
  Typography,
} from 'antd';

import { useCartStore } from '../../store';
import type { CartProduct } from '../../types';
import css from './styles.module.css';

type CartItemProps = CartProduct;

export const CartItem: FC<CartItemProps> = ({
  id,
  title,
  artist,
  coverUrl,
  price,
  count,
}) => {
  const { remove } = useCartStore();

  const removeFromCart = (productId: string) => {
    remove(productId);
  };

  const onChange: InputNumberProps['onChange'] = (value) => {
    console.log('changed', value);
  };

  const sharedProps = {
    mode: 'spinner' as const,
    min: 1,
    max: 10,
    defaultValue: count,
    onChange,
    style: { width: 150 },
  };

  return (
    <Flex gap="middle" align="center" justify="space-between">
      <Flex gap="middle">
        <img src={coverUrl} className={css['cart-item-cover']} />
        <Flex vertical gap={0}>
          <Typography.Paragraph>{artist}</Typography.Paragraph>
          <Typography.Paragraph>{title}</Typography.Paragraph>
          <Typography.Paragraph strong>{price} р.</Typography.Paragraph>
        </Flex>
      </Flex>
      <InputNumber {...sharedProps} placeholder="Outlined" />
      <Button
        color="danger"
        variant="solid"
        icon={<DeleteOutlined />}
        onClick={() => removeFromCart(id)}
      />
    </Flex>
  );
};
