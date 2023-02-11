import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface ILayout {
   children: JSX.Element;
}
const Layout = ({ children }: ILayout) => {
   return (
      <div className='w-3/4 mx-auto h-screen relative bg-slate-50 '>
         <Navbar />
         {children}
         <Footer />
      </div>
   );
};

export default Layout;
