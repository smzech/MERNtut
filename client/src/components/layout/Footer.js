import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white m5-t p-4 text-center h-5">
      Copyright &copy; {new Date().getFullYear} DevConnector
    </footer>
  );
}
