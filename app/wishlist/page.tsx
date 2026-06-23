/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import LoadingSpinner from '@/components/LoadingSpinner';
import Header from '@/components/Header';

export default function WishlistPage() {
    const { wishlist, removeFromWishlist, clearWishlist, isLoading } = useWishlist();
    const { addToCart } = useCart();

    const handleAddToCart = (product: any) => {
        addToCart(product);
        removeFromWishlist(product.id);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#e4d7bc]/20 via-white to-[#f6efaa]/10">
                <Header />
                <div className="container mx-auto px-4 lg:px-8 py-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#800000] mb-8 text-center">
                        My <span className="text-[#fa3035]">Wishlist</span>
                    </h1>
                    <LoadingSpinner />
                </div>
            </div>
        );
    }

    if (wishlist.length === 0) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-gradient-to-br from-[#e4d7bc]/20 via-white to-[#f6efaa]/10">
                    <div className="container mx-auto px-4 lg:px-8 py-16">
                        <div className="text-center py-12">
                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border-2 border-white/20 max-w-md mx-auto">
                                <Heart className="w-20 h-20 text-[#fa3035] mx-auto mb-6" />
                                <h2 className="text-2xl font-bold text-[#800000] mb-4">Your wishlist is empty</h2>
                                <p className="text-gray-600 mb-8 text-lg">Save items you love to your wishlist!</p>
                                <Link
                                    href="/products"
                                    className="inline-flex items-center bg-gradient-to-r from-[#fa3035] to-[#800000] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Browse Products
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 lg:px-8 py-8">
                        <div className="text-center">
                            <Link
                                href="/products"
                                className="text-[#fa3035] hover:text-[#800000] transition-colors font-semibold"
                            >
                                ← Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
                        <p className="text-gray-600">
                            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => wishlist.forEach(product => handleAddToCart(product))}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                        >
                            Add All to Cart
                        </button>
                        <button
                            onClick={clearWishlist}
                            className="text-red-600 hover:text-red-800 transition-colors text-sm font-medium"
                        >
                            Clear All
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {wishlist.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                            <div className="relative">
                                <Link href={`/products/${product.id}`}>
                                    <div className="relative h-56 w-full bg-gray-50">
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                    </div>
                                </Link>
                                <button
                                    onClick={() => removeFromWishlist(Number(product.id))}
                                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-red-600 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="p-5">
                                <Link href={`/products/${product.id}`}>
                                    <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors line-clamp-2 mb-3">
                                        {product.name}
                                    </h3>
                                </Link>

                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-2xl font-bold text-gray-900">
                                        ${product.price?.toFixed(2) || '0.00'}
                                    </p>
                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-sm text-gray-600">4.5</span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="flex-1 bg-blue-600 text-white py-2.5 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                        Add to Cart
                                    </button>

                                    <button
                                        onClick={() => removeFromWishlist(Number(product.id))}
                                        className="p-2.5 border border-gray-300 text-red-600 hover:bg-red-50 rounded-lg transition-colors sm:hidden"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {wishlist.length > 0 && (
                    <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Ready to checkout?</h3>
                                <p className="text-gray-600">Add your wishlist items to cart and proceed</p>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => wishlist.forEach(product => handleAddToCart(product))}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                >
                                    Add All to Cart
                                </button>
                                <Link
                                    href="/products"
                                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}