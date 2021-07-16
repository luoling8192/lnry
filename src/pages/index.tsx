import IntroShow from '@/components/IntroShow';
import ProductShow from '@/components/ProductShow';

export default function IndexPage() {
  return (
    <div>
      <IntroShow type={'about'} />

      <ProductShow />

      <IntroShow type={'hotline'} />
    </div>
  );
}
