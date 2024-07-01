import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
interface LayoutProps {
    children: ReactNode;
}
export default function Layout( {children} : LayoutProps ){
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div className='w-full lg:w-full bg-bg-body py-8'>
                    <Search />
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}