import './globals.css';
import Navbar from './components/Navbar';
import Header from './components/Header'; // Import the new Header component


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
      <body>
        <Header />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
