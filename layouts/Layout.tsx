import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import { NavigationContextProvider } from '@context/NavigationContext';
import React from 'react'

interface LayoutProps {
    children: JSX.Element;
}
// por defecto use flex-col, para pantallas grandes flex-row
const Layout = ({children}:LayoutProps) => (
    <main className='flex h-screen w-full flex-col md:flex-row'>
        <NavigationContextProvider>
            <Navbar/>
            <Sidebar/>
        </NavigationContextProvider>
        <section className='flex w-full h-full'>{children}</section>
      </main>
  );

export default Layout;