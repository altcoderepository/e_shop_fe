import { Card, Col, Typography as T } from "antd";
import { HeartOutlined, ShareAltOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { type FC } from "react";
import type { Product } from "../../types";
import { useCartStore } from "../../store";

const { Meta } = Card;

// TODO подключить axios
// TODO Создать запросы
type ProductCardProps = {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { add } = useCartStore()

  const description = <T.Paragraph ellipsis={{
    rows: 1,
    tooltip: `${product.artist} / ${product.title}`
  }}>{product.artist} / {product.title}</T.Paragraph>;

  const addToCart = (product: Product) => {
    add(product)
  }

  const actions = [
    <HeartOutlined key="heart" style={{ color: '#ff6b6b' }} />,
    <ShareAltOutlined key="share" style={{ color: '#4ecdc4' }} />,
    <ShoppingCartOutlined key="cart" style={{ color: '#45b7d1' }} onClick={() => addToCart(product)} />,
  ];

  return (
    <Col span={6}>
      <Card
        hoverable
        actions={actions}
        cover={
          <img
            draggable={false}
            alt={`${product.artist} ${product.title}`}
            src={product.coverUrl}
          />
        }
      >
        <Meta title={`${product.price} p.`} description={description} />
      </Card>
    </Col>
  )
};