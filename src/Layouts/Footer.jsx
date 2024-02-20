import React from 'react'
import { getCurrentDateTimePart } from '../Utils/helpers';

const Footer = () => {
  const year = getCurrentDateTimePart("y");

  return (
      <footer className="fixed bottom-0 h-14 w-screen text-secondary font-poppins flex items-center justify-center">
          <p className="text-sm">
              Copyright © {year}{" "}
              <a
                  target="_blank"
                  rel='noreferrer'
                  href="https://www.facebook.com/karlgt.paguio.9"
                  className=' hover:underline underline-offset-1'
              >
                  PagZone
              </a>
          </p>
      </footer>
  );
}

export default Footer