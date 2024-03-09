const axios = require("axios").default;
async function getcontact(req, res) {
  const options = {
    method: "GET",
    url: "https://services.leadconnectorhq.com/contacts/",
    params: { locationId: "k1F38z3A0efRMHeVkk3v" },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJMb2NhdGlvbiIsImF1dGhDbGFzc0lkIjoiazFGMzh6M0EwZWZSTUhlVmtrM3YiLCJzb3VyY2UiOiJJTlRFR1JBVElPTiIsInNvdXJjZUlkIjoiNjVlYjVhODQ2YzE3MzNkYjU3YWQwYWEzLWx0ajBoa2R4IiwiY2hhbm5lbCI6Ik9BVVRIIiwicHJpbWFyeUF1dGhDbGFzc0lkIjoiazFGMzh6M0EwZWZSTUhlVmtrM3YiLCJvYXV0aE1ldGEiOnsic2NvcGVzIjpbImNvbnRhY3RzLnJlYWRvbmx5IiwiY29udGFjdHMud3JpdGUiLCJsb2NhdGlvbnMvY3VzdG9tRmllbGRzLndyaXRlIiwibG9jYXRpb25zL2N1c3RvbUZpZWxkcy5yZWFkb25seSJdLCJjbGllbnQiOiI2NWViNWE4NDZjMTczM2RiNTdhZDBhYTMiLCJjbGllbnRLZXkiOiI2NWViNWE4NDZjMTczM2RiNTdhZDBhYTMtbHRqMGhrZHgifSwiaWF0IjoxNzA5OTY4NjU5LjY4MSwiZXhwIjoxNzEwMDU1MDU5LjY4MX0.0sFevnxtKwM3Lw1sPt26pSFhqm6Lv3Ati1R-U0DYn3Q",
      Version: "2021-07-28",
      Accept: "application/json",
    },
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
    return res.json({ data });
  } catch (error) {
    console.error(error);
  }
}
module.exports = getcontact;
