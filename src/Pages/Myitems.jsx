import React, { Suspense, use } from 'react';
import Myitemlist from '../Components/Myitemlist';
import { Authcontext } from '../Context/Authcontext';




    const myitemspromise=(email,accessToken)=>{
    return fetch(`https://food-server-brown.vercel.app/myfoods?email=${email}`,{
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res=>res.json())
}

const Myitems = () => {
    const {user}=use(Authcontext);
    



    
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

                <Myitemlist myitemspromise={myitemspromise(user.email,user.accessToken)}></Myitemlist>

            </Suspense>
            
        </div>
    );
};

export default Myitems;