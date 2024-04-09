export async function generateStaticParams() {
  const res = await fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users");
  const data = await res.json(res);

  return data.slice(0,20).map((user) =>({
    id: user.id.toString(),
  }));
};

async function getUser(id){
  const res = await fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`);
  const data = await res.json(res);
  return data;
};

export default async function UserPage({params}){
  const user = await getUser(params.id);
  
  return (
    <>
    
    <img
        src={user.avatar} width={120} height={120}
                       />
                       <br></br>

<h1>your id :- {user.id}</h1>                 
        <br></br>               
    Username:-{user.profile.username};
    <br></br>
    First_name:- {user.profile.firstName};
    <br></br>
    Last_name :- {user.profile.lastName};
    <br></br>

    Email:- {user.profile.email};   
                            
        <br></br>
      Job_Tittle:- {user.jobTitle};
      <br></br>
      Bio:- {user.Bio}


    </>
  );
  
};
  



   





