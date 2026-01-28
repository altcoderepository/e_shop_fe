

import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge, Drawer, Typography } from 'antd';
import { useState } from 'react';

import css from './styles.module.css';
import { useCartStore } from '../../store';

export const Cart = () => {
  const [open, setOpen] = useState(false);

  const { products } = useCartStore((state) => state);

  return (
  <div>
    <Badge size="small" count={products.length}>
      <ShoppingCartOutlined className={css['cart-icon']} onClick={() => setOpen(!open)} />
    </Badge>
    <Drawer
        title="Cart"
        onClose={() => setOpen(!open)}
        open={open}
      >
        {products.map((product) => <Typography.Paragraph key={product.id}>{product.title}</Typography.Paragraph>)}
      </Drawer>
  </div>
)};