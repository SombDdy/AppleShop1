import Link from "next/link"
import { Icon } from '@iconify/react';
import { useRouter } from "next/router"
import { Layout } from "@/components"
import data from '../../data/DB.json';
import { ProductCard } from '@ui';

export default function ProductCategory() {
    const router = useRouter()
    const path = router.asPath
    const isCategory = router.asPath.split('/')[2];
    const {links, product} = data;
    return (
        <Layout>
            <div className="pt-12 w-full px-2 sm:px-4 lg:px-14">
                <div className="grid grid-cols-6  items-center gap-y-1 sm:gap-y-5">
                    <div className = "flex md2:hidden justify-between col-span-6" >
                    {links.filter((e) => e.id >= 1 && e.id <= 4).map((e) =>
                        <Link 
                        href={e.href} 
                        className={`flex rounded-lg px-3 py-1.5 items-center ${isCategory === e.name ? 'bg-violet text-text' : 'border border-text-light'}`}>
                        <Icon icon={e.icon} className="w-10 h-10 sm:w-16 sm:h-16" />
                        </Link>
                    )}
                    </div>
                    <div className="text-xl hidden md2:block whitespace-nowrap sm:text-2xl lg:text-3xl text-text items-center col-span-3 md:col-span-1 col-start-1 col-end-2 md:row-start-1 md:row-end-1">Our Product</div>
                    <div className="flex fpt-4 text-3xl justify-around text-text col-span-6 xl:col-span-4 col-start-1 col-end-7 xl:col-start-2 xl:col-end-5 md:col-start-1 md:col-end-7 md2:justify-start row-span-2 row-start-2 row-end-4 lg:row-start-1 lg:row-end-2 pt-4">
                        <button className="px-2 py-1 sm:px-3 sm:py-3 md:px-4 md:py-2 xl:px-6 xl:py-3 bg-violet rounded-3xl text-[9px] md:text-sm xl:text-lg font-medium leading-relaxed">Popular First</button>
                        <button className="px-2 py-1 sm:px-3 sm:py-3 md:px-4 md:py-2 xl:px-6 xl:py-3 mx-4 border border-white rounded-3xl text-[10px] md:text-sm xl:text-lg font-medium leading-relaxed">Chipest First</button>
                        <button className="px-2 py-1 sm:px-3 sm:py-3 md:px-4 md:py-2 xl:px-6 xl:py-3 mr-4 border border-white rounded-3xl text-[10px] md:text-sm xl:text-lg font-medium leading-relaxed">Discount First</button>
                        <button className="px-2 py-1 sm:px-3 sm:py-3 md:px-4 md:py-2 xl:px-6 xl:py-3 border border-white rounded-3xl text-[10px] md:text-sm xl:text-lg font-medium leading-relaxed">Newest First</button>
                    </div>
                    <div className="text-[#666666] text-base hidden md2:block lg:text-lg font-medium col-span-1 col-start-6 col-end-7 text-end md:row-start-1 md:row-end-1">Sort</div>
                </div>
                <div className="w-full grid justify-between grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 gap-y-6 lg:gap-y-12 lg:gap-x-8 xl:gap-y-12 xl:gap-x-12 pt-16">
                    {product.map(item => <ProductCard item={item} />)}
                </div>
            </div>
        </Layout>

    )
}