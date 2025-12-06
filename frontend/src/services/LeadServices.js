import requests from "./httpServices";

const LeadServices = {
  addLead: async (body, headers) => {
    return requests.post("/leads", body, headers);
  },
};

export default LeadServices; 
