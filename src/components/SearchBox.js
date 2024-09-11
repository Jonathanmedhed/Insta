import React, { useState } from 'react';

const SearchBox = ({ list, setList }) => {
  const [keyword, setKeyword] = useState('');

  const onChange = (value) => {
    setKeyword(value);
    setList(
      list.filter((item) =>
        item?.username?.toLowerCase()?.includes(value?.toLowerCase())
      )
    );
  };
  return (
    <div className=''>
      <input
        type='text'
        name='q'
        onChange={(e) => onChange(e.target.value)}
        value={keyword}
        placeholder='Search'
        className=''
      />
    </div>
  );
};

export default SearchBox;
