import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/router";
import data from '../../../data/DB.json';
import { useState } from "react";
import Link from "next/link";


export default function Footer() {
  const router = useRouter()
  const path = router.asPath
  const isCategory = router.asPath.split('/')[2];
  const { links } = data;


  const [productState, setProductState] = useState<boolean>(false)
  const [socialState, setSocialState] = useState<boolean>(false)
  return (
    <div className='w-full bg-bg-black md:py-2 md:px-4 md2:py-10 md2:px-16 lg:py-16 lg:px-36 md2:flex justify-between'>
      <div className="font-normal w-[232px] space-y-10 hidden md2:block">
        <p className="text-[40px] text-text">CONTACT WITH US</p>
        <p className="text-xl text-text-light">APPLE MADE IN 2023</p>
      </div>
      <div className="md:gap-2 md2:gap-8 bg-bg-light md:bg-transparent h-[45px] md:h-max overflow-hidden hidden md2:flex">
        <div className="space-y-3 pt-2.5">
          <p className="text-2xl font-semibold text-text">Product</p>
          <p className="text-xl font-medium text-text-light pt-3">Mac</p>
          <p className="text-xl font-medium text-text-light">iPone</p>
          <p className="text-xl font-medium text-text-light">Apple Watch</p>
          <p className="text-xl font-medium text-text-light">iPad</p>
        </div>
        <div className="space-y-3 pt-16">
          <p className="text-xl font-medium text-text-light">AirPods</p>
          <p className="text-xl font-medium text-text-light">Apple TV</p>
          <p className="text-xl font-medium text-text-light">Accessories</p>
          <p className="text-xl font-medium text-text-light">Dyson</p>
        </div>
      </div>
      <div className="text-text  bg-bg-light md:bg-transparent h-9 md:h-max overflow-hidden hidden md2:block">
        <p className="text-2xl font-medium block md:hidden">Social medias</p>
        <p className="text-[30px] font-medium hidden md:block mb-4">For contact and questions</p>
        <p className="text-lg font-medium mb-4">info@gmail.com</p>
        <p className="text-lg font-medium text-text-light mb-4">0 800 56 785 5 (from 9:00 a.m. to 10:00)</p>
        <div className="flex gap-3 text-text-light mb-7">
          <Icon icon="ep:shop" />
          <Icon icon="ri:twitter-fill" />
          <Icon icon="ic:baseline-discord" />
          <Icon icon="mdi:gmail" />
          <Icon icon="bi:instagram" />
          <Icon icon="file-icons:telegram" />
          <Icon icon="ic:round-facebook" />
        </div>
        <div className="flex gap-3 text-text">
          <Icon icon="cib:cc-visa" />
          <Icon icon="fa-brands:cc-mastercard" />
          <Icon icon="simple-icons:applepay" />
        </div>
      </div>
      <div className={`${!!isCategory ? 'hidden' : 'w-full h-full block md2:hidden'}`}>
        <div className={`flex w-full bg-bg-light flex-col md2:hidden pt-2.5 ${productState ? 'lg:h-96 xl:h-96' : 'h-10'} px-4 mb-4`}>
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setProductState(!productState)}>
            <p className="font-medium text-sm text-text">Products</p>
            <button className="p-1 bg-text-light rounded-full opacity-75">
              <Icon icon={`${productState ? 'ep:arrow-up' : 'ep:arrow-down'}`} className="text-xs text-text" />
            </button>
          </div>

          {productState && (
            <div className="flex-col mt-2 rounded-md shadow-md p-2">
              <p className="text-sm text-text">Product 1</p>
              <p className="text-sm text-text">Product 2</p>
              <p className="text-sm text-text">Product 3</p>
            </div>
          )}
        </div>
        <div className={`flex bg-bg-light w-full flex-col md2:hidden ${socialState ? 'lg:h-96 xl:h-96' : 'h-10'} px-4 mb-4`}>
          <div className="flex items-center justify-between cursor-pointer pt-2.5" onClick={() => setSocialState(!socialState)}>
            <p className="font-medium text-sm text-text">Social Media</p>
            <button className="p-1 bg-text-light rounded-full opacity-75">
              <Icon icon={`${socialState ? 'ep:arrow-up' : 'ep:arrow-down'}`} className="text-xs text-text" />
            </button>
          </div>

          {socialState && (
            <div className="flex-col mt-2 rounded-md shadow-md p-2">
              <p className="text-sm text-text">Instagram</p>
              <p className="text-sm text-text">Facebook</p>
              <p className="text-sm text-text">Twitter</p>
            </div>
          )}
        </div>
        <div className="flex md2:hidden justify-center gap-3 pb-3 text-text">
          <Icon icon="cib:cc-visa" className="text-4xl" />
          <Icon icon="fa-brands:cc-mastercard" className="text-4xl" />
          <Icon icon="simple-icons:applepay" className="text-4xl" />
        </div>
      </div>
      <div className={`${!!isCategory ? 'w-full h-full block md2:hidden' : 'hidden'}`}>
        <div className={`flex w-full bg-bg-light flex-col md2:hidden pt-2.5 ${productState ? 'lg:h-96 xl:h-96' : 'h-10'} px-4 mb-4`}>
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setProductState(!productState)}>
            <p className="font-medium text-sm text-text">Products</p>
            <button className="p-1 bg-text-light rounded-full opacity-75">
              <Icon icon={`${productState ? 'ep:arrow-up' : 'ep:arrow-down'}`} className="text-xs text-text" />
            </button>
          </div>

          {productState && (
            <div className='grid grid-cols-2 gap-y-3 pt-4 pb-4 text-text text-lg'>
              {links.map((k) =>
                <Link href={k.href} className="text-text-light text-xs">{k.name}</Link>
              )}
            </div>
          )}
        </div>
        <div className={`flex bg-bg-light w-full flex-col md2:hidden ${socialState ? 'lg:h-96 xl:h-96' : 'h-10'} px-4 mb-4`}>
          <div className="flex items-center justify-between cursor-pointer pt-2.5" onClick={() => setSocialState(!socialState)}>
            <p className="font-medium text-sm text-text">Social Media</p>
            <button className="p-1 bg-text-light rounded-full opacity-75">
              <Icon icon={`${socialState ? 'ep:arrow-up' : 'ep:arrow-down'}`} className="text-xs text-text" />
            </button>
          </div>

          {socialState && (
            <div className="flex gap-3 text-text-light pt-4 pb-4">
              <Icon icon="ep:shop" />
              <Icon icon="ri:twitter-fill" />
              <Icon icon="ic:baseline-discord" />
              <Icon icon="mdi:gmail" />
              <Icon icon="bi:instagram" />
              <Icon icon="file-icons:telegram" />
              <Icon icon="ic:round-facebook" />
            </div>
          )}
        </div>
        <div className="flex md2:hidden justify-center gap-3 pb-3 text-text">
          <Icon icon="cib:cc-visa" className="text-4xl" />
          <Icon icon="fa-brands:cc-mastercard" className="text-4xl" />
          <Icon icon="simple-icons:applepay" className="text-4xl" />
        </div>
      </div>
    </div>
  )
}