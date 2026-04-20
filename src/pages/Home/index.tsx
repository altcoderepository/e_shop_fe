import { Row } from 'antd';
import { PageLayout, ProductCard } from '../../components';
import { useQuery } from '@tanstack/react-query';
import type { Product } from '../../types';

export const Home = () => {
  // TODO Вынести в отдельный файл метод запроса
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.API_URL}:${process.env.API_PORT}/products`
      );
      return response.json();
    },
  });

  // Добавить обработку ошибок и загрузки
  return (
    <PageLayout>
      <Row gutter={[16, 16]}>
        {data?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </PageLayout>
  );
};
