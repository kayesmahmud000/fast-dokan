import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";


const Analytics = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
           <div className="border-2 border-[#D1D1D680] px-8 py-8 rounded-md">
           <div className="flex items-center justify-between ">
             <div className="rounded-full p-2 bg-[#60FF301A]">
                <Image src='/doller.png' width='40' height='40' alt="dollar" className=""/>
            </div>
            <div>
                <BsThreeDotsVertical size={24} color="gray"/>
            </div>
           </div>
           <div className="mt-5 relative "> 
            <p className="text-lg mb-2 font-normal text-[#636366]">Top Sales</p>
            <h1 className="text-3xl font-bold flex items-center "> <TbCurrencyTaka /> 12,50</h1>
            <div className="text-[#22C55E] absolute right-3 bottom-0.5 flex items-center justify-end px-5"> + 36% <span><FaArrowUp  /></span></div>
           </div>
            </div> 
           <div className="border-2 border-[#D1D1D680] px-8 py-8 rounded-md">
           <div className="flex items-center justify-between ">
             <div className="rounded-full p-2 bg-[#FFB0301A]">
                <Image src='/usr.png' width='40' height='40' alt="dollar" className=""/>
            </div>
            <div>
                <BsThreeDotsVertical size={24} color="gray"/>
            </div>
           </div>
           <div className="mt-5 relative "> 
            <p className="text-lg mb-2 font-normal text-[#636366]">Total Retailers</p>
            <h1 className="text-3xl font-bold flex items-center ">120</h1>
            <div className="text-[#22C55E] absolute right-3 bottom-0.5 flex items-center justify-end px-5"> + 36% <FaArrowUp /></div>
           </div>
            </div> 
           <div className="border-2 border-[#D1D1D680] px-8 py-8 rounded-md">
           <div className="flex items-center justify-between ">
             <div className="rounded-full p-2 bg-[#EE30FF1A]">
                <Image src='/timer.png' width='40' height='40' alt="dollar" className=""/>
            </div>
            <div>
                <BsThreeDotsVertical size={24} color="gray"/>
            </div>
           </div>
           <div className="mt-5 relative "> 
            <p className="text-lg mb-2 font-normal text-[#636366]">Pending Requests</p>
            <h1 className="text-3xl font-bold flex items-center "> 05</h1>
            <span className="text-[#22C55E] absolute right-3 bottom-0.5 flex items-center justify-end px-5"> + 36% <FaArrowUp c /></span>
           </div>
            </div> 
           <div className="border-2 border-[#D1D1D680] px-8 py-8 rounded-md">
           <div className="flex items-center justify-between ">
             <div className="rounded-full p-2 bg-[#3E30FF1A]">
                <Image src='/product.png' width='40' height='40' alt="dollar" className=""/>
            </div>
            <div>
                <BsThreeDotsVertical size={24} color="gray"/>
            </div>
           </div>
           <div className="mt-5 relative "> 
            <p className="text-lg mb-2 font-normal text-[#636366]">Total Products</p>
            <h1 className="text-3xl font-bold flex items-center "> 350</h1>
            <span className="text-[#22C55E] absolute right-3 bottom-0.5 flex items-center justify-end px-5"> + 36% <FaArrowUp c /></span>
           </div>
            </div> 
        </div>
    );
};

export default Analytics;