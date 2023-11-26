'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'

export default function Reasons() {

    const [tab, setTab] = useState<number>(1)

    const tabs = useRef<HTMLDivElement>(null)

    const heightFix = () => {
        if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
    }

    useEffect(() => {
        heightFix()
    }, [])

    return (
        <section className="relative">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">LÝ DO LỰA CHỌN CHÚNG TÔI</h1>
            {/* <p className="text-xl text-gray-600">Công ty TNHH Tư vấn và Phát triển OCOP - OCOP’s RISE với đội ngũ những chuyên gia hàng đầu trong lĩnh vực công nghệ, nông nghiệp hiện đại, mong muốn đem đến những giá trị thực cho khách hàng, hỗ trợ tuyệt đối cho người nông dân.
Công ty cung cấp các dịch vụ tư vấn, hỗ trợ về mọi mặt liên quan đến việc đăng ký, xây dựng thương hiệu, quản trị chất lượng và phát triển thị trường dành cho các OCOP.</p> */}
          </div>

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">

                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-4 mb-6 md:mb-0 md:order-1" data-aos="fade-right">
                            {/* <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                <h3 className="h3 mb-3 text-center">LÝ DO LỰA CHỌN CHÚNG TÔI</h3>
                                <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                            </div> */}
                            {/* Tabs buttons */}
                            <div className="mb-8 md:mb-0">
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(1); }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Dịch vụ tận tâm</div>
                                        <div className="text-gray-600">Chúng tôi luôn đặt cái tâm của người làm nông nghiệp lên hàng đầu để tư vấn cho các bác nông dân những điều phù hợp nhất.</div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z" fill="green" />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(2); }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Lợi ích của khách hàng</div>
                                        <div className="text-gray-600">Cung cấp giải pháp tư vấn, hỗ trợ toàn diện, </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z" fill="green" />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(3); }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Chuyên nghiệp – Uy tín</div>
                                        <div className="text-gray-600">Đội ngũ tư vấn chuyên nghiệp, có chuyên môn cao, am hiểu về các chính sách và pháp luật hiện hành. </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z" fill="green" />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                                    href="#0"
                                    onClick={(e) => { e.preventDefault(); setTab(4); }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">Năng động – Sáng tạo</div>
                                        <div className="text-gray-600">Các tư vấn viên đều là những bạn đã tốt nghiệp các trường nông nghiệp, có nhiệt huyết và luôn năng động, sáng tạo trong công việc.</div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z" fill="green" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Tabs items */}
                        <div className=" max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-8 md:mt-6 ">
                            <div className="transition-all">
                                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                                    {/* Item 1 */}
                                    <Transition
                                        show={tab === 1}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="relative inline-flex flex-col">
                                            <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={700} height="462" alt="Features bg" />
                                            {/* <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                                        </div>
                                    </Transition>
                                    {/* Item 2 */}
                                    <Transition
                                        show={tab === 2}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="relative inline-flex flex-col">
                                        <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={700} height="462" alt="Features bg" />
                                            {/* <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                                        </div>
                                    </Transition>
                                    {/* Item 3 */}
                                    <Transition
                                        show={tab === 3}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="relative inline-flex flex-col">
                                        <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={700} height="462" alt="Features bg" />
                                            {/* <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                                        </div>
                                    </Transition>

                                    {/* Item 4 */}
                                    <Transition
                                        show={tab === 4}
                                        appear={true}
                                        className="w-full"
                                        enter="transition ease-in-out duration-700 transform order-first"
                                        enterFrom="opacity-0 translate-y-16"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in-out duration-300 transform absolute"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 -translate-y-16"
                                        beforeEnter={() => heightFix()}
                                        unmount={false}
                                    >
                                        <div className="relative inline-flex flex-col">
                                        <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={700} height="462" alt="Features bg" />
                                            {/* <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} /> */}
                                        </div>
                                    </Transition>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}