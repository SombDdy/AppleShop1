import { Icon } from '@iconify/react';
import Link from 'next/link';


export default function Search() {
    return (
        <div className = "w-full text-black flex items-center justify-between pt-8 px-2 sm:px-4 lg:px-14">
            <div className = "text-text-light relative hidden md2:flex">
                <input type = "text" placeholder = "Search" className = "bg-bg-grey text-5 rounded-3xl pl-20 md:pr-36 xl:pr-52 py-1.5" />
                <Icon icon="iconamoon:search" className = "absolute top-2 left-8 text-lg "/>
            </div>
            <Icon icon="eva:menu-fill" className = "text-text text-3xl ml-4 flex md2:hidden"/>
            <Link href={'/'}>
            <Icon icon="bi:apple" className = "text-text text-3xl flex md2:hidden"/>
            </Link>
            <div className = "flex items-center h-full flex-col relative lg:border-l-2 border-neutral-400 lg:pl-4 xl:pl-4 lg:ml-16 xl:ml-32">
                <div className = "absolute  text-text -top-2 right-0 lg:-right-2 xl:-right-4 text-xs rounded-3xl bg-violet px-1.5 lg:px-2">
                    12
                </div>
                <Link href={'/basket'}>
                <Icon icon="fluent-mdl2:shop" className = "text-text text-3xl lg:text-4xl lg:text-text-light mr-4"/>
                </Link>
                
            </div>
        </div>
    )
}