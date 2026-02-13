import { Row } from "antd";
import { PageLayout, ProductCard } from "../../components";
import { products } from "../../data";

export const Home = () => (
  <PageLayout>
    <Row gutter={[16, 16]}>
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </Row>
  </PageLayout>
)