

import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Button, Drawer, Empty, Flex, Space, Typography } from 'antd';
import { useState } from 'react';

import css from './styles.module.css';
import { useCartStore } from '../../store';
import { CartItem } from '../CartItem';

export const Cart = () => {
  const [open, setOpen] = useState(false);

  const { products, removeAll } = useCartStore((state) => state);

  const getTotalPrice = () => products.length ? products.reduce((acc, current) => acc += current.price, 0) : 0;

  return (
  <div>
    <Badge size="small" count={products.length}>
      <ShoppingCartOutlined className={css['cart-icon']} onClick={() => setOpen(!open)} />
    </Badge>
    <Drawer
        title="Корзина"
        size={640}
        onClose={() => setOpen(!open)}
        open={open}
        footer={
          <Flex justify="space-between">
            <Typography.Paragraph>Всего: {getTotalPrice()} р.</Typography.Paragraph>
            <Space>
              <Button color="danger" variant="outlined" disabled={products.length === 0} onClick={removeAll}>Очистить</Button>
              <Button color="primary" variant="solid">Заказать</Button>
            </Space>
          </Flex>
        }
      >
        <Flex vertical gap="middle">
          {products.length
            ? products.map((product) => <CartItem key={product.id} {...product} />) 
            : <Empty description="Корзина пуста" image={Empty.PRESENTED_IMAGE_SIMPLE} />
          }
        </Flex>
      </Drawer>
  </div>
)};