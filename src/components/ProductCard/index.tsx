import { Card, Col } from "antd";
import { HeartOutlined, ShareAltOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;

// TODO Инициализировать тип товара
// TODO подключить axios
// TODO Создать запросы

export const ProductCard = () => {

  const actions = [
    <HeartOutlined key="heart" style={{ color: '#ff6b6b' }} />,
    <ShareAltOutlined key="share" style={{ color: '#4ecdc4' }} />,
    <ShoppingCartOutlined key="cart" style={{ color: '#45b7d1' }} />,
  ];

  return (
    <Col span={6}>
      <Card
        hoverable
        actions={actions}
        cover={
          <img
            draggable={false}
            alt="example"
            src="https://avatars.mds.yandex.net/i?id=d9d1b3c1bd438540ced65a5cf346bd8a_sr-5211479-images-thumbs&n=13"
          />
        }
      >
        <Meta title="5000 р." description="MF DOOM / Operation: Doomsday" />
      </Card>
    </Col>
  )
};