const axios = require('axios') 
const ethers = require('ethers')
 const address = '0xdAC17F958D2ee523a2206206994597C13D831ec7' 
 const apiKey = 'ZM9FGFKM54JUYFXYUFGYGBQFRA9K5YG1HR'
  const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${apiKey}`
   const infuraUrl = 'https://mainnet.infura.io/v3/423150519d6842cbb425088ebbc57329' 
   const getAbi = async () => { const res = await axios.get(url) 
    const abi = JSON.parse(res.data.result)
     
    const provider = new ethers.providers.JsonRpcProvider(infuraUrl) 
    const contract = new ethers.Contract( address, abi, provider ) 


    const balance = await contract.balanceOf('0xab7C56D9841D5b03009B71675Fb8f6FDcaAAc58D')
     
     console.log(balance.toNumber())
     return balance.toNumber()
      } 
      getAbi()
    module.exports = getAbi