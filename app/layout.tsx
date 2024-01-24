import type { Metadata } from "next";
import {  Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import TranslationProvider from "@/components/TranslationProvider";
import {loadTranslations} from "@/lib/fetches";
import {cookies} from 'next/headers'


const fontSans = FontSans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default  async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = cookies().get("NEXT_LOCALE") || `${process.env.NEXT_PUBLIC_DEFAULT_LOCALE}`

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={
        cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )
      }>
        
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

<TranslationProvider translations={await loadTranslations() } locale={locale}>

            {children}
</TranslationProvider>
          </ThemeProvider>
          </body>
    </html>
  );
}
