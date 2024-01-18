import ProductCard from './components/ui/ProductCard/ProductCard';
import Nav from './components/ui/Nav/Nav';

export default function Home() {
  return (
    <main>
      <Nav />
      <div className='flex'>
        <ProductCard />
      </div>
    </main>
  );
}
