import './globals.css'
import Head from './head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head/>
      <body>{children}</body>
    </html>
  );
}
