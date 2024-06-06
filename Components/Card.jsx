import React from "react";

const Card = ({allcampaign,setOpenModel, setDonate,title}) => {

  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime()- Date.now();
    const remainingDays = difference/(1000 * 3600 *24);
    return remainingDays.toFixed(0);
  }

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl ms:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="py-16 text-2xl font-bold leading-5">{title}</h1>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {allcampaign?.map((item,i) => (
          <div key={i+1} className="w-auto rounded-md overflow-hidden border shadow-md" onClick={() => (setDonate(item), setOpenModel(true))}>
            <img src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt=""/>
            <div className="px-4 py-4">
              <h1 className="text-xs font-bold text-gray-500">DAYS LEFT: {daysLeft(item.deadline)}</h1>
              <h1 className="font-extrabold text-lg pt-1">{item.title}</h1>
              <h1 className="font-normal text-sm text-slate-700 pt-2">{item.description}</h1>
              <div className="flex flex-row pt-4">
                <h1 className="font-medium text-sm text-slate-800">Target: {item.target}ETH</h1>
                <h1 className="font-medium text-sm text-slate-800 ml-4">Raised: {item.amountCollected}ETH</h1>
              </div>
            </div>
            
          </div>
        ))}
        
      </div>
    </div>
  )
};

export default Card;
