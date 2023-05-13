import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

type Navigation = {
  name: string;
  href: string;
};

interface SidebarProps {
  navigation: Navigation[];
  isOpen: boolean;
  onOpenSidebar: () => void;
}

function Sidebar({ navigation, isOpen, onOpenSidebar }: SidebarProps) {
  return (
    <Dialog
      as='div'
      className='lg:hidden'
      open={isOpen}
      onClose={onOpenSidebar}
    >
      <div className='fixed inset-0 z-50' />
      <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
        <div className='flex items-center justify-between'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Image
              src='https://kolibriforimpact.com/main-logo.png'
              alt=''
              width={50}
              height={50}
            />
          </a>
          <button
            type='button'
            className='-m-2.5 rounded-md p-2.5 text-gray-700'
            onClick={onOpenSidebar}
          >
            <span className='sr-only'>Close menu</span>
            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='mt-6 flow-root'>
          <div className='-my-6 divide-y divide-gray-500/10'>
            <div className='space-y-2 py-6'>
              {navigation.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className='py-6'>
              <a
                href='#'
                className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default Sidebar;
