import React, { useState } from 'react';

const SearchBox = ({ list, setList }) => {
  const [keyword, setKeyword] = useState('');

  const onChange = (value) => {
    setKeyword(value);
    //let resultWithSomethingB = array.filter(element => element.something === 'b')[0];
    let resultWithSomethingB = list.filter((element) =>
      element.includes(value)
    );
    setList(resultWithSomethingB);
  };
  return (
    <div className=''>
      <input
        type='text'
        name='q'
        onChange={(e) => onChange(e.target.value)}
        value={keyword}
        placeholder='Search Products...'
        className=''
      />
    </div>
  );
};

export default SearchBox;
