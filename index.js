const fs = require('fs');
const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const port = 12345; // set this port in competitive-companion extension on your browser

app.post('/', (req, res) => {
    const data = req.body;
    tests = [];
    console.log(data);

    for(test of data['tests']) {
        tests.push({
            "test": test["input"],
            "correct_answers": [test["output"].trim()]
        })
    }

    console.log("Loaded!");    
    // replace the path with your file.. but don't forget to add the same file extension
    fs.writeFile('/home/shubhi/code/shubhi.cpp__tests', JSON.stringify(tests), function(){})

    res.sendStatus(200);
})

app.listen(port, err => {
    if(err) {
        console.log(err);
        process.exit(1);
    }

    console.log(`Listening on port ${port}`);
})