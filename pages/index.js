import { useEffect, useState, Fragment } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken = "pk.eyJ1Ijoic2hha3Rpc2luZ2h0YW53YXIiLCJhIjoiY2tjaWZsM2ltMGpoNzMxb2Vtc2F3Y2JkZyJ9.PehDlzofQpiwL9xjQq36Jg";

const navigation = [
    { name: 'Product', href: '#Product', isActive: false },
    { name: 'Features', href: '#Features', isActive: false },
    { name: 'Marketplace', href: '#Marketplace', isActive: false },
    { name: 'Company', href: '#Company', isActive: false },
    { name: 'Contact us', href: '#', isActive: true },
]

export default function Example() {
    const [pageIsMounted, setPageIsMounted] = useState(false);
    const [os, setOs] = useState('');

    function getOS() {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }

        setOs(os);
    }

    useEffect(() => {
        setPageIsMounted(true)
        const map = new mapboxgl.Map({
            container: "my-map",
            style: "mapbox://styles/mapbox/dark-v9",
            center: [88.1800603, 22.5737997],
            zoom: 12
        });
        getOS()

        map.on('load', function () {
            map.addSource('places', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                    '<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [88.2106476, 22.5820499]
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                    '<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>'
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [88.1466019, 22.5704553]
                            }
                        },
                    ]
                }
            });
            // Add a layer showing the places.
            map.addLayer({
                'id': 'places',
                'type': 'circle',
                'source': 'places',
                'paint': {
                    'circle-color': '#f97316',
                    'circle-radius': 6,
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#ffffff'
                }
            });
        });

        document.querySelector('#my-map').addEventListener('click', () => {
            if (os == 'Windows' || 'Mac OS') {
                const url = 'http://www.google.com/maps/place/' + 22.5737997 + ',' + 88.1800603;
                window.open(url, '_blank', 'location=yes');
                return;
            }

            if (os == 'Android' || 'iOS') {
                window.location = 'geo:22.5820499,88.2106476'
                return;
            }
        })
    }, [])
    return (
        <>
            <Head>
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
                    rel="stylesheet"
                />
            </Head>
            <>
                <div id="Product" className="h-screen relative bg-white overflow-hidden">
                    <div className="max-w-7.5xl mx-auto">
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
                                                        <a data-scroll key={item.name} href={item.href} className={`font-medium ${item.isActive ? 'text-current-500' : 'text-gray-500'} hover:text-current-500`}>
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

                            <main className="lg:h-screen mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
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
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <Image
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                            src="https://firebasestorage.googleapis.com/v0/b/neoium-5477b.appspot.com/o/posts%2FScreenshot%202021-05-24%20at%207.20.55%20PM.png?alt=media&token=e23967c7-b17d-469c-8f92-334ef975e57d"
                            alt="Picture of the author"
                            layout="responsive"
                            height={500}
                            width={500}
                        />
                    </div>
                </div>

                <div id="Features" class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
                    <div class="bg-gray-100 rounded-3xl shadow-xl w-full overflow-hidden">
                        <div class="md:flex w-full">
                            {/* <div class="hidden md:block w-1/2 bg-gradient-to-r from-gray-900 to-gray-400 py-10 px-10">
                            <Image
                                layout="responsive"
                                src="https://firebasestorage.googleapis.com/v0/b/neoium-5477b.appspot.com/o/posts%2Ft3.svg?alt=media&token=19924c73-c2ce-42a0-b8e4-a35b3d84119b"
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                        </div> */}

                            <div id="my-map" class="lg:w-1/2 lg:h-screen md:w-full h-96 py-10 px-10">
                                {/* <Image
                                    layout="responsive"
                                    src="https://firebasestorage.googleapis.com/v0/b/neoium-5477b.appspot.com/o/posts%2Ft3.svg?alt=media&token=19924c73-c2ce-42a0-b8e4-a35b3d84119b"
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                /> */}

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



                <div id="Marketplace" class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
                    <div class="bg-gray-100 rounded-3xl shadow-xl w-full overflow-hidden">
                        <div class="md:flex w-full">
                            <div class="w-full md:w-1/2">
                                <div class="flex flex-col items-baseline min-h-screen bg-white px-8 pt-8">

                                    <div>
                                        <span className="block xl:inline lg:text-4xl tracking-tight font-extrabold text-current-500 sm:text-5xl md:text-6xl">MISSION</span>
                                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                            The mission of A.S. Fabrication and Engineering Works is to provide high quality, convenient and comprehensive Cabin manufacturing and full body repairing services. The most important aspect of our business is trust. It is the goal of our firm to have 100% customer satisfaction in regards to quality, friendliness, time to completion and to discover new ways to exceed the expectations of our clients.
              </p>
                                    </div>

                                    <div class="mt-10">
                                        <span className="block xl:inline lg:text-4xl tracking-tight font-extrabold text-current-500 sm:text-5xl md:text-6xl">ABOUT US</span>
                                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                            At ‘A.S. Fabrication and Engineering Works’ we will likely give you the best fix encounter conceivable and give you an affable and practical option in contrast to your new vehicle merchant. You can think of us as a top of the line office that is agreeable, cordial, and moderate. We treat our clients like family since we comprehend the significance of genuineness and trustworthiness in the automobile industry. Your trust isn’t something we mess with, and each time you approach us we guarantee to surpass desires.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="md:w-full lg:w-1/2 overlay">
                                {/* <Image
                                    layout="responsive"
                                    src="https://media.gettyimages.com/photos/construction-industry-architects-and-engineers-working-together-picture-id1042316762?k=6&m=1042316762&s=612x612&w=0&h=yiv2k4vV862FJ0DFm1jYOY9ZB2ukN8qobggH5-gImG8="
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>


                <div id="Company" class="w-full bg-dark-500 text-white">
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
        </>
    )
}
