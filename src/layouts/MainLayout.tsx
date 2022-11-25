import React from 'react'
import { ReactNode } from 'react'
import { Navbar } from '../components/Navbar/Navbar';
import './MainLayout.css';

type PageLayoutProp = {
    children: ReactNode
}

export function MainLayout({children}: PageLayoutProp) {
    return (
        <div className="main-layout">
            <aside>
                <Navbar/>
            </aside>
            <main className="main-content">{children}</main>
        </div>
    )
}
