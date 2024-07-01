import { Layout } from "@/components";
import { Icon } from '@iconify/react';
import { useRouter } from "next/router";
import { useState } from "react";
import { ProductCard } from '@ui';
import data from '../../data/DB.json';

export default function Product() {
    const router = useRouter()
    const path = router.asPath
    const isCategory = router.asPath.split('/')[2];
    const { colors, product } = data;

    const [pickedColor, setPickedColor] = useState<number>(0);
    return (
        <Layout>
            <div className="pt-12 w-full">
                <div className="grid grid-cols-10 w-full pr-2 sm:pr-4 lg:pr-14 px-2 sm:px-4 lg:px-14">
                    <div className="hidden md2:flex flex-col bg-violet h-full lg:h-4/5 xl:h-full col-span-2 items-center">
                        <div className="flex bg-purple w-28 h-32 lg:w-36 lg:h-72 xl:w-48 xl:h-48 mt-8 rounded-2xl justify-center">
                            <img src="/images/iphoneDiagonal.svg" className="w-12 lg:w-20 xl:w-24" />
                        </div>
                        <div className="flex flex-col mt-7 opacity-30 items-center">
                            <Icon icon="bi:apple" className="text-text text-5xl lg:text-6xl xl:text-8xl" />
                            <p className="text-center text-3xl lg:text-5xl xl:text-7xl text-text">APPLE</p>
                        </div>
                        <div className="flex flex-col mt-6 mb-10 items-center">
                            <p className="text-text text-xs lg:text-sm xl:text-base font-medium">ORIGINAL PRODUCT</p>
                            <p className="text-neutral-400 text-xs lg:text-sm xl:text-base font-medium pb-6 pt-2">iPhone</p>
                            <button className="flex text-text text-xs lg:text-sm xl:text-base items-center font-medium border border-text px-3 lg:px-5 py-2 rounded-3xl">
                                <p className="text-xs lg:text-sm xl:text-base">ORDER NOW</p>
                                <Icon icon="fluent-mdl2:shop" className="text-text text-sm lg:text-xl xl:text-2xl ml-1 lg:ml-4" />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-10 md2:col-span-6 md2:pl-12 lg:pl-20">
                        <div className="hidden md2:flex gap-x-4 lg:pl-4 xl:pl-16">
                            <button className="text-text text-xs lg:text-sm xl:text-lg font-medium border rounded-3xl px-4 py-1 lg:px-6 lg:py-1 xl:px-8 xl:py-2 whitespace-nowrap">iPhone 15</button>
                            <button className="text-text text-xs lg:text-sm xl:text-lg font-medium border rounded-3xl px-4 py-1 lg:px-6 lg:py-1 xl:px-8 xl:py-2 whitespace-nowrap">iPhone 15 Pro</button>
                            <button className="text-text text-xs lg:text-sm xl:text-lg bg-violet font-medium rounded-3xl px-4 py-1 lg:px-6 lg:py-1 xl:px-8 xl:py-2 whitespace-nowrap">iPhone 15 Pro Max</button>
                        </div>
                        <div className="flex justify-center  overflow-hidden">
                            <div className="flex relative justify-center md2:justify-start pt-0 md2:pt-6">
                                <p className = "flex absolute md2:hidden top-10 xs:top-12 xs2:top-16 text-text opacity-30 text-8xl xs:text-9xl xs2:text-[150px] sm:text-[170px] z-10 font-extrabold ">APPLE</p>
                                <img src={colors[pickedColor].img} className="w-7/12 md2:w-full xl:w-full ml-6 md2:ml-0 z-20"/>
                            </div>
                            <div className="hidden md2:flex items-center justify-center text-start w-36 pl-12">
                                <p className="text-text opacity-10 text-7xl lg:text-[100px] xl:text-[150px] -rotate-90">APPLE</p>
                            </div>
                        </div>
                        <div className="pt-4 md2:flex hidden flex-col">
                            <p className="text-neutral-400 xl:text-xl font-medium">iPhone</p>
                            <p className="font-medium xl:text-2xl"><span className="text-text">IPHONE</span><span className="text-neutral-400"> 15 PRO MAX</span></p>
                            <p className="text-purple xl:text-2xl font-bold">1500 $</p>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-10 md2:col-span-2 ">
                        <div className="hidden md2:flex justify-end order-1">
                            <Icon icon="cil:arrow-right" className="text-text-light text-3xl lg:text-4xl xl:text-5xl" />
                        </div>
                        <div className="flex justify-around md2:justify-end order-2 ">
                            <div className="flex flex-row md2:flex-col gap-y-5 gap-x-2 sm:gap-x-12 md2:gap-y-2 lg:gap-y-10 xl:gap-y-32 h-full md2:gap-x-8 lg:pt-6 xl:pt-6">
                                {colors.map((e) => (
                                    e.id !== pickedColor && (
                                        <div key={e.id} className={`flex bg-${e.col} w-20 sm:w-36 md2:w-28 md2:h-24 xl:w-28 rounded-2xl justify-center`}>
                                            <img src={e.img} className="w-16 sm:w-28 md2:w-16 xl:w-28" />
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                        <div className = "flex flex-col order-1 md2:order-3 mb-4">
                            <div className ="flex flex-col md2:hidden">
                            <p className = "text-text text-base font-medium mt-4">iPhone 15 Pro Max</p>
                            <p className = "text-text-light text-[11px] font-normal mt-2">The iPhone 15 Pro is forged from titanium and features the revolutionary A17 Pro chip, a customizable action button, and an even more versatile Pro camera system.</p>
                            <div className = "text-purple flex justify-end">
                                <p>more...</p>
                            </div>
                            </div>
                            <p className="text-text text-base lg:text-xl font-medium md2:text-end mt-6">SELECT A COLOR</p>
                            <div className=" flex flex-row justify-start md2:justify-end gap-x-4 xl:gap-x-6" >
                                {
                                    colors.map((c) =>
                                        <div className='flex flex-row' key={c.id}>

                                            <div
                                                className={`mb-1 mt-2 rounded-full w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-9 xl:h-9 border-text-light border-2 lg:border-4 bg-${c.col}`}
                                                onClick={() => setPickedColor(c.id)}
                                            />
                                        </div>

                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-10 px-2 sm:px-4 lg:px-14">
                    <p className=" text-stone-50 text-xl md:text-3xl font-medium">Recommended to add</p>
                    <div className="w-full hidden md:grid justify-between grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 gap-y-6 lg:gap-y-12 lg:gap-x-8 xl:gap-y-12 xl:gap-x-12 pt-16">
                        {product.slice(0, 4).map(item => <ProductCard item={item} />)}
                    </div>
                    <div className="w-full grid md:hidden justify-between grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 gap-y-6 lg:gap-y-12 lg:gap-x-8 xl:gap-y-12 xl:gap-x-12 pt-16">
                        {product.slice(0, 2).map(item => <ProductCard item={item} />)}
                    </div>
                    <div className="flex md2:hidden justify-center pt-6">
                        <button className="bg-neutral-400 rounded-full w-2 h-2 mr-3"></button>
                        <button className="bg-neutral-400 rounded-full w-2 h-2 mr-3"></button>
                        <button className="bg-neutral-400 rounded-full w-2 h-2 mr-3"></button>
                        <button className="bg-text rounded-full w-2 h-2 mr-3"></button>
                        <button className="bg-neutral-400 rounded-full w-2 h-2 mr-3"></button>
                        <button className="bg-neutral-400 rounded-full w-2 h-2 mr-3"></button>
                    </div>
                </div>
                <div className="pt-10 pl-2 sm:pl-4 lg:pl-14">
                    <p className="text-neutral-400 text-xl lg:text-3xl font-medium">About product</p>
                    <p className="pt-10 text-stone-50 font-medium text-2xl lg:text-4xl text-center">Apple iPhone 15 Pro Max 256Gb Pink Titanium</p>
                    <div className="grid grid-cols-6 font-medium">
                        <div className="hidden md2:flex flex-col items-center col-span-1 bg-bg-light rounded-3xl mt-16">
                            <Icon icon="fluent:save-28-regular" className="text-text text-3xl xl:text-6xl mt-4 xl:mt-8" />
                            <p className="text-text text-center text-xs xl:text-lg mx-2 xl:w-36 mt-2 xl:mt-4">Built-in storage of 256 GB</p>
                            <Icon icon="ph:device-mobile-camera" className="text-text text-3xl xl:text-6xl mt-5 xl:mt-12" />
                            <p className="text-text text-center text-xs xl:text-lg mx-2 xl:w-40 mt-2 xl:mt-4">Glass Ceramic and titanium case</p>
                            <Icon icon="icons8:camera" className="text-text xl:text-6xl text-3xl mt-5 xl:mt-12" />
                            <p className="text-text text-center text-xs xl:text-lg mx-2 xl:w-40 mt-2 xl:mt-4">Triple main camera system</p>
                            <Icon icon="icon-park-outline:battery-charge" className="text-text xl:text-6xl text-3xl mt-5 xl:mt-12" />
                            <p className="text-text text-center text-xs xl:text-lg mx-2 xl:w-36 mt-2 mb-4 xl:mb-8 xl:mt-4">Up to 29 hours of video playback</p>
                        </div>
                        <div className="flex flex-col col-span-6 md2:col-span-5">
                            <div className="flex justify-end">
                                <img src="/images/halfIphone.svg" className="w-11/12" />
                            </div>
                            <div className="flex justify-center text-center">
                                <p className="text-text-light w-4/5 md2:w-11/12 font-medium text-2xl lg:text-4xl xl:text-5xl mx-3 mt-12 md2:mt-24 leading-snug">The iPhone 15 Pro is forged from titanium and features the revolutionary A17 Pro chip, a customizable action button, and an even more versatile Pro camera system.</p>
                            </div>
                            <div className="flex md2:hidden flex-row justify-center items-center col-span-1 bg-bg-light rounded-3xl mt-8 md2:mt-8 mx-4 md2:mx-10 py-3">
                                <div className="flex flex-col items-center">
                                    <Icon icon="fluent:save-28-regular" className="text-text text-xl md2:text-3xl xl:text-6xl" />
                                    <p className="text-text text-center text-[11px] md2:text-xs xl:text-lg mx-2 xl:w-36">Built-in storage of 256 GB</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icon icon="ph:device-mobile-camera" className="text-text text-xl md2:text-3xl xl:text-6xl" />
                                    <p className="text-text text-center text-[11px] md2:text-xs xl:text-lg mx-2 xl:w-40">Glass Ceramic and titanium case</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icon icon="icons8:camera" className="text-text text-xl xl:text-6xl md2:text-3xl" />
                                    <p className="text-text text-center text-[11px] md2:text-xs xl:text-lg mx-2 xl:w-40">Triple main camera system</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icon icon="icon-park-outline:battery-charge" className="text-text text-xl xl:text-6xl md2:text-3xl" />
                                    <p className="text-text text-center text-[11px] md2:text-xs xl:text-lg mx-2 xl:w-36">Up to 29 hours of video playback</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2 sm:px-4 lg:px-14 pt-10">
                    <p className="text-text font-medium text-xl lg:text-3xl">Main Characteristics</p>
                    <div className="grid grid-cols-6 pt-8">
                        <div className="col-span-6 xl:col-span-3 row-start-2 row-end-3 xl:row-start-1 xl:row-end-2">
                            <div className="flex justify-center">
                                <img src="/images/fewIphones.svg" className="pt-4" />
                            </div>
                        </div>
                        <div className="col-span-6 xl:col-span-3 row-start-1 row-end-2 xl:row-start-1 xl:row-end-2 text-center xl:text-end text-text-light">
                            <p className="text-sm lg:text-base xl:text-lg font-medium">STATE-OF-THE-ART DISPLAY.</p>
                            <p className="text-sm lg:text-base xl:text-medium font-medium">The 6.1-inch Super Retina XDR display2 with ProMotion technology boosts the refresh rate to 120Hz when you need exceptional graphics performance. Dynamic Island puts notifications and Live Actions at your fingertips. Plus, the display is always on, so the lock screen remains viewable and you don't even have to touch it to stay informed.</p>
                            <p className="text-sm lg:text-base xl:text-lg pt-4 font-medium">POWERFUL PRO CAMERA SYSTEM.</p>
                            <p className="text-sm lg:text-base xl:text-medium font-medium">Seven professional lenses provide incredible framing flexibility. Take stunning, detailed photos with rich colors and high resolution with the 48MP main camera. And with the iPhone 15 Pro's Telephoto 3x camera, you can capture crisp close-ups from a great distance.</p>
                            <p className="text-sm lg:text-base xl:text-lg pt-4 font-medium">PROFESSIONAL CONNECTIVITY.</p>
                            <p className="text-sm lg:text-base xl:text-medium font-medium">Thanks to the new USB-C port, you can charge your Mac or iPad with the same cable as your iPhone 15 Pro. And with USB 3 support, you'll experience incredible data transfer speeds.4 Plus, with Wi-Fi 6E, you can download files up to twice as fast.</p>
                            <p className="text-sm lg:text-base xl:text-lg pt-4 font-medium">FORGED FROM TITANIUM.</p>
                            <p className="text-sm lg:text-base xl:text-medium font-medium">iPhone 15 Pro has a durable and lightweight aerospace-grade titanium body and a textured frosted glass back. It features a Ceramic Shield front panel that is stronger than any smartphone glass. Plus, iPhone 15 Pro is protected from splashes, water, and dust.1</p>
                        </div>
                    </div>
                </div>
                <div className="px-2 sm:px-4 lg:px-14 pt-10 pb-16">
                    <p className="text-text-light text-xl lg:text-3xl font-medium">Specificity</p>
                    <div className="grid grid-cols-6 mt-8 bg-zinc-800 rounded-3xl">
                        <div className="col-span-3 flex flex-col gap-5 pl-6 py-8">
                            <div>
                                <span className="text-text-light text-sm lg:text-lg font-medium">Brend: </span><span className="text-text text-sm lg:text-lg font-medium">Apple</span>
                            </div>
                            <div>
                                <span className="text-text-light text-sm lg:text-lg font-medium">Display diagonal: </span><span className="text-text text-sm lg:text-lg font-medium">6,7"</span>
                            </div>
                            <div>
                                <span className="text-text-light text-sm lg:text-lg font-medium">Screen resolution: </span><span className="text-text text-sm lg:text-lg font-medium">2796x1290</span>
                            </div>
                            <div>
                                <span className="text-text-light text-sm lg:text-lg font-medium">Screen type: </span><span className="text-text text-sm lg:text-lg font-medium">Super Retina XDR</span>
                            </div>
                        </div>
                        <div className="col-span-3 flex flex-col gap-5 pl-6 py-8">
                            <div>
                                <span className="text-text-light text-sm lg:text-lg font-medium">Screen refresh rate: </span><span className="text-text text-sm lg:text-lg font-medium">120 Hz</span>
                            </div>
                            <div>
                                <span className="text-text-light text-sm lg:text-lg font-medium">Protective glass technology: </span><span className="text-text text-sm lg:text-lg font-medium">Ceramic Shield</span>
                            </div>
                            <div>
                                <span className="text-text-light text-sm lg:text-lg font-medium">E-Sim: </span><span className="text-text text-sm lg:text-lg font-medium">+</span>
                            </div>
                            <div className="text-end mr-6">
                                <p className="text-text-light text-sm lg:text-lg font-medium">VIEW MORE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
