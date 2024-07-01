import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useState } from 'react';


export default function MainBody() {

    const colors = [
        {
            id: 0,
            img: 'images/iphoneBlue.svg',
            color: 'blue-titanium',
        },
        {
            id: 1,
            img: 'images/iphonePink.svg',
            color: 'light-pink',
        },
        {
            id: 2,
            img: 'images/iphoneDark.svg',
            color: 'dark-titanium',
        },
        {
            id: 3,
            img: 'images/iphoneLight.svg',
            color: 'naturel-titanium',
        }
    ]
    const [pickedColor, setPickedColor] = useState<number>(0);

    return (
        <div className="flex pt-8 lg:pt-10 px-2 sm:px-4 lg:px-14">
            <div className="grid w-full grid-cols-6">
                <div className="text-text text-3xl lg:text-5xl xl:text-6xl lg:pt-20 xl:pt-16 col-span-6 lg:col-span-3 row-start-1 row-end-2">
                    <p className="font-bold leading-normal">The Perfect Moment</p>
                    <p className="font-normal leading-tight">Between Past And Future.</p>
                    <Link href={'/product/Iphone13'}>
                    <button className="lg:text-lg lg:px-12 lg:py-3 xl:text-3xl rounded-full border-text border lg:mt-32 xl:mt-24 hidden lg:flex">Buy Now</button>
                    </Link>
                </div>
                <div className="grid grid-cols-10 lg:grid-cols-8 col-span-6 row-start-2 sm-row-end-3 lg:col-span-3 lg:row-start-1 lg:row-end-2 pt-6">
                    <div className="col-span-6 lg:col-span-6 order-2 lg:order-1">
                        <img src={colors[pickedColor].img} className="w-72 lg:w-96 lg:ml-20 xl:ml-32" />
                        <img src="images/shadow.svg" className="w-80 lg:w-full xl:w-full -ml-7 lg:ml-12 xl:ml-8" />
                    </div>
                    <div className="pt-10 sm:pt-28 lg:pt-24 lg:pl-24 xl:pt-36 xl:pl-36 col-span-1 order-1 lg:order-2" >
                        {
                            colors.map((c) =>
                                <div className='flex flex-col items-center ' key = {c.id}>
                                    
                                    <div
                                        className={`mb-1 rounded-full  ${c.id === pickedColor ? 'w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 xl:w-7 xl:h-7' : 'w-2 h-2 sm:w-3 sm:h-3 lg:w-5 lg:h-5 xl:w-6 xl:h-6'} border-text border bg-${c.color}`}
                                        onClick={() => setPickedColor(c.id)}
                                    />
                                    {
                                        c.id + 1 !== colors.length
                                        &&(
                                        <div className='flex flex-col items-center'>
                                            <div className="bg-ellipse mb-1 w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 rounded-full"></div>
                                            <div className="hidden lg:flex mb-1 bg-ellipse w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 rounded-full"></div>
                                            <div className="bg-ellipse mb-1 w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 rounded-full"></div>
                                            <div className="bg-ellipse mb-1 w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1 lg:h-1 rounded-full"></div>
                                        </div>)
                                    }
                                </div>

                            )
                            // {colors.map((e) => e.id === pickedColor ? )}
                        }
                    </div>
                    <div className="flex-col items-start pl-4 pt-4 col-span-3 order-3 flex lg:hidden">
                        <div className="flex flex-col items-center gap-y-16 sm:gap-y-28 h-full gap-x-8 lg:pt-6 xl:pt-6 lg:mr-4">
                            {colors.map((e) => (
                                e.id !== pickedColor && (
                                    <div key={e.id} className={`bg-${e.color} w-8 sm:w-16 lg:w-40 lg:h-3/5 xl:w-44 xl:h-3/5 rounded-2xl relative`}>
                                        <img src={e.img} className="mr-8 sm:w-16 lg:w-24 xl:w-24 absolute lg:left-9 lg:-top-12 xl:left-12 xl-top-12" />
                                    </div>
                                )
                            ))}
                            <button className="mt-2 text-xs px-1.5 py-1 sm:px-4 sm:py-2 lg:text-lg lg:px-12 lg:py-3 xl:text-3xl rounded-full border-text text-text border lg:mt-32 xl:mt-24 whitespace-nowrap">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="w-full justify-between lg:pt-20 xl:pt-6 lg:pr-1 xl:pr-12 lg:col-span-6 row-start-2 row-end-3 hidden lg:flex">
                    <div className=" text-stone-50 lg:text-2xl xl:text-3xl font-medium lg:pt-16 xl:pt-16 mb-16 opacity-80">
                        <Icon icon="cil:arrow-top" className="inline-flex -rotate-90" />
                        <div className="inline-flex px-4">1</div>
                        <Icon icon="cil:arrow-top" className="inline-flex rotate-90" />
                    </div>
                    <div className="grid grid-cols-3 justify-between lg:gap-x-2 xl:gap-x-6 lg:pt-6 xl:pt-6 -lg:mr-8 xl:mr-16">
                        {colors.map((e) => (
                            e.id !== pickedColor && (
                                <div key={e.id} className={`bg-${e.color} lg:w-40 lg:h-3/5 xl:w-44 xl:h-3/5 rounded-2xl relative`}>
                                    <img src={e.img} className="lg:w-20 xl:w-32 absolute lg:left-16 lg:-top-12 xl:left-36 2xl:left-24 2xl:top-12" />
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}