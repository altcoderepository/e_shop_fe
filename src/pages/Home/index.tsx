import { useQuery } from '@tanstack/react-query';
import { Row } from 'antd';

import { getProducts } from '@/api';
import { PageLayout, ProductCard } from '@/components';
import type { Product } from '@/types';

export const Home = () => {
  const { data, isFetching, isError, isSuccess } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return (
    <PageLayout>
      <Row gutter={[16, 16]}>
        {isFetching && <div>Загрузка...</div>}
        {isError && <div>Ошибка...</div>}
        {isSuccess &&
          data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Row>
    </PageLayout>
  );
};
