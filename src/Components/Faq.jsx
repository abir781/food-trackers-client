import React from 'react';


const Faq = () => {
   
    return (
        <div className='w-11/12 mx-auto mt-5 mb-10'>
            <h1 className='text-5xl font-bold text-center mb-5'>Frequently Asked Question</h1>
            <div className='bg-yellow-500 space-y-3 p-4 mb-3 rounded-2xl'>
                <h1 className='text-2xl font-bold'>1.How do I add a food item with an expiration date?</h1>
                <h1 className='text-2xl font-bold'>Answer: You can add food items by logging in and filling out the form on the "Add Food" page. Just enter the item name, category, and expiration date  </h1>
            </div>

              <div className='bg-yellow-500 space-y-3 p-4 mb-3 rounded-2xl '>
                <h1 className='text-2xl font-bold'>2.Is my food inventory private?</h1>
                <h1 className='text-2xl font-bold'>Answer: Yes. Only you can view and manage the food items you add. Your inventory is tied to your account and is not visible to other users. </h1>
                
            </div>

              <div className='bg-yellow-500 space-y-3 p-4 mb-3 rounded-2xl '>
                <h1 className='text-2xl font-bold'>3.How does the expiry countdown work?</h1>
                <h1 className='text-2xl font-bold'>Answer: Each item displays a live countdown that shows how many days are left until the item expires. Once expired, it will be marked clearly so you can take action.  </h1>
                
            </div>

               <div className='bg-yellow-500 space-y-3 p-4 mb-3 rounded-2xl'>
                <h1 className='text-2xl font-bold'>4.Can I edit or delete a food item after adding it?</h1>
                <h1 className='text-2xl font-bold'>Answer: Yes. On the My Items page, you can edit or delete any item you've added. This gives you full control over your inventory. </h1>
            </div>

               <div className='bg-yellow-500 space-y-3 p-4 mb-3 rounded-2xl '>
                <h1 className='text-2xl font-bold'>5.Do I need to create an account to use the system?</h1>
                <h1 className='text-2xl font-bold'>Answer: Yes, creating an account is required to access private features like adding food items, viewing your items, and managing your inventory. </h1>
            </div>
            
        </div>
    );
};

export default Faq;