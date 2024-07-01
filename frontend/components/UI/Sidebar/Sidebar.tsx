import AdvancedSideBar from "./AdvancedSidebar";
import MainSidebar from "./MainSidebar";
export default function SideBar() {
  return (
    <div className="flex">
      <MainSidebar/>
      <AdvancedSideBar />
      
    </div>
    
  )
}