import Image from "next/image";

import Link from "next/link";
import "./api/User_list/loading.jsx";





const getData = async () =>{
    const response = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users');
    if(!response.ok){
        throw new Error("failed to fetch API data");

    }
    return response.json(response);
}



const Login = async () => {
    const apiData = await getData();
    return (
        <>
            <h2>User list</h2>
            <br></br>
          {
            apiData.map((item)=>(
                <>

                  
                    
                    
                  
                  
                    
                <Link href={`/api/User_list/${item.id}`} key={item.id}>


                   <img src={item.avatar} width={120} height={120} />
                   <br></br>

                   ID Number = {item.id}
                
                   <div>Username:- {item.profile.username}</div>
                     
                     <h4>Email:- {item.profile.email}</h4>   
                                 
     
                     <p>Job_Tittle:- {item.jobTitle}</p>
                
                
                </Link>
                  
                <br></br>

                <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                

                
                
                </>
            ))
          }

        </>
    )
}

export default Login;
