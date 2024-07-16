import bodyParser from "body-parser";
import express from "express";
import axios from "axios";

const app = express();
const PORT = 5000;

const tok = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxMTM5OTM1LCJpYXQiOjE3MjExMzk2MzUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijk1N2MyYTI4LTcwNjQtNDMxMi04MmQxLWRlYWJkY2Y5NWJmYyIsInN1YiI6IjEyNTAwMzE1MUBzYXN0cmEuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJTQVNUUkEiLCJjbGllbnRJRCI6Ijk1N2MyYTI4LTcwNjQtNDMxMi04MmQxLWRlYWJkY2Y5NWJmYyIsImNsaWVudFNlY3JldCI6InJMTGp3VlZqZklUeGNOT24iLCJvd25lck5hbWUiOiJLaXNob3JlIEt1bWFyIiwib3duZXJFbWFpbCI6IjEyNTAwMzE1MUBzYXN0cmEuYWMuaW4iLCJyb2xsTm8iOiIxMjUwMDMxNTEifQ.IacTuqen7aZ0f3tCFVyQRt9ifJzULAxzTk85NDvOp1I';

app.use(express.json());
app.use(bodyParser.json());



let windowPrevState = [];
let windowCurrState = [];
let numbers = [];

app.get("/numbers/e",async (req,resp)=>{
    try{
        const response = await axios.get('http://20.244.56.144/test/even',
            {
            headers: {
                'Authorization': `Bearer ${tok}`
            },
            timeout:500
        });
        const result = response.data;
        const obj = {};
        if(windowCurrState.length>0){
            windowPrevState = windowCurrState;
        }
        windowCurrState = result["numbers"];
        obj.windowCurrState = windowCurrState;
        obj.windowPrevState = windowPrevState;
        numbers.push(...windowCurrState);
        if(numbers.length>10){
           numbers = numbers.slice(-10);
        }
        let count = 0;
        obj.numbers = numbers;
        for(var i=0;i<numbers.length;i++){
            count+=numbers[i];
        }
        obj.avg = count/numbers.length;
        console.log(obj);
        resp.json(obj);
    } catch(err){
        console.error(err.message);
        resp.status(500).send('Server Error');
    }
});

app.get("/numbers/p",async (req,resp)=>{
    try{
        const response = await axios.get('http://20.244.56.144/test/primes',
            {
            headers: {
                'Authorization': `Bearer ${tok}`
            },
            timeout:500
        });
        const result = response.data;
        const obj = {};
        if(windowCurrState.length>0){
            windowPrevState = windowCurrState;
        }
        windowCurrState = result["numbers"];
        obj.windowCurrState = windowCurrState;
        obj.windowPrevState = windowPrevState;
        numbers.push(...windowCurrState);
        if(numbers.length>10){
           numbers = numbers.slice(-10);
        }
        let count = 0;
        obj.numbers = numbers;
        for(var i=0;i<numbers.length;i++){
            count+=numbers[i];
        }
        obj.avg = count/numbers.length;
        console.log(obj);
        resp.json(obj);
    } catch(err){
        console.error(err.message);
        resp.status(500).send('Server Error');
    }
});

app.get("/numbers/f",async (req,resp)=>{
    try{
        const response = await axios.get('http://20.244.56.144/test/fibo',
            {
            headers: {
                'Authorization': `Bearer ${tok}`
            },
            timeout:500
        });
        const result = response.data;
        const obj = {};
        if(windowCurrState.length>0){
            windowPrevState = windowCurrState;
        }
        windowCurrState = result["numbers"];
        obj.windowCurrState = windowCurrState;
        obj.windowPrevState = windowPrevState;
        numbers.push(...windowCurrState);
        if(numbers.length>10){
           numbers = numbers.slice(-10);
        }
        let count = 0;
        obj.numbers = numbers;
        for(var i=0;i<numbers.length;i++){
            count+=numbers[i];
        }
        obj.avg = count/numbers.length;
        console.log(obj);
        resp.json(obj);
    } catch(err){
        console.error(err.message);
        resp.status(500).send('Server Error');
    }
});

app.get("/numbers/r",async (req,resp)=>{
    try{
        const response = await axios.get('http://20.244.56.144/test/rand',
            {
            headers: {
                'Authorization': `Bearer ${tok}`
            },
            timeout:500
        });
        const result = response.data;
        const obj = {};
        if(windowCurrState.length>0){
            windowPrevState = windowCurrState;
        }
        windowCurrState = result["numbers"];
        obj.windowCurrState = windowCurrState;
        obj.windowPrevState = windowPrevState;
        numbers.push(...windowCurrState);
        if(numbers.length>10){
           numbers = numbers.slice(-10);
        }
        let count = 0;
        obj.numbers = numbers;
        for(var i=0;i<numbers.length;i++){
            count+=numbers[i];
        }
        obj.avg = count/numbers.length;
        console.log(obj);
        resp.json(obj);
    } catch(err){
        console.error(err.message);
        resp.status(500).send('Server Error');
    }
});


app.listen(PORT,()=>{
    console.log("Server Started");
});