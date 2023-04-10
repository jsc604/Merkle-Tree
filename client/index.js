const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // Create the Merkle Tree for the whole nice list
  const merkleTree = new MerkleTree(niceList);

  // Find the proof that a specific name is in the list
  const name = 'Norman Block';
  const index = niceList.findIndex(n => n === name);
  const proof = merkleTree.getProof(index);

  // Send the proof and name to the server
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof,
  });

  console.log({ gift });
}

main();
