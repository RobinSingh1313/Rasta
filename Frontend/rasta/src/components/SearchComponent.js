import React, { useState } from 'react'
import Searchbar from './Searchbar'
import DropDown from './DropDown';
const SearchComponent = () => {
  const [selectedValue2, setSelectedValue2] = useState('Delhi');
  const [selectedValue1, setSelectedValue1] = useState('Hyderabad');

  const handleChange1 = (event) => {
    setSelectedValue1(event.target.value);
    // Add any other logic you need based on the selected value
  };

  const handleChange2 = (event) => {
    setSelectedValue2(event.target.value);
    // Add any other logic you need based on the selected value
  };
  const [selected, setSelected] = useState('Delhi');
  return (
<>

<div className='background'>
        <div className='heading_filter '>

          <h2 className='search-header'>Search</h2>
          <p>Search Through a Location which has been surved by us</p>
          

       
          </div>

          

          <div className='front_card '>

            <div className='top scrollable-container'>
            <Searchbar/>
            <img src='map.png' className='global_image'></img>
            <h2>Survey History</h2>
            <h4 className='roadways_title'> ROADWAYS </h4>
            <div className='drop'>         
            
               <DropDown selected={selectedValue1} setSelected={setSelectedValue1} />
               <div className='toDrop'>
               <DropDown selected={selectedValue2}setSelected={setSelectedValue2} />

               </div>
</div>

            </div>
            

          <div>

       


            
          </div>
        
</div>
          </div>
</>
    )
}

export default SearchComponent