import { Layout } from "@/components";
import { Icon } from '@iconify/react';
import { useRouter } from "next/router";
import React, { useState } from "react";
import data from '../data/DB.json';
import Link from "next/link";

interface Product {
    name: string;
    category: string;
    variant: string;
    pricePerItem: number;
    quantity: number;
}

export default function Basket() {
    const router = useRouter()
    const path = router.asPath
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [clickedButtonPlus, setClickButtonPlus] = useState<number | null>(null);
    const [clickedButtonMinus, setClickButtonMinus] = useState<number | null>(null);
    const [products, setProducts] = useState<Product[]>([
        { name: 'iPhone13', category: 'iPhone', variant: 'Light', pricePerItem: 1050, quantity: 1 },
        { name: 'Iphone 8', category: 'iPhone', variant: 'Light', pricePerItem: 1200, quantity: 2 }
    ]);
    const handleButtonClick = () => {
        setIsFormVisible(!isFormVisible);
    };

    const [subtotal, setSubtotal] = useState(() => calculateSubtotal(products));

    function calculateSubtotal(products: Product[]): number {
        return products.reduce((total, product) => total + product.pricePerItem * product.quantity, 0);
    }

    const addProduct = (index: number) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity += 1;
        setProducts(updatedProducts);
        setSubtotal(calculateSubtotal(updatedProducts));
        setClickButtonPlus(index);
        setClickButtonMinus(null);

    };

    const removeProduct = (index: number) => {
        const updatedProducts = [...products];
        if (updatedProducts[index].quantity > 0) {
            updatedProducts[index].quantity -= 1;
            setProducts(updatedProducts);
            setSubtotal(calculateSubtotal(updatedProducts));
        }
        setClickButtonMinus(index);
        setClickButtonPlus(null);
    };


    return (
        <Layout>
            <div className="pt-12 pb-12 w-full px-2 sm:px-4 lg:px-14">
                <div className="grid grid-cols-8">
                    <div className="flex flex-col col-span-5">
                        <p className="text-stone-50 text-3xl font-medium">Products</p>
                        {products.map((product, index) => (
                            <><div key={index} className={`mt-10 flex px-4 flex-row items-center justify-between mr-32 bg-zinc-800 rounded-2xl h-28 ${clickedButtonPlus === index || clickedButtonMinus === index ? 'border-violet border' : 'border-zinc-800'}`}>
                                <img src="/images/iphoneLight.svg" className="w-24 -mt-4" />
                                <div className="h-16 flex flex-col items-start border-r-2 opacity-80 border-stone-500 w-52">
                                    <p className="text-text text-xl font-medium">{product.name}</p>
                                    <p className="text-neutral-400 text-lg font-medium">{product.category}</p>
                                </div>
                                <div className="w-24 h-16 flex items-center border-r-2 opacity-80 border-stone-500">
                                    <p className="text-text text-xl font-medium w-24">{product.variant}</p>
                                </div>
                                <div className="flex flex-row items-center border-r-2 opacity-80 border-stone-500 w-40 h-16">
                                    <button onClick={() => addProduct(index)}>
                                        <Icon icon="ic:sharp-plus" className={`border rounded-full border-violet items-center lg:w-6 lg:h-6 lg:px-0.5 ${clickedButtonPlus === index ? 'text-text bg-violet' : 'text-violet'}`} />
                                    </button>
                                    <p className="text-text text-xl font-medium px-6">{product.quantity}</p>
                                    <button onClick={() => removeProduct(index)}>
                                        <Icon icon="ic:sharp-minus" className={`border rounded-full border-violet items-center lg:w-6 lg:h-6 lg:px-0.5 ${clickedButtonMinus === index ? 'text-text bg-violet' : 'text-violet'}`} />
                                    </button>
                                </div>
                                <div className="flex text-center gap-x-2 w-36">
                                    <span className="text-neutral-400 text-lg font-medium">Pricing</span><span className="text-text text-xl font-medium">${product.pricePerItem}</span>
                                </div>
                            </div>
                                <div>
                                    <Icon icon="iconoir:cancel" rotate={3} />
                                </div>
                            </>
                        ))}
                        <div className="flex flex-row pt-10 gap-x-40">
                            <div className="flex flex-row gap-x-6">
                                <Link className="bg-bg-black px-6 py-4 rounded-3xl flex flex-row items-center gap-x-2" href={"/categories/Iphone13"}>
                                    <Icon icon="cil:arrow-top" rotate={3} className="text-text text-xl font-medium" />
                                    <p className="text-neutral-400 text-xl font-medium">Back to shopping</p>
                                </Link>
                                <Link className="bg-bg-black px-6 py-4 rounded-3xl flex flex-row items-center gap-x-2" href={"/"}>
                                    <Icon icon="cil:arrow-top" rotate={3} className="text-text text-xl font-medium" />
                                    <p className="text-neutral-400 text-xl font-medium">Go to home page</p>
                                </Link>
                            </div>
                            <div className="bg-bg-black px-6 py-4 rounded-3xl flex flex-row items-center gap-x-2">
                                <span className="text-neutral-400 text-base font-medium">Subtotal</span><span className="text-text text-xl font-medium">${subtotal}</span>
                            </div>
                        </div>

                    </div>
                    <div className={`col-span-3 bg-violet rounded-3xl w-full h-full p-10 ${isFormVisible ? 'block' : 'hidden'}`}>
                        <p className="text-stone-50 text-3xl font-medium">Contact information</p>
                        <div className="pt-10">
                            <input type="text" placeholder="First name" className="bg-violet border border-text text-lg placeholder-text rounded-3xl pl-10 w-full py-2 focus:outline-none" /> 
                            <input type="text" placeholder="Last Name" className="bg-violet border border-text text-lg placeholder-text rounded-3xl pl-10 w-full py-2 mt-5 focus:outline-none" />
                            <input type="text" placeholder="Phone number" className="bg-violet border border-text text-lg placeholder-text rounded-3xl pl-10 w-full py-2 mt-5 focus:outline-none" />
                            <input type="text" placeholder="Email" className="bg-violet border border-text text-lg placeholder-text rounded-3xl pl-10 w-full py-2 mt-5 focus:outline-none" />
                        </div>
                        <p className="text-stone-50 text-3xl font-medium pt-10">Delivery</p>
                        <input type="text" placeholder="City" className="bg-violet border border-text text-lg rounded-3xl placeholder-text pl-10 w-full py-2 mt-10 focus:outline-none" />
                        <div className="flex justify-center pt-10">
                            <button onClick={handleButtonClick} className="bg-purple text-text py-2 w-4/5 rounded-3xl">Make an order</button>
                        </div>
                    </div>
                    <div className={`col-span-3 bg-violet rounded-3xl w-full h-full p-10 ${isFormVisible ? 'hidden' : 'flex flex-col'}`}>
                        <div className="flex flex-row justify-between">
                            <p className="text-text text-3xl font-medium">Card detail</p>
                            <button onClick={handleButtonClick}>
                                <Icon icon="cil:arrow-top" rotate={3} className="text-text text-xl font-medium" />
                            </button>
                        </div>
                        <p className="text-text opacity-60 text-lg font-medium pt-5">Select card Type</p>
                        <div className="flex gap-3 text-text pt-5">
                            <Icon icon="cib:cc-visa" className="text-5xl" />
                            <Icon icon="fa-brands:cc-mastercard" className="text-5xl" />
                            <Icon icon="simple-icons:applepay" className="text-5xl" />
                        </div>
                        <input type="text" placeholder="Card Number" className="bg-violet border border-text text-lg placeholder-text rounded-3xl pl-10 w-full py-2 mt-5 focus:outline-none" />
                        <div className="flex flex-row justify-between pt-5">
                            <p className="text-text text-lg font-medium">Explore Date</p>
                            <p className="text-text text-lg font-medium">CVV</p>
                        </div>
                        <div className="flex flex-row justify-between pt-5">
                            <div className="flex flex-row items-end gap-x-1">
                                <div className="flex flex-row items-end">
                                <input type="text" placeholder="" className="bg-violet border-b border-text text-sm text-bottom placeholder-text w-10 focus:outline-none" />
                                <div className="w-0.5 h-4 bg-text transform -skew-x-6 "></div>
                                </div>
                                <div className="flex flex-row items-end">
                                <input type="text" placeholder="" className="bg-violet border-b border-text text-sm text-bottom placeholder-text w-10 focus:outline-none" />
                                <div className="w-0.5 h-4 bg-text transform -skew-x-6 "></div>
                                </div>
                                <div className="flex flex-row items-end">
                                <input type="text" placeholder="" className="bg-violet border-b border-text text-sm text-bottom placeholder-text w-10 focus:outline-none" />
                                <div className="w-0.5 h-4 bg-text transform -skew-x-6 "></div>
                                </div>
                            </div>
                            <div>
                            <div className="flex flex-row items-end">
                                <input type="text" placeholder="" className="bg-violet border-b border-text text-sm text-bottom placeholder-text w-16 focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center pt-10">
                            <button className="bg-purple text-text py-2 w-4/5 rounded-3xl">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}