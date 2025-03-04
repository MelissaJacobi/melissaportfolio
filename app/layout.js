import './globals.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';


export const metadata = {
  title: "Melissa's Porfolio",
  description: 'A showcase of my work',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
