import Header from "@/components/header";
import "./globals.css";
import {Inter, Roboto_Mono} from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import {Toaster} from "react-hot-toast";
import React from "react";
import LanguageSwitch from "@/components/language-switch";
import LanguageContextProvider from "@/context/language-context";

const inter = Inter({subsets: ["latin"]});
const font = Roboto_Mono({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    style: ["normal", "italic"],
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
        <body
            className={`${font.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
        >
        <ThemeContextProvider>
            <LanguageContextProvider>
                <ActiveSectionContextProvider>
                    <Header/>
                    {children}
                    <Footer/>
                    <LanguageSwitch/>
                    <ThemeSwitch/>

                    <Toaster position="top-right"/>
                </ActiveSectionContextProvider>
            </LanguageContextProvider>
        </ThemeContextProvider>
        </body>
        </html>
    );
}
