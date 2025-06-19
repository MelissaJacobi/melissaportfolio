import './globals.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggle from "./components/ThemeToggle";

export const metadata = {
  title: "Melissa's Portfolio",
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
        <link rel="preload" as="video" href="/bird.mp4" type="video/mp4"/>
        <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      </head>
      <body className="flex flex-col min-h-screen relative">
        <Header />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
