async function update(req,res){
    const axios = require('axios').default;


const options = {
  method: 'PUT',
  url: 'https://services.leadconnectorhq.com/contacts/L8p81677ltbSPOMnCuFy',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJMb2NhdGlvbiIsImF1dGhDbGFzc0lkIjoiazFGMzh6M0EwZWZSTUhlVmtrM3YiLCJzb3VyY2UiOiJJTlRFR1JBVElPTiIsInNvdXJjZUlkIjoiNjVlYjVhODQ2YzE3MzNkYjU3YWQwYWEzLWx0ajBoa2R4IiwiY2hhbm5lbCI6Ik9BVVRIIiwicHJpbWFyeUF1dGhDbGFzc0lkIjoiazFGMzh6M0EwZWZSTUhlVmtrM3YiLCJvYXV0aE1ldGEiOnsic2NvcGVzIjpbImNvbnRhY3RzLnJlYWRvbmx5IiwiY29udGFjdHMud3JpdGUiLCJsb2NhdGlvbnMvY3VzdG9tRmllbGRzLndyaXRlIiwibG9jYXRpb25zL2N1c3RvbUZpZWxkcy5yZWFkb25seSJdLCJjbGllbnQiOiI2NWViNWE4NDZjMTczM2RiNTdhZDBhYTMiLCJjbGllbnRLZXkiOiI2NWViNWE4NDZjMTczM2RiNTdhZDBhYTMtbHRqMGhrZHgifSwiaWF0IjoxNzA5OTY4NjU5LjY4MSwiZXhwIjoxNzEwMDU1MDU5LjY4MX0.0sFevnxtKwM3Lw1sPt26pSFhqm6Lv3Ati1R-U0DYn3Q',
    Version: '2021-07-28',
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
    data: {
      firstName: 'rosan',
      lastName: 'Deo',
      name: 'rosan Deo',
      email: 'rosan6@deos.com',
      phone: '+1 888-888-88883',
      address1: '3535 1st St N',
      city: 'Dolomite',
      state: 'AL',
      postalCode: '35061',
      website: 'https://www.tesla.com',
      timezone: 'America/Chihuahua',
      dnd: true,
      dndSettings: {
        Call: {status: 'active', message: 'string', code: 'string'},
        Email: {status: 'active', message: 'string', code: 'string'},
        SMS: {status: 'active', message: 'string', code: 'string'},
        WhatsApp: {status: 'active', message: 'string', code: 'string'},
        GMB: {status: 'active', message: 'string', code: 'string'},
        FB: {status: 'active', message: 'string', code: 'string'}
      },
      inboundDndSettings: {all: {status: 'active', message: 'string'}},
      tags: ['nisi sint commodo amet', 'consequat'],
      customFields: [{id: 'L5JN3pehxg7yK6VES0lY', value: 'TEST API'}],
      source: 'public api',
      country: 'US'
    }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
  res.send({data})
} catch (error) {
  console.error(error);
}

}
module.exports=update

// const axios = require("axios").default;
// async function update(req, res) {
//   const options = {
//     method: "PUT",
//     url: "https://services.leadconnectorhq.com/locations/k1F38z3A0efRMHeVkk3v/customFields/00NhGCcN1tlO8ZHcu7Wb",
//     headers: {
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhc3MiOiJMb2NhdGlvbiIsImF1dGhDbGFzc0lkIjoiazFGMzh6M0EwZWZSTUhlVmtrM3YiLCJzb3VyY2UiOiJJTlRFR1JBVElPTiIsInNvdXJjZUlkIjoiNjVlYjVhODQ2YzE3MzNkYjU3YWQwYWEzLWx0ajBoa2R4IiwiY2hhbm5lbCI6Ik9BVVRIIiwicHJpbWFyeUF1dGhDbGFzc0lkIjoiazFGMzh6M0EwZWZSTUhlVmtrM3YiLCJvYXV0aE1ldGEiOnsic2NvcGVzIjpbImNvbnRhY3RzLnJlYWRvbmx5IiwiY29udGFjdHMud3JpdGUiLCJsb2NhdGlvbnMvY3VzdG9tRmllbGRzLndyaXRlIiwibG9jYXRpb25zL2N1c3RvbUZpZWxkcy5yZWFkb25seSJdLCJjbGllbnQiOiI2NWViNWE4NDZjMTczM2RiNTdhZDBhYTMiLCJjbGllbnRLZXkiOiI2NWViNWE4NDZjMTczM2RiNTdhZDBhYTMtbHRqMGhrZHgifSwiaWF0IjoxNzA5OTU2MTQxLCJleHAiOjE3MTAwNDI1NDF9.F5EZmdujMmYKRgH9TlqlTHOIQrI6H_vMug_LHZULaX4",
//       Version: "2021-07-28",
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     data: {
//       name: "Custom Field",
//       placeholder: "Placeholder Text",
//       acceptedFormat: [".pdf", ".docx", ".jpeg"],
//       isMultipleFile: false,
//       maxNumberOfFiles: 2,
//       textBoxListOptions: [{ label: "First", prefillValue: "" }],
//       position: 0,
//       model: "contact",
//     },
//   };

//   try {
//     const { data } = await axios.request(options);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// module.exports = update;
