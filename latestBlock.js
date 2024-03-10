function getLatestBlockNumber() {
  const currentDate = new Date();
  const timestamp = Math.floor(currentDate.getTime()/1000);
  
  const etherscanApiUrl = `https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before&apikey=ZM9FGFKM54JUYFXYUFGYGBQFRA9K5YG1HR`;
  
  fetch(etherscanApiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.status === "1") {
  
        const blockNumber = data.result;
  
  
        console.log("Latest Block Number:", blockNumber);
  
      } else {
        console.log("Error:", data.message);
      }
    })
    .catch(error => {
      console.error("Failed to fetch data:", error);
    });
}

getLatestBlockNumber()

module.exports =  getLatestBlockNumber 
