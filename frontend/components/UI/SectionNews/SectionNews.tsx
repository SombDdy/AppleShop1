import { Icon } from '@iconify/react';

export default function SectionNews() {
    return (
        <div className="pt-24 px-2 sm:px-4 lg:px-14">
            <div className="text-3xl text-text text-center lg:text-start lg:pl-0">
                Our News
            </div>
            <div className = "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-12 overflow-hidden gap-x-12 gap-y-6">
                <div className="relative h-60 lg:h-72 xl:h-96 w-full border-2 border-stone-500 rounded-3xl overflow-hidden">
                    <div className="absolute left-3 lg:left-7 top-2 lg:top-6 xl:top-9 lg:h-auto xl:h-80">
                        <div className="text-neutral-400 font-medium pb-0.5 xl:pb-2 lg:pb-0.5 text-xs sm:text-sm lg:text-sm xl:w-80 xl:text-lg">Starting from</div>
                        <div className="text-violet font-bold pb-0.5 xl:pb-2 lg:pb-0.5 text-xs sm:text-sm lg:text-base xl:w-80 xl:text-xl">500 $</div>
                        <div className="text-stone-50 font-medium pb-1.5 xl:pb-2 lg:pb-1.5 text-xs sm:text-sm lg:text-base xl:w-80 xl:text-xl">iPhone 13 512 GB</div>
                        <div className="text-neutral-400 font-medium text-xs w-40 sm:text-sm sm:w-72 lg:text-sm lg:w-56 lg:leading-4 xl:w-80 xl:text-base xl:leading-6">
                            Elegant body features, new colors, amazing display, cameras that can compete with the best photographic equipment, powerful processors and a fast operating system.
                        </div>
                    </div>
                    <img src="images/iphoneLightPink.svg" className="absolute w-24 top-16 right-2 sm:top-3 sm:right-5 sm:w-36 lg:top-6 lg:right-6 xl:top-3 xl:right-8 z-20 lg:w-40 xl:w-60"/>
                    <div className = "absolute flex items-center bottom-7 left-7 sm:bottom-10 sm:left-9 xl:bottom-12 xl:left-14 lg:bottom-10 lg:left-9">
                        <Icon icon="cil:arrow-top" className="inline-flex rotate-90 text-violet border border-violet rounded-full xl:p-2 xl:w-7 xl:h-7 lg:w-6 lg:h-6 lg:p-1.5"/>
                        <div className = "text-stone-50 pl-4 text-xs lg:text-base xl:text-base">GO TO CATALOG</div>
                    </div>
                    <div className="opacity-10 text-zinc-200 text-7xl sm:text-8xl lg:text-8xl xl:text-9xl font-black absolute -bottom-3 -left-2 sm:-bottom-5 sm:-left-4 xl:-bottom-6 xl:-left-6 z-0  lg:-bottom-4 lg:-left-4">APPLE</div>
                </div>
                <div className="relative w-full h-60 lg:h-72 xl:h-96 rounded-3xl overflow-hidden bg-violet">
                    <div className="absolute left-4 lg:left-7 top-2 lg:top-7 xl:top-9">
                        <div className="text-stone-50 font-medium pb-0.5 xl:pb-2 lg:pb-0.5 text-xs sm:text-sm lg:text-sm xl:w-80 xl:text-lg">Starting from</div>
                        <div className="text-stone-50 font-bold pb-0.5 xl:pb-2 lg:pb-0.5 text-xs sm:text-sm lg:text-base xl:w-80 xl:text-xl">300 $</div>
                        <div className="text-stone-50 font-medium pb-1.5 xl:pb-2 lg:pb-1.5 text-xs sm:text-sm lg:text-base xl:w-80 xl:text-xl">Apple Watch Series 8</div>
                        <div className="text-stone-50 text-xs sm:text-sm w-40 sm:w-72 lg:text-sm lg:w-56 lg:leading-4 xl:w-80 xl:text-base xl:leading-6">
                            The toughest front glass in Apple Watch history, IP6X dust resistance rating, water resistance and enhanced durability for sports and active lifestyles
                        </div>
                    </div>
                    <img src="images/appleWatchOrange.svg" className="absolute top-16 -right-3 sm:top-2 lg:top-6 xl:top-1 sm:right-0 z-20 w-32 sm:w-48 lg:w-48 xl:w-72"/>
                    <div className = "absolute flex items-center bottom-7 left-7 sm:bottom-10 sm:left-9 xl:bottom-12 xl:left-14 lg:bottom-10 lg:left-9">
                        <Icon icon="cil:arrow-top" className="inline-flex rotate-90 text-stone-50 border border-stone-50 rounded-full xl:p-2 xl:w-7 xl:h-7 lg:w-6 lg:h-6 lg:p-1.5"/>
                        <div className = "text-stone-50 pl-4 text-xs lg:text-base xl:text-base">GO TO CATALOG</div>
                    </div>
                    <div className="opacity-10 text-zinc-200 text-7xl sm:text-8xl lg:text-8xl xl:text-9xl font-black absolute -bottom-3 -left-2 sm:-bottom-5 sm:-left-4 xl:-bottom-6 xl:-left-6 z-0  lg:-bottom-4 lg:-left-4">APPLE</div>
                </div>
            </div>
        </div>
    )
}