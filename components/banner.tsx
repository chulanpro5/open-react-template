'use client'

import React from 'react';

export default function Banner() {
  const imageStyle = {
    width: '80px', // Set the width to your desired size
    height: 'auto', // Automatically adjust the height to maintain aspect ratio
    // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow effect
    /* Other styles as needed */
  };

  return (
<div className="fixed bottom-0 right-0 md:bottom-8 md:right-12 z-50">
  <a href="tel:+84898359676" className="block">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/640px-Icon_of_Zalo.svg.png"
      alt="Call us"
      style={{
        width: '50px', // Set the width as needed
        position: 'fixed',
        bottom: '0',
        right: '0',
        marginRight: '12px', // Adjust this value as per your layout
        marginBottom: '8px', // Adjust this value as per your layout
        zIndex: '50',
      }}
    />
  </a>
</div>

  );
}


// export default function Banner() {

//   const [bannerOpen, setBannerOpen] = useState<boolean>(true)

//   return (
//     <>
//       {bannerOpen && (
//         <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
//           <div className="bg-slate-800 text-slate-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
//             <div className='text-slate-500 inline-flex'><a className="font-medium hover:underline text-slate-50" href="https://github.com/cruip/tailwind-landing-page-template" target="_blank" rel="noreferrer">Download<span className="hidden sm:inline"> on GitHub</span></a> <span className="italic px-1.5">or</span> <a className="font-medium hover:underline text-emerald-400" href="https://cruip.com/simple/" target="_blank" rel="noreferrer">Check Premium Version</a></div>
//             <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700" onClick={() => setBannerOpen(false)}>
//               <span className="sr-only">Close</span>
//               <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
//                 <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }