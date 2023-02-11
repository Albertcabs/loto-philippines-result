import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Navbar = () => {
   const router = useRouter();
   const listPage = [
      '/',
      '/4D',
      '/6D',
      '/642',
      '/645',
      '/649',
      '/655',
      '/658',
      '/EZ2',
      '/STL',
   ];
   const listPageName = [
      'Home',
      '4D',
      '6D',
      '6/42',
      '6/45',
      '6/49',
      '6/55',
      '6/58',
      'EZ2',
      'STL',
   ];
   return (
      <div className='flex flex-row bg-slate-200 h-16 justify-center gap-10 items-center w-full'>
         {listPage.map((val, i) => {
            return (
               <Link
                  href={val}
                  key={i}
                  className={`w-16 ${
                     router.pathname === val ? 'bg-green-600' : 'bg-slate-50'
                  } text-center px-2 py-1.5 rounded-full hover:bg-green -400`}
               >
                  {listPageName[i]}
               </Link>
            );
         })}
      </div>
   );
};

export default Navbar;
