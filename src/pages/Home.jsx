import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat h-screen"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto h-full">
            <div className="relative flex items-center h-full px-4 sm:px-6 lg:px-8">
              <div className="text-center mx-auto max-w-2xl">
                <span className="block text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4">
                  Premium Quality Products
                </span>
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-8">
                  <span className="block">Discover</span>
                  <span className="block text-blue-400">Extraordinary</span>
                  <span className="block">Tech</span>
                </h1>
                <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  Explore our collection of premium gadgets designed to elevate your lifestyle and productivity. Minimalist design with maximum impact.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <Link
                    to="/products"
                    className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-150"
                  >
                    Explore Collection
                  </Link>
                  <Link
                    to="/signup"
                    className="px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 md:py-4 md:text-lg md:px-10 transition duration-150"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}