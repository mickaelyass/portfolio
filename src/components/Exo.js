/* import { useEffect, useState } from "react";

const Exo=()=>{
    const[page,setPage]=useState(1);
    const [donnee,setDonnee]=useState([]);
    
    function attraper(data){
    const copie = [...donnee, data];
   setDonnee(copie);
   setPage(page + 1);
        
    setDonnee(copie);
    console.log(donnee)
   }

   useEffect(() => {
        console.log(donnee);
      }, [donnee]);
      

return(
<div>
    <h1 className="text-center">Page {page}</h1>
  {page===1 &&<Child callback={attraper}></Child>  }
  {page===2 &&<Child callback={attraper}></Child>  }
  {page===3 &&<Child callback={attraper}></Child>  }
  

  {donnee.length > 0 && <pre>{JSON.stringify(donnee, null, 2)}</pre>}
  {page===4 && <button className="btn bg-gray-700 text-white border-t-indigo-600 p-2 rounded-md" > Enregitrer les données</button>  }
</div>)

}

function Child({callback}){
 const [data,setData]=useState({
 });
 const handleChange=(e)=>{
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
 }

 const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(data);
        callback(data);
  
 }

    return(<form onSubmit={handleSubmit} className="flex-col bg-zinc-300 justify-center w-80 my-auto mx-auto p-12">
                <div className=" ">
        <label htmlFor="name">Nom d'utilisateur</label>
        <input type="text" id='name' name='name' onChange={handleChange} placeholder="Entrer votre nom"></input>
        </div>

                <div>
        <label htmlFor="email"> Email</label>
        <input type="email" id='email' name='email' onChange={handleChange}  placeholder="Entrer votre mail"></input>
                </div>

            <div>
            <label htmlFor="password">Mots de passe</label>
            <input type="password" id="password" onChange={handleChange} name='password' placeholder="Entrer votre password"></input>
            </div>
                        
            <div>
            <label htmlFor="confirmpassword">Confirmer votre mot de  passe</label>
            <input  type="password" id='confirmpassword' onChange={handleChange} name='confirmpassword' placeholder="Confirmer votre password"></input>
            </div>
    <button  type="submit" >Soumettre</button>
      
    </form>)
}


export default Exo; */