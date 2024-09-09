import React, { useState } from 'react';
import SearchBox from './SearchBox';
import { InstaHeader } from './InstaHeader';

export const ShareBox = ({ user, hide }) => {
  const [currentList, setCurrentList] = useState(user.friends || []);
  const [isShared, setIsShared] = useState(false);
  const [selectedIDs, setSelectedIDs] = useState([]);

  return (
    <div className='share-box'>
      <div className='share-box__header'>
        <div className='share-box__title'>Share</div>
        <i className='fa fa-close' aria-hidden='true' onClick={hide} />
      </div>
      <div className='share-box__search'>
        <SearchBox list={user?.friends} setList={setCurrentList} />
      </div>
      <div className='share-box__friends'>
        {currentList.map((item, i) => (
          <div className='share-box__friend' key={i}>
            <InstaHeader
              isFriendCard={true}
              user={item}
              onSelect={() => setSelectedIDs([...selectedIDs, item.id])}
              unSelect={() =>
                setSelectedIDs(selectedIDs.filter((id) => id !== item.id))
              }
              isSelected={selectedIDs.includes(item.id)}
            />
          </div>
        ))}
      </div>
      {selectedIDs.length > 0 && (
        <div
          className={`share-box__button ${isShared ? '--sent' : ''}`}
          onClick={() => setIsShared(!isShared)}
        >
          <span>{isShared ? 'Shared!' : 'Share'}</span>
        </div>
      )}
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
