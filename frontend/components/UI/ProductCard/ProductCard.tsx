import { Icon } from '@iconify/react';

interface ProductCardProps {
    item:{
        id:string,
        name:string,
        price:string,
        images:string[],
        description:string,

    }
}

export default function ProductCard({item}: ProductCardProps) {
    return (
        <div className="bg-bg-light w-full h-60 lg:h-80 xl:h-96 rounded-3xl relative">
            <div className="flex bg-bg-light w-full lg:h-72 rounded-3xl relative flex-col items-center">
                <img src={item.images[0]} className="absolute -top-3 lg:-top-5 w-20 lg:w-24 xl:w-32" />
                <div className="absolute top-36 lg:top-40 xl:top-56">
                    <div className="text-text text-center text-xs lg:text-base font-medium">{item.name}</div>
                    <div className="py-2 text-text-light text-center text-xs lg:text-sm font-regular">{item.description}</div>
                    <div className="text-violet text-center text-xs lg:text-base font-bold">{item.price} $</div>
                </div>
                <div className="absolute top-52 lg:top-60 xl:top-80 inline-flex items-center pt-2.5 lg:pt-8 lg:px-5">
                    <Icon icon="ic:sharp-plus" className="border rounded-full text-violet border-violet items-center lg:w-6 lg:h-6 lg:px-0.5" />
                    <div className="ml-3 text-xs lg:text-sm font-medium text-text ">
                        ADD TO BAG
                    </div>
                </div>
            </div>
        </div>
    )
}