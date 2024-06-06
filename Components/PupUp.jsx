import React, { useEffect, useState } from "react";

const PupUp = ({setOpenModel, donate, donateFunction, getDonations}) => {
  const [amount, setAmount] =  useState("");
  const [allDonationData, setAllDonationData] = useState()

  const createDonation = async () => {
    try{
      const data = await donateFunction(donate.pId, amount);
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    const donationsListData = getDonations(donate.pId);
    return async () => {
      const donationData = await donationsListData;
      setAllDonationData(donationData);
      console.log()
    }
  },[]);

  return (
  //   <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
  //   <div className="bg-white p-6 rounded-lg shadow-lg relative">
  //     <button
  //       className="absolute top-2 right-2 text-gray-500"
  //       // onClick={onClose}
  //     >
  //       &times;
  //     </button>
  //     <h2 className="text-xl font-bold mb-4">Popup Title</h2>
  //     <p className="mb-4">This is the content of the popup.</p>
  //     <button
  //       className="bg-blue-500 text-white px-4 py-2 rounded"
  //       // onClick={onClose}
  //     >
  //       Close
  //     </button>
  //   </div>
  // </div>

  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg relative">
        <h1 className=" text-2xl font-bold">{donate.title}</h1>
        <hr className="border-t-1 border-gray-300 my-3" />
        <h1 className="text-sm font-normal text-slate-600 pt-4">{donate.description}</h1>
        <input
          className="border w-full p-2 mt-4"
          placeholder="amount"
          type="text"
          onChange={(e)=> setAmount(e.target.value)}
        />
        <hr className="border-t-1 border-gray-300 my-6" />
        <div className="flex flex-row  justify-end">
          <button 
            className="mr-2 p-2"
            onClick={() => (setOpenModel(false))}
            >
              Close
            </button>
          <button 
            className="bg-violet-700 px-6 py-2 border rounded text-white "
            onClick={() => (createDonation())}
            >
              Donate
            </button>
        </div>
      </div>
    </div>
  )
};

export default PupUp;
