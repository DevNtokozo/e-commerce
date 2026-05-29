import ProductCard from '../components/ProductCard';
import { getProducts } from '../data/products'; 
import { Link } from 'react-router';// Assume this function is defined to fetch products

export default function Home() {
    const products = getProducts(); // Assume this function fetches products from an API or database
    return (
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title">Welcome to ShopMate</h1>
                <p className="home-subtitle">
                    Your one-stop shop for all your needs.
                </p>
            </div>
            <div className="container">
                <h2 className="page-title">Featured Products</h2>
                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}
