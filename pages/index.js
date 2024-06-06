import React, {useEffect,useContext, useState} from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Card, PupUp } from "../Components";

const index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllCampaign] = useState();
  const [usercampaign, setUserCampaign] = useState();

  useEffect(() => {
    const getCampaignData = getCampaigns();
    const userCampaignData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignData;
      const userData = await userCampaignData;
      setAllCampaign(allData);
      setUserCampaign(userData);
    };
  },[]);

  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] =useState();

  console.log(donateCampaign);

  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign}/>
      <Card
        title="All Listed Campaign"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}      
      />
       <Card
        title="Your Created Campaign"
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}      
      />
      {openModel && (
        <PupUp
        setOpenModel={setOpenModel}
        getDonations={getDonations}
        donate={donateCampaign}
        donateFunction={donate}      
        />
      )}
    </>
  )
};

export default index;
