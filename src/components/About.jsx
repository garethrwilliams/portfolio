import React from 'react';

export default function About() {
  return (
    <section id='about'>
      <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:leading-12 sm:text-4xl text-3xl mb-4 font-medium text-white '>
            Hello, I'm Gareth
            <br className='inline-block' />
            {/* add dynamic styling above */}
            I'm a full-stack graduate
          </h1>
          <p className='mb-8 leading-relaxed'>
            A motivated and creative professional looking to take the first
            steps toward a career in software development. I have recently
            graduated from the Northcoders coding bootcamp where I learned the
            core principals of Javascript as well as other technologies such as
            Express Router, React and SQL. My experience lies in working with
            technology and people to create experiences and make interesting
            things happen and I am excited to take these skills forward and
            build the foundation of a lifetime of learning and growth.
          </p>
          <div className='flex justify-center'>
            <a
              href='#contact'
              className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-base text-center '
            >
              Contact Me
            </a>
            <a
              href='#projects'
              className='ml-4 inline-flex text-gray-400 bg-gray-800 border-1 py-2 px-12  focus:outline-none hover:bg-grey-700 hover:text-white rounded text-base sm:text-base  items-center'
            >
              Projects
            </a>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 shadow-md'>
          <img
            className='object-cover object-center rounded sepia'
            alt='hero'
            src='./coding.png'
          />
        </div>
      </div>
    </section>
  );
}
