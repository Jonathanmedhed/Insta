import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { InstaHeader } from "./InstaHeader";
import xIcon from "../images/x.svg";
import { BASE_URL } from "../constants";

export const ShareBox = ({ user, hide, post }) => {
  const [currentList, setCurrentList] = useState(user.following || []);
  const [isShared, setIsShared] = useState(false);
  const [selectedIDs, setSelectedIDs] = useState([]);
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  return (
    <div className="share-box">
      <div className="share-box__header">
        <div className="share-box__title">Share</div>
        <i className="fa fa-close" aria-hidden="true" onClick={hide} />
      </div>
      <div className="share-box__search">
        <SearchBox list={user?.following} setList={setCurrentList} />
      </div>
      <div className="share-box__following">
        {currentList.length === 0 && "No following found"}
        {currentList.map((item, i) => (
          <div className="share-box__friend" key={i}>
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
          className={`share-box__button ${isShared ? "--sent" : ""}`}
          onClick={() => setIsShared(!isShared)}
        >
          <span>{isShared ? "Shared!" : "Share"}</span>
        </div>
      )}
      <div className="share-box__links">
        <div className="share-box__link email">
          <div
            className="share-box__icon"
            onClick={() => {
              navigator.clipboard.writeText(`${BASE_URL}posts/${post.id}`);
              setIsLinkCopied(true);
            }}
          >
            <i
              className={`fa fa-${isLinkCopied ? "check" : "link"}`}
              aria-hidden="true"
            />
          </div>
          <div
            className="share-box__icon-text"
            onClick={() => {
              navigator.clipboard.writeText(`${BASE_URL}posts/${post.id}`);
              setIsLinkCopied(true);
            }}
          >
            {isLinkCopied ? "Copied!" : "Copy link"}
          </div>
        </div>
        <div className="share-box__link email">
          <a
            className="share-box__icon"
            href={`mailto:?subject=${user?.username} wants you to check this post&amp;body=Check out this post http://www.website.com.`}
            title="Share by Email"
          >
            <i className="fa fa-envelope" aria-hidden="true" />
          </a>
          <a
            className="share-box__icon-text"
            href={`mailto:?subject=${user?.username} wants you to check this post&amp;body=Check out this post http://www.website.com.`}
            title="Share by Email"
          >
            Email
          </a>
        </div>
        <div className="share-box__link facebook">
          <a
            className="share-box__icon"
            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F${"parse.com"}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F${"parse.com"}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <div className="share-box__link twitter">
          <a
            className="share-box__icon"
            href="http://twitter.com/share?text=check this post!&url=http://mywebsite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="x-social" className="share-box__x-icon" src={xIcon} />
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F${"parse.com"}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>
        <div className="share-box__link whatsapp">
          <a
            className="share-box__icon"
            href="whatsapp://send?text=The text to share!"
            data-action="share/whatsapp/share"
          >
            <i className="fa fa-whatsapp" aria-hidden="true" />
          </a>

          <span className="share-box__icon-text">Whatsapp</span>
        </div>
      </div>
    </div>
  );
};
