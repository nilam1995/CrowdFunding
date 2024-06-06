import React, {useContext, useEffect,useState} from "react";
import { CrowdFundingContext } from '../Context/CrowdFunding';
import { Logo, Menu, Close } from '../Components/index';

const NavBar = () => {
  const {currentAccount, connectWallet} = useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOPen] = useState(false);

  const menuList = ["White Paper", "Project", "Donation", "Members"];

  // return(
  //   <div className="backgroundMain">
  //     <div className="px-4 py-5 mx-auto sm:mac-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  //       <div className="relative flex items-center justify-between">
  //         <div className="flex items-center">
  //           <a
  //             href="/"
  //             aria-label="Company"
  //             title="Company"
  //             className="inline-flex items-center mr-8 "
  //           >

  //             <Logo color="text-white"/>
  //             <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
  //               Company
  //             </span>
  //           </a>
  //           <ul className="flex items-center hidden space-x-8 lg:flex">
  //             {menuList.map((item,i) => (
  //               <li key={i+1}>
  //                 <a
  //                   href="/"
  //                   aria-label="Our product"
  //                   title="Our product"
  //                   className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
  //                 >
  //                   {item}
  //                 </a>
  //               </li>
  //             ))}
  //           </ul>
  //       </div>
  //       {!currentAccount && (
  //         <ul className="flex items-center hidden space-x-8 lg:flex">
  //           <li>
  //             <button
  //               onClick= {() => connectWallet()}
  //               className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none background"
  //               aria-label="Sign up"
  //               title="Sign up"
  //             >
  //               Connect Wallet
  //             </button>
  //           </li>
  //         </ul>
  //       )}

  //       <div className="lg:hidden z-40">
  //         <button
  //           aria-label="Open Menu"
  //           title="Open Menu"
  //           className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus-shadow-outline"
  //           onClick={() => setIsMenuOPen(true)}
  //           >
  //             <Menu/>
  //           </button>

  //           {isMenuOpen && (
  //             <div className="absolute top-0 left-0 w-full">
  //               <div className="p-5 bg-white border rounded shadow-sm">
  //                 <div className="flex items-center justify-between mb-4">
  //                   <div>
  //                     <a 
  //                       href="/"
  //                       aria-label="Company"
  //                       title="Company"
  //                       className="inline-flex items-center"
  //                     >
  //                       <Logo color="text-black"/>
  //                       <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
  //                         Company
  //                       </span>
  //                     </a>
  //                   </div>
  //                 </div>
  //                   <button
  //                     aria-label="Close Menu"
  //                     title="Close Menu"
  //                     className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
  //                     onClick={() => setIsMenuOPen(false)}
  //                     >
  //                      <Close/>
  //                   </button>
  //               </div>
  //               <nav>
  //                 <ul className="space-y-4">
  //                   {menuList.map((item,i) => (
  //                     <li key={i+1}>
  //                       <a
  //                         href="/"
  //                         aria-label="Our product"
  //                         title="Our Product"
  //                         className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-aceent-400"
  //                       >
  //                         {item}
  //                       </a>
  //                     </li>
  //                   ))}
  //                   <li>
  //                     <a
  //                       href="/"
  //                       className="inline-flex items-center background justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
  //                       aria-label="Sign up"
  //                       title="Sign up"
  //                     >
  //                       Connect Wallet
  //                     </a>
  //                   </li>
  //                 </ul>
  //               </nav>
  //             </div>
  //           )}
  //       </div>
  //     </div>  
  //   </div>
  //   </div>
  // )

  return(
    <div className="backgroundMain">
      <div className="px-4 py-5">
        <div className="flex">
          <div className="px-5 flex w-full ">
            <div className="flex items-center ">
              <Logo color="text-white"/>
              <span className="text-gray-200 text-xl flex text-center h-auto  uppercase font-bold pl-2">Company</span>
            </div>
            <ul className="hidden sm:block md:flex items-center justify-center">
              {menuList.map((item,i) => (
                <li key={i+1}>
                    <a 
                      href="/"
                      title="Company"
                      className="text-white text-lg px-5"
                    >
                      {item}
                    </a>
                </li>
              ))}
            </ul>
            <div className=" flex-grow z-40"></div>
              <div className="flex justify-center md:hidden lg:hidden">
                <button onClick={() => !isMenuOpen ? setIsMenuOPen(true) : setIsMenuOPen(false)} className={isMenuOpen ? "" : ""}>
                  <Menu color="text-white"/>
                </button>
              </div>
             
             <div className={!isMenuOpen ? "hidden sm:block" : ""}>
                <button onClick={() => !isMenuOpen ? setIsMenuOPen(true) : setIsMenuOPen(false)}>
                  <close color="text-white"/>
                </button>
             </div>

              <div className={!currentAccount ? "hidden sm:block md:w-auto bg-blue-900  ml-5 mr-5 justify-center rounded-md" : "hidden sm:block md:hidden"}>
              <button className=" text-white pt-2 pb-2 pl-5 pr-5" onClick={() => connectWallet()} >
                Connect Wallet
              </button>
              </div>
            </div>
        </div>
      </div>
      <div className= {!isMenuOpen ? "hidden" : "absolute flex right-0 w-1/2 h-screen backgroundMain z-50 md:hidden lg:hidden"}>
        <ul className="relative flex-col justify-center w-full">
          {menuList.map((item,i) => (
            <li key={i+1} className="flex w-full justify-center py-5">
              <a 
                href="/"
                title="Company"
                className="text-white text-lg "
              >
              {item}
              </a>
            </li>
          ))}
          <div className={!currentAccount ? "bg-blue-900 w-auto ml-5 mr-5 my-5 flex justify-center rounded-md" : "hidden sm:block"}>
            <button className=" text-white pt-3 pb-3" onClick={() => connectWallet()} >
              Connect Wallet
            </button>
          </div>
          
        </ul>       
      </div>
    </div>
  )
};

export default NavBar;
