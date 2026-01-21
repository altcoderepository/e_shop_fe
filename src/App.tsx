import { Row } from "antd";
import { PageLayout, ProductCard } from "./components"

import './main.css';

function App() {

  const products = [
    'procuct 1',
    'procuct 2',
    'procuct 3',
    'procuct 4',
    'procuct 5',
    'procuct 6',
    'procuct 7',
    'procuct 8',
    'procuct 9',
    'procuct 10',
    'procuct 11',
    'procuct 12',
    'procuct 13',
    'procuct 14',
    'procuct 15',
    'procuct 16',
  ];

  return (
    <PageLayout>
      <Row gutter={[16, 16]}>
        {products.map((_, idx) => <ProductCard key={idx} />)}
      </Row>
    </PageLayout>
  )
}

export default App
