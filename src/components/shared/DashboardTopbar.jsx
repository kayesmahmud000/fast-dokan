import React from 'react';
import { Input } from '../ui/input';
import { CiSearch } from "react-icons/ci";
import { GoGitCompare } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from 'next/image';

const DashboardTopbar = () => {
    return (
        <div className='flex  w-full bg-[#F6F6F6]  md:px-10 md:py-9 gap-3 items-center justify-end'>
            <div className='flex-1/2 hidden lg:flex gap-5  items-center  '>
               <div className='w-2/3 relative'>
                 <Input className='bg-[#007AFF0F] rounded-full  border-[#007AFF0F] pl-8 placeholder:text-[Gray] ' placeholder='Search..'/>
                <div className=' absolute top-2.5 left-2.5'>
                    <CiSearch size={24} color='gray'/>
                </div>
               </div>
                <div className='flex items-center justify-center bg-[#007AFF] p-2  rounded-full w-12 h-12 '>
                    <GoGitCompare size={20} color='white'/>
                </div>
            </div>
            <div className='flex-1/2 flex items-center flex-row-reverse lg:flex-row px-2 lg:justify-end gap-5 lg:mr-30 '>
                <div className='bg-[#D1D1D633] p-2 flex items-center justify-center rounded-full'>
                    <IoMdNotificationsOutline size={20} />
                </div>
                <div className='flex items-center justify-center'>
                    <Image src='/user.png' width='40' height='40' alt='user' className='rounded-full  '/>
                      <div className='   text-sm'>
        <select
        defaultValue={'Admin User'}
        //   onChange={(e) => setSelectedRole(e.target.value)}
          className="p-2  transition  duration-100  py-1.5  text-sm/6 font-semibold border-none  rounded"
        >
          <option value="admin" >Admin User</option>
          <option value="retailer" >Retailer User</option>
        </select>
      </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardTopbar;