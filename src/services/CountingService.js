const hit = (key, namespace = '') => {
    var count = 0;
    //url = `https://${base_api_url}/hit//${key}`
    fetch(
        `https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e`, { method: "GET" }

      ).then(res => res.json())
       .then(response => {
          count = response.value;
        })
        .catch(error => console.log(error));

    return count;
};


const async get = () => { 

    const count = await fetch(
      `https://api.countapi.xyz/get/1ccb732e-b55a-4404-ad3f-0f99c02fe44e`, { method: "GET" }
    ).then(res => res.json())
     .then(response => {
        return response.value;
      })
      .catch(error => console.log(error));
}

export { hit, get };