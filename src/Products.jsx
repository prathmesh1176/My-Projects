import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import Cart from './Cart';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  
  const [isCartopen,setIsCartopen]=useState(false);
  
  const toggleCart=()=>{
    setIsCartopen(!isCartopen);
  }
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');

        const data = await response.json();
        console.log('Fetched products:', data.products);

        const withQty = data.products.map((p) => ({ ...p, qty: 0 }));
        setProducts(withQty);

        console.log('First Product:', withQty[0]);

        // Create category list ONLY from product categories
        const productCategories = [...new Set(withQty.map((p) => p.category))];
        setCategory(['all', ...productCategories]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

    useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BeatLoader size={15} color="#4f46e5" loading={loading} />
      </div>
    );
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const increment = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  const decrement = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.qty > 0 ? { ...p, qty: p.qty - 1 } : p
      )
    );
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };


  const filterProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

console.log("Products state:", products);
console.log("Categories state:", category);
console.log("Selected category:", selectedCategory);
console.log("Filtered products:", filterProducts);

  return (
  <>
    <Navbar
      search={search}
      handleSearch={handleSearch}
      category={category}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      toggleCart={toggleCart} 
    />

    <div className="p-6  border-4 border-black min-h-screen pt-20">
      <ProductList
        filterProducts={filterProducts}
        increment={increment}
        decrement={decrement}
      />
    </div>

    <Footer />
    <Cart isOpen={isCartopen} toggleCart={toggleCart} />

  </>
);

};

export default Products;
