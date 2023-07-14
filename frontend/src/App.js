import "./App.css";
import {ToastContainer} from 'react-toastify';
import { Routes, Route, BrowserRouter,useHistory } from "react-router-dom";
import logo from './logo.svg';
import React,{useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Full from './components/Full';
import {navbar} from './constant/url'

const initialState = {
  Amount: "",
  Currency: "",
  UserId: "",
}

function App() {

  const [state, setState] = useState(initialState);
    const { Amount, Currency, UserId } = state;

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!Amount || !Currency || !UserId) {
          toast.error("Insert the values")
      } else {
          axios.post("http://localhost:8001/api/post", {
              Amount, Currency, UserId
          }).then(() => {
              setState({ Amount: "", Currency: "", UserId: "" });
          }).catch((err) => toast.error(err.response.data));
          // setTimeout(() => history.push("/"), 500);
      }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
}

  const displayRazorpay = async() => {
    const res = await loadRazorPay('https://checkout.razorpay.com/v1/checkout.js')
    
    if(!res){
      alert('Please check your connection!');
      return
    }

    const data = await fetch('http://localhost:8001/razorpay',{method:'GET'}).then((t) => t.json())
    console.log(data);
    const options = {
      "key": __DEV__ ? "rzp_test_LvN42NBYlsy7Ig" : "ProductionKey",
      // "currency" : data.currency,
      // "amount" : "4000",
      "name": "MyRetail",
      "description": "Thank you for order",
      "image": {logo},
      "order_id": data.id,  
      "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      "prefill": {
        "name": "Maitraiyee",  
        "email": "m@gmail.com",
        "contact": "1234567",
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3542fc"
        }
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open()
  }

  const loadRazorPay = (src) => {
    return new Promise((resolve) => {

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      document.body.appendChild(script);
      script.onload = () => {
        resolve(true)
      }

      script.onerror = () => {
        resolve(false)
      }
    })
  }

  const __DEV__ = document.domain === 'localhost'

  return (
    <div className="App">

      {/* User Data */}
      {/* <ToastContainer position='top-right'/>
      <form onSubmit={handleSubmit}>
        UserID : <input type="number" id="UserId" onChange={handleInputChange}/>
        <br/><br/>
        Amount: <input type="number" id="Amount" onChange={handleInputChange} />
        <br/><br/>
        Currency: <input type="text" id="Currency" onChange={handleInputChange} />
        <br/><br/>
        <button id="btnAdd">Submit</button>
      </form>
        <button onClick = { () => displayRazorpay()}>
        Make Payment
      </button> */}


      {/* Payment module */}
      {/* <button onClick = { () => displayRazorpay()}>
        Make Payment
      </button> */}

      <BrowserRouter>
        <Full>
        <Routes>
            {navbar?.map((item,i=0) => (
              <Route path={item.path} element={<item.element />} key={i} />
            ))}
        </Routes>
          </Full>
      </BrowserRouter>
    </div>
  );
}

export default App;