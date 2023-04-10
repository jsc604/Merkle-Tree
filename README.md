# Gift List

This project is a proof-of-concept implementation of a Merkle Tree-based system for verifying the presence of an individual's name in a "nice list." The system consists of a client-side application that creates a Merkle Tree from the nice list and generates a proof for a given name, and a server-side application that verifies the proof using the Merkle root and the provided name. The primary goal of the project is to demonstrate the use of Merkle Trees and their properties for efficient, secure, and tamper-proof data verification. By leveraging the power of Merkle Trees, the system ensures that verifying a name's presence in the list requires minimal information, thereby providing a scalable and secure solution for data validation.

To get started with the repository, clone it and then run `npm install` in the top-level directory to install the depedencies.

There are three folders in this repository:

## Client

You can run the client from the top-level directory with `node client/index`. This file is a script which will send an HTTP request to the server.

Think of the client as the _prover_ here. It needs to prove to the server that some `name` is in the `MERKLE_ROOT` on the server. 

## Server

You can run the server from the top-level directory with `node server/index`. This file is an express server which will be hosted on port 1225 and respond to the client's request.

Think of the server as the _verifier_ here. It needs to verify that the `name` passed by the client is in the `MERKLE_ROOT`. If it is, then we can send the gift! 

## Utils

There are a few files in utils:

- The `niceList.json` which contains all the names of the people who deserve a gift this year (this is randomly generated, feel free to add yourself and others to this list!)
- The `example.js` script shows how we can generate a root, generate a proof and verify that some value is in the root using the proof. Try it out from the top-level folder with `node/example.js`
- The `MerkleTree.js` has been modified so you should not have to deal with any crypto type conversion.
- You can use `verifyProof.js` to prove a name is in the merkle root, as show in the example.
