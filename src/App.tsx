import { Row } from "antd";
import { PageLayout, ProductCard } from "./components"

import './main.css';
import { products } from "./data";

const App = () => {
  return (
    <PageLayout>
      <Row gutter={[16, 16]}>
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </Row>
    </PageLayout>
  )
}


export default App
