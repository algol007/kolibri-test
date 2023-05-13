'use client'; // this is a client component 👈🏽

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { features, links, navigation, posts, stats } from '../constant';
import Sidebar from '@/components/Sidebar/Sidebar';
import Image from 'next/image';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Image
                src='https://kolibriforimpact.com/main-logo.png'
                alt=''
                width={50}
                height={50}
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setIsSidebarOpen(isSidebarOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              Log in <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </nav>
        <Sidebar
          navigation={navigation}
          isOpen={isSidebarOpen}
          onOpenSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </header>

      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              Announcing our next round of funding.{' '}
              <a href='#' className='font-semibold text-indigo-600'>
                <span className='absolute inset-0' aria-hidden='true' />
                Read more <span aria-hidden='true'>&rarr;</span>
              </a>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              Data to enrich your online business
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='#'
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Get started
              </a>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
        <Image
          fill
          src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
          alt=''
          className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
        />
        <div
          className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
          aria-hidden='true'
        >
          <div
            className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
          aria-hidden='true'
        >
          <div
            className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Work with us
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden='true'>&rarr;</span>
                </a>
              ))}
            </div>
            <dl className='mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4'>
              {stats.map((stat) => (
                <div key={stat.name} className='flex flex-col-reverse'>
                  <dt className='text-base leading-7 text-gray-300'>
                    {stat.name}
                  </dt>
                  <dd className='text-2xl font-bold leading-9 tracking-tight text-white'>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className='overflow-hidden bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
            <div className='lg:pr-8 lg:pt-4'>
              <div className='lg:max-w-lg'>
                <h2 className='text-base font-semibold leading-7 text-indigo-600'>
                  Deploy faster
                </h2>
                <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  A better workflow
                </p>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                  {features.map((feature) => (
                    <div key={feature.name} className='relative pl-9'>
                      <dt className='inline font-semibold text-gray-900'>
                        <feature.icon
                          className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
                          aria-hidden='true'
                        />
                        {feature.name}
                      </dt>
                      <dd className='inline'>{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
              alt='Product screenshot'
              className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              From the blog
            </h2>
            <p className='mt-2 text-lg leading-8 text-gray-600'>
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {posts.map((post) => (
              <article
                key={post.id}
                className='flex max-w-xl flex-col items-start justify-between'
              >
                <div className='flex items-center gap-x-4 text-xs'>
                  <time dateTime={post.datetime} className='text-gray-500'>
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className='group relative'>
                  <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                    <a href={post.href}>
                      <span className='absolute inset-0' />
                      {post.title}
                    </a>
                  </h3>
                  <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                    {post.description}
                  </p>
                </div>
                <div className='relative mt-8 flex items-center gap-x-4'>
                  <div className='rounded-full bg-gray-50 overflow-hidden'>
                    <Image
                      width={40}
                      height={40}
                      src={post.author.imageUrl}
                      alt=''
                    />
                  </div>
                  <div className='text-sm leading-6'>
                    <p className='font-semibold text-gray-900'>
                      <a href={post.author.href}>
                        <span className='absolute inset-0' />
                        {post.author.name}
                      </a>
                    </p>
                    <p className='text-gray-600'>{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <section className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
        <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <div className='flex justify-center'>
            <Image
              width={200}
              height={20}
              src='https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg'
              alt=''
            />
          </div>
          <figure className='mt-10'>
            <blockquote className='text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9'>
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className='mt-10'>
              <div className='mx-auto h-10 w-10 rounded-full overflow-hidden'>
                <Image
                  width={40}
                  height={40}
                  src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
              </div>
              <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
                <div className='font-semibold text-gray-900'>Judith Black</div>
                <svg
                  viewBox='0 0 2 2'
                  width={3}
                  height={3}
                  aria-hidden='true'
                  className='fill-gray-900'
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className='text-gray-600'>CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <div className='relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2'>
            <div className='max-w-xl lg:max-w-lg'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Subscribe to our newsletter.
              </h2>
              <p className='mt-4 text-lg leading-8 text-gray-300'>
                Nostrud amet eu ullamco nisi aute in ad minim nostrud
                adipisicing velit quis. Duis tempor incididunt dolore.
              </p>
              <div className='mt-6 flex max-w-md gap-x-4'>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                  placeholder='Enter your email'
                />
                <button
                  type='submit'
                  className='flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className='grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2'>
              <div className='flex flex-col items-start'>
                <div className='rounded-md bg-white/5 p-2 ring-1 ring-white/10'>
                  <CalendarDaysIcon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                <dt className='mt-4 font-semibold text-white'>
                  Weekly articles
                </dt>
                <dd className='mt-2 leading-7 text-gray-400'>
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className='flex flex-col items-start'>
                <div className='rounded-md bg-white/5 p-2 ring-1 ring-white/10'>
                  <HandRaisedIcon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </div>
                <dt className='mt-4 font-semibold text-white'>No spam</dt>
                <dd className='mt-2 leading-7 text-gray-400'>
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6'
          aria-hidden='true'
        >
          <div
            className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
