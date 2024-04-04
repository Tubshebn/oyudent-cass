import { Inter } from 'next/font/google';
import './globals.css';
import Header from './header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'OYU DENT | кассын систем',
    description: 'OYU DENT | кассын систем',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
