//brainjs example demo
const brain = require('brain.js');
const network = new brain.NeuralNetwork();

//creating artifical data to train network
network.train([
    {input: [0,0,0], output: [0]},
    {input: [0,0,1], output: [0]},
    {input: [0,1,1], output: [0]},
    {input: [1,0,1], output: [1]},
    {input: [1,1,1], output: [1]}
]);


//should return low probability
const output = (network.run([0,0,0])) * 100;


//should return high probability
const output2 = (network.run([1,1,1])) * 100;

//backtick for including JS code (template string)
console.log(`Prob: ${output}%`);
console.log(`Prob: ${output2}%`);
