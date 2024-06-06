import React,{useState} from "react";
import Icon from "./Icon"

const Hero = ({titleData, createCampaign}) => {
  const [campaign,setCampaign] =useState({
    title:"",
    description:"",
    amount:"",
    deadline:"",
  })

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try{
      const data = await createCampaign(campaign);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="">
      <div className="">
        <div className="relative backgroundMain">
          <Icon/>
          <div className="flex w-full flex-col py-16 px-16 md:flex-row">
          <div className="w-full justify-center mb-8 md:w-1/2">
            <h2 className="text-white font-bold text-4xl flex justify-center">Crypto king</h2>
            <h2 className="text-white font-bold text-4xl flex justify-center">Crowd Funding CK</h2>
            <p className="text-white pt-4 text-xs font-light flex justify-center px-4 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="w-full flex justify-center z-0  md:w-full lg-full">
            <div className="w-full bg-white z-0 flex rounded-md p-4 shadow-lg md:1/2 lg:w-1/2">
              <div className="flex flex-col w-full h-auto">
                <form className="flex flex-col">
                  <label className="font-medium">Title</label>
                  <input className="rounded-sm h-9 border mt-2 text-sm px-2"
                    placeholder="title"
                    type="text"
                    onChange={(e) => setCampaign({...campaign, title:e.target.value,})}
                  />

                  <label className="font-medium mt-4">Description</label>
                  <input className="rounded-sm h-9 border mt-2 text-sm px-2"
                    placeholder="description"
                    type="text"
                    onChange={(e) => setCampaign({...campaign, description:e.target.value,})}
                  />

                  <label className="font-medium mt-4">Target Amount</label>
                  <input className="rounded-sm h-9 border mt-2 text-sm px-2"
                    placeholder="amount"
                    type="text"
                    onChange={(e) => setCampaign({...campaign, amount:e.target.value,})}
                  />

                  <label className="font-medium mt-4">Target Date</label>
                  <input className="rounded-sm h-9 border mt-2 text-sm px-2"
                    type="date"
                    onChange={(e) => setCampaign({...campaign, deadline:e.target.value,})}
                  />

                  <button className="mt-4 rounded-md border py-2 shadow-md" onClick={(e) => createNewCampaign(e)}>
                    Create Campaign
                  </button>

                  <h6 className="font-normal text-xs mt-6">Create you Campaign for raise funds</h6>

                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
   
   
  )
};

export default Hero;
