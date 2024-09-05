import React, { useState } from 'react';
import SearchBox from './SearchBox';

export const ShareBox = () => {
  const list = ['item 1', 'item 2', 'item 3', 'item 4'];

  const [currentList, setCurrentList] = useState(list || []);

  return (
    <div className='share-box'>
      <div className='share-box__header'>
        <div className='share-box__title'>Share</div>
        <i className='fa fa-close' aria-hidden='true'></i>
      </div>
      <div className='share-box__search'>
        <SearchBox list={list} setList={setCurrentList} />
      </div>
      <div className='share-box__friends'>
        {currentList.map((item, i) => (
          <div className='share-box__friend' key={i}>
            {item}
          </div>
        ))}
      </div>
      <div className='share-box__links'>
        <div className='share-box__link email'>
          <i className='fa fa-envelope' aria-hidden='true'></i>
        </div>
        <div className='share-box__link facebook'>
          <i className='fa fa-facebook' aria-hidden='true'></i>
        </div>
        <div className='share-box__link twitter'>
          <i className='fa fa-twitter' aria-hidden='true'></i>
        </div>
        <div className='share-box__link whatsapp'>
          <i className='fa fa-whatsapp' aria-hidden='true'></i>
        </div>
      </div>
    </div>
  );
};
