import React from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation" ];
  const contactList = ["suppourt@cryptoking.com","info@example.com","Contact us",];
  const useFullLink = ["Home", "About Us", "Company Bio"];

  return (
    <footer className="backgroundMain w-full">
      <div className="flex flex-col py-5 md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-white text-xl uppercase font-bold text-center md: pl-5">Crypto King</h1>
          <p className="text-white text-md w-full pt-3 pl-14 pr-14 text-center  md:p-none justify-start">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div className="flex flex-col w-full pr-0 md:flex-row justify-between pr-10 ">
          <div>
            <h1 className="text-white text-md uppercase font-bold mt-5 text-center md:mt-0">products</h1>
            <ul>
              {productList.map((product,i)=>(
                <li key={i+1} className="text-white font-medium text-center text-sm pt-1">
                  <a
                    href="/"
                    title="product"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-white text-md uppercase font-bold mt-5 text-center md:mt-0">Useful links</h1>
            <ul>
              {useFullLink.map((link,i)=>(
                <li key={i+1} className="text-white font-medium   text-center text-sm pt-1">
                  <a
                    href="/"
                    title="product"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-white text-md uppercase font-bold mt-5 text-center md:mt-0">contact</h1>
            <ul>
              {contactList.map((contact,i)=>(
                <li key={i+1} className="text-white font-medium   text-center text-sm pt-1">
                  <a
                    href="/"
                    title="product"
                  >
                    {contact}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
