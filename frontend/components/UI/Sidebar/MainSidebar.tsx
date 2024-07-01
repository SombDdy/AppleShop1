import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import data from '../../../data/DB.json';
import { useRouter } from "next/router";
import React, { useState } from 'react';

export default function MainSidebar() {
    const router = useRouter();
    const path = router.asPath;
    const categoryNameInPath = path.split('/')[2];
    const isCategory : boolean = path.split('/')[1] === 'categories' || path.split('/')[1] === 'basket';
    const [menuState, setMenuState] = useState<boolean>(true);
    const { links } = data
    return (
        <div className={`w-full bg-bg-black hidden md2:flex`}>
            {isCategory ? (
                <div className="text-text-light items-center flex flex-col w-32">
                    <Link href= '/'>
                        <img src="/images/smallApple.svg" className="w-12 h-16 mt-8" />
                    </Link>
                    <div className="flex flex-col mt-8 justify-center gap-y-6">
                        {links.map((k) =>
                            <Link
                                key={k.id} 
                                href={k.href} 
                                className={`flex gap-6 px-4 py-1 rounded-lg items-center ${categoryNameInPath === k.name ? 'bg-violet text-text' : ''}`}>
                                
                                <Icon icon={k.icon} className="w-6 h-6" />
                            </Link>
                        )}
                    </div>
                </div>
            ) : (
                <div className='min-w-[230px] px-3 xl:px-12 pt-9 space-y-12 hidden md:block'>
                    <div className="flex gap-7">
                        <Link href={"/"}>
                        <img
                            src="/images/smallApple.svg"
                            className="w-12 h-16 ml-2 xl:ml-0"
                        />
                        </Link>
                        
                        <Link className="font-medium text-text" href={"/"}>
                            <p className="text-base">APPLE</p>
                            <p className="text-[4px]">APPPLE APPLE AAPPLE AP</p>
                            <p className="text-[4px]">APPPLE APPLE AAPPLE AP</p>
                            <p className="text-base">APPLE</p>
                        </Link>
                    </div>

                    <div className={`text-text overflow-hidden ${menuState ? 'lg:h-[384px] xl:h-[424px]' : 'h-7'} transition-all duration-700 ease-in-out px-4`}>
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={() => setMenuState(!menuState)}
                        >
                            <p className="font-medium lg:text-base xl:text-lg pr-16 lg:pr-[78px] xl:pr-[98px]">CATEGORY</p>
                            <button className="p-1 bg-text-light rounded-full opacity-75">
                                <Icon icon={`${menuState ? 'ep:arrow-up' : 'ep:arrow-down'}`} className="text-sm" />
                            </button>
                        </div>
                        <div className="space-y-5 text-neutral-400 text-sm lg:text-base xl:text-lg pt-7 ">
                            {links.map((j) =>
                                <Link href={j.href} className="flex gap-6 items-center">
                                    <Icon icon={j.icon} className="w-[20px] h-[20px]" />
                                    <p className="text-neutral-400 font-medium">{j.name}</p>
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-3 text-neutral-400 px-4">
                        <Icon icon="ep:shop" className="w-[20px] h-[20px]" />
                        <Icon icon="ri:twitter-fill" className="w-[20px] h-[20px]" />
                        <Icon icon="ic:baseline-discord" className="w-[20px] h-[20px]" />
                        <Icon icon="mdi:gmail" className="w-[20px] h-[20px]" />
                        <Icon icon="bi:instagram" className="w-[20px] h-[20px]" />
                        <Icon icon="file-icons:telegram" className="w-[20px] h-[20px]" />
                        <Icon icon="ic:round-facebook" className="w-[20px] h-[20px]" />
                    </div>
                </div>
            )}
        </div>
    )
}