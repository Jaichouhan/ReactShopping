import React, { useEffect, useState } from 'react'
import axios from 'axios';
const PostApi = () => {
    const [show,setshow] = useState("");
    useEffect(() => {
        fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
        .then((res) => res.json())
        .then((data) => setshow(data))
    },[])
    // const [send,setsend] = useState({name:'',last:''});
    //     const SubmitForm = async() => {
    //         // store the states in the form data
    //         const loginFormData = new FormData();
    //         loginFormData.append("username", send.name)
    //         loginFormData.append("password", send.last)
          
    //         try {
    //           // make axios post request
    //           const response = await axios({
    //             method: "post",
    //             url: "https://reqres.in/api/users",
    //             data: loginFormData,
    //             headers: { "Content-Type": "multipart/form-data" },
    //           });
    //         } catch(error) {
    //           console.log(error)
    //         }
          
    // }
   
    // const changeHandler = (e) => {
    //     setsend({
    //         ...send,
    //         [e.target.name]:e.target.value
    //     })
    // }
  return (
    <>
    {show && show.map((data,index)=>{
        <div key={index}>
              {data.name}
        </div>
    })}
      {/* <div>
  <form onSubmit={SubmitForm}>
    <label htmlFor="fname">First Name</label>
    <input type="text" placeholder="Your name.." name='name' value={send.name} onChange={changeHandler}/>

    <label htmlFor="lname">Last Name</label>
    <input type="text" placeholder="Your last name.." name="last" value={send.last} onChange={changeHandler}/>
  
    <input type="submit" value="Submit" />
  </form>
</div> */}
    
    </>
  )
}

export default PostApi