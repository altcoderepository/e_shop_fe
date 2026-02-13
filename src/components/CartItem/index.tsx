import type { FC } from "react";
import type { CartProduct } from "../../types";
import { Button, Flex, InputNumber, Typography, type InputNumberProps } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

import css from './styles.module.css';
import { useCartStore } from "../../store";

type CartItemProps = CartProduct;

export const CartItem: FC<CartItemProps> = ({ id, title, artist, coverUrl, price, count }) => {
  const { remove } = useCartStore();

  const removeFromCart = (productId: string) => {
    remove(productId);
  }

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
      <Flex gap="middle" >
        <img src={coverUrl} className={css['cart-item-cover']} />
        <Flex vertical gap={0}>
          <Typography.Paragraph>{artist}</Typography.Paragraph>
          <Typography.Paragraph>{title}</Typography.Paragraph>
          <Typography.Paragraph strong>{price} р.</Typography.Paragraph>
        </Flex>
      </Flex>
      <InputNumber {...sharedProps} placeholder="Outlined" />
      <Button color="danger" variant="solid" icon={<DeleteOutlined />} onClick={() => removeFromCart(id)} />
    </Flex>
  )
}