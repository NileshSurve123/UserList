import Image from "next/image";

import Link from "next/link";





const getData = async () =>{
    const response = await fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users');
    if(!response.ok){
        throw new Error("failed to fetch API data");

    }
    return response.json();
}



const Login = async () => {
    const apiData = await getData();
    return (
        <>
            <h2>User list</h2>
            <br></br>
          {
            apiData.slice(0,21).map((item)=>(
                <>

                  
                    <img
                       src={item.avatar} width={120} height={120}
                       />
                  
                  
                    
                <Link href={`/User_list/${item.id}`} key={item.id}>{item.id}</Link>
                   <div>Username:- {item.profile.username}</div>
                     
                <h4>Email:- {item.profile.email}</h4>   
                            

                <p>Job_Tittle:- {item.jobTitle}</p>
                <br></br>
                
                </>
            ))
          }

        </>
    )
}

export default Login;
