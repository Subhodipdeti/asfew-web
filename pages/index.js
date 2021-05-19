import { Fragment } from 'react';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Example() {
    return (
        <>
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <Popover>
                            {({ open }) => (
                                <>
                                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                                        <nav
                                            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                                            aria-label="Global"
                                        >
                                            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                                <div className="flex items-center justify-between w-full md:w-auto">
                                                    <a href="#">
                                                        <span className="sr-only">Workflow</span>
                                                        <Image
                                                            height={50}
                                                            width={50}
                                                            layout='intrinsic'
                                                            src="https://firebasestorage.googleapis.com/v0/b/neoium-5477b.appspot.com/o/posts%2Flogo.png?alt=media&token=61e9775a-f34d-4d94-8382-4cc14761411a"
                                                        />
                                                    </a>
                                                    <div className="-mr-2 flex items-center md:hidden">
                                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-current-500">
                                                            <span className="sr-only">Open main menu</span>
                                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                                        </Popover.Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                                {navigation.map((item) => (
                                                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </nav>
                                    </div>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        enter="duration-150 ease-out"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="duration-100 ease-in"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Popover.Panel
                                            focus
                                            static
                                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                        >
                                            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="px-5 pt-4 flex items-center justify-between">
                                                    <div>
                                                        <Image
                                                            height={50}
                                                            width={50}
                                                            layout='intrinsic'
                                                            src="https://firebasestorage.googleapis.com/v0/b/neoium-5477b.appspot.com/o/posts%2Flogo.png?alt=media&token=61e9775a-f34d-4d94-8382-4cc14761411a"
                                                        />
                                                    </div>
                                                    <div className="-mr-2">
                                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-current-500">
                                                            <span className="sr-only">Close main menu</span>
                                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                                        </Popover.Button>
                                                    </div>
                                                </div>
                                                <div className="px-2 pt-2 pb-3 space-y-1">
                                                    {navigation.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                        >
                                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-current-500">
                                                                {item.name}
                                                            </Popover.Button>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Data to enrich your</span>{' '}
                                    <span className="block text-current-600 xl:inline">online business</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                    fugiat veniam occaecat fugiat aliqua.
              </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-current-600 hover:bg-current-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            Get started
                  </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-current-700 bg-current-100 hover:bg-current-200 md:py-4 md:text-lg md:px-10"
                                        >
                                            Live demo
                  </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 pl-10">
                    <Image
                        layout="responsive"
                        src="https://firebasestorage.googleapis.com/v0/b/neoium-5477b.appspot.com/o/posts%2Ft3.svg?alt=media&token=19924c73-c2ce-42a0-b8e4-a35b3d84119b"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
                <div class="bg-gray-100 rounded-3xl shadow-xl w-full overflow-hidden">
                    <div class="md:flex w-full">
                        <div class="hidden md:block w-1/2 bg-gradient-to-r from-gray-900 to-gray-400 py-10 px-10">
                            <Image
                                layout="responsive"
                                src="https://firebasestorage.googleapis.com/v0/b/neoium-5477b.appspot.com/o/posts%2Ft3.svg?alt=media&token=19924c73-c2ce-42a0-b8e4-a35b3d84119b"
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div class="w-full md:w-1/2">
                            <div class="flex items-center min-h-screen bg-white">
                                <div class="container mx-auto">

                                    <div class="text-center">
                                        <h1 class="my-3 text-3xl font-semibold text-gray-700">Contact Us</h1>
                                        <p class="text-gray-400">Fill up the form below to send us a message.</p>
                                    </div>
                                    <div class="m-7">
                                        <form method="POST" id="form">
                                            <div class="mb-6">
                                                <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                                                <input type="text" name="name" id="name" placeholder="Your Name" required class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-current-100 focus:border-current-300 text-gray-500" />
                                            </div>
                                            <div class="mb-6">
                                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                                <input type="email" name="email" id="email" placeholder="you@gmail.com" required class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-current-100 focus:border-current-300 text-gray-500" />
                                            </div>
                                            <div class="mb-6">

                                                <label for="phone" class="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
                                                <input type="text" name="phone" id="phone" placeholder="+91 12345 67890" required class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-current-100 focus:border-current-300 text-gray-500" />
                                            </div>
                                            <div class="mb-6">
                                                <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                                                <textarea rows="5" name="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 bg-white placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-current-100 focus:border-current-300 text-gray-500" required></textarea>
                                            </div>
                                            <div class="mb-6">
                                                <button type="submit" class="w-full px-3 py-4 text-white bg-current-500 rounded-md focus:bg-current-600 focus:outline-none">Send Message</button>
                                            </div>
                                            <p class="text-base text-center text-gray-400" id="result">
                                            </p>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="w-full bg-dark-500 text-white">
                <div class="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
                    <div class="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
                        <div class="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
                            <Image
                                height={80}
                                width={80}
                                layout='fixed'
                                src="https://firebasestorage.googleapis.com/v0/b/neoium-5477b.appspot.com/o/posts%2Flogo.png?alt=media&token=61e9775a-f34d-4d94-8382-4cc14761411a"
                            />

                            <p class="opacity-60">Biparnna Para, Alampur, West Bengal 711302</p>
                        </div>
                        {/* <div class="w-full sm:w-1/5 flex flex-col space-y-4">
                            <a class="opacity-60">About Us</a>
                            <a class="opacity-60">Responsibilities</a>
                            <a class="opacity-60">Out Services</a>
                            <a class="opacity-60">Contact</a>
                        </div>
                        <div class="w-full sm:w-1/5 flex flex-col space-y-4">
                            <a class="opacity-60">Disclaimer</a>
                            <a class="opacity-60">Testimonials</a>
                            <a class="opacity-60">Privacy Policy</a>
                            <a class="opacity-60">Terms of Service</a>
                        </div> */}
                        <div class="w-full sm:w-1/5 pt-6 flex items-end mb-1">
                            <div class="flex flex-row space-x-4">
                                <i class="fab fa-facebook bg-white"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-instagram"></i>
                                <i class="fab fa-google"></i>
                            </div>
                        </div>
                    </div>
                    <div class="opacity-60 pt-2">
                        <p>© 2020 Wah Bhaiya.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
