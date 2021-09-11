const memberData = require("../data/members.json");

const getMembers = () => { 
    return memberData;
};

const getMember = (id) => { 
    return memberData.find(m => m.id === id);
};

module.exports = { 
    getMembers, 
    getMember
};