import { Link } from 'react-router-dom';
import { ShoppingCartIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { Menu } from '@headlessui/react';

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();
  
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              TechHub
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link to="/" className="text-gray-900 hover:text-gray-700">
                Home
              </Link>
              <Link to="/products" className="text-gray-900 hover:text-gray-700">
                Products
              </Link>
              <Link to="/about" className="text-gray-900 hover:text-gray-700">
                About
              </Link>
              <Link to="/contact" className="text-gray-900 hover:text-gray-700">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/wishlist" className="relative text-gray-900">
              <HeartIcon className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative text-gray-900">
              <ShoppingCartIcon className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
            {user ? (
              <Menu as="div" className="relative">
                <Menu.Button className="flex items-center text-gray-900">
                  <UserIcon className="h-6 w-6" />
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Menu.Item>
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <Link to="/login" className="text-gray-900">
                <UserIcon className="h-6 w-6" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}