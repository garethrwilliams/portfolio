import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import analyticsEventTracker from '../useAnalyticsEventTracker';

export default function Navbar() {
  const gaEventTracker = analyticsEventTracker('Contact me');

  return (
    <header className='bg-gray-800 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <button className='font-medium text-white mb-4 md:mb-0'>
          <a href='#about' className='md:ml-4 text-xl'>
            Gareth Williams
          </a>
        </button>
        <nav className='md:mr-auto ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
          <a href='#projects' className='mr-2 md:mr-5 hover:text-white'>
            Projects
          </a>
          <a href='#skills' className='mr-5 hover:text-white'>
            Skills
          </a>
        </nav>
        <div className='flex-1 md:flex-none mt-4 md:mt-0'>
          <a
            href='https://www.linkedin.com/in/gareth-williams-39a6bb177/'
            target={'_blank'}
            rel='noreferrer'
            className='h-6 w-6 md:mr-3 mb-2 mt-2 md:mt-0 px-2'
            onClick={() => gaEventTracker('Linkedin')}
          >
            <FontAwesomeIcon
              icon={brands('linkedin')}
              size='2x'
              className='hover:text-white'
            />
          </a>
          <a
            href='https://github.com/garethrwilliams'
            target={'_blank'}
            rel='noreferrer'
            className='h-6 w-6 md:mr-3 mb-2 mt-2 md:mt-0'
            onClick={() => gaEventTracker('Github')}
          >
            <FontAwesomeIcon
              icon={brands('github')}
              size='2x'
              className='hover:text-white'
            />
          </a>
        </div>

        <a
          href='#contact'
          className='inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'
        >
          Hire Me
          <ArrowRightIcon className='w-4 h-4 ml-1' />
        </a>
      </div>
    </header>
  );
}
