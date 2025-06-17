import React, { Suspense, use } from 'react';
import Myitemlist from '../Components/Myitemlist';
import { Authcontext } from '../Context/Authcontext';




    const myitemspromise=email=>{
    return fetch(`http://localhost:3000/myfoods?email=${email}`).then(res=>res.json())
}

const Myitems = () => {
    const {user}=use(Authcontext)


    
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

                <Myitemlist myitemspromise={myitemspromise(user.email)}></Myitemlist>

            </Suspense>
            
        </div>
    );
};

export default Myitems;