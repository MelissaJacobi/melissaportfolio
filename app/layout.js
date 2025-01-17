import './globals.css';
import Navbar from './components/Navbar';
import Header from './components/Header'; // Import the new Header component

export const metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my work',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Render the dynamic header */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
