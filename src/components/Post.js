import React, { useState } from "react";
import Input from "./Input";
import { Overlay } from "./Overlay";
import { Video } from "./Video";
import ImageComponent from "./ImageComponent";
import { Comments } from "./Comments";
import { InstaHeader } from "./InstaHeader";
import { InstaOptions } from "./InstaOptions";
import { ShareBox } from "./ShareBox";
import { checkIsVideo, idGenerator } from "../utils/functions";
import { BASE_URL } from "../constants";

const Post = ({ key, post, user }) => {
  const [comment, setComment] = useState("");
  const [currentComments, setCurrentComments] = useState(post?.comments || []);
  const [currentDislikes, setCurrentDislikes] = useState(post.dislikes || []);
  const [currentLikes, setCurrentLikes] = useState(post.likes || []);
  const [followed, setFollowed] = useState(post?.isFollowed || false);
  const [reported, setReported] = useState(post?.isReported || false);
  const [saved, setSaved] = useState(post?.isSaved || false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const menuOptions = [
    {
      className: "--color-danger",
      label: reported ? "Undo reporting" : "Report",
      onClick: () => {
        setReported(!reported);
        setShowOptions(false);
      },
    },
    {
      className: followed ? "--color-danger" : "",
      label: followed ? "Unfollow" : "Follow",
      onClick: () => {
        setFollowed(!followed);
        setShowOptions(false);
      },
    },
    {
      className: isLinkCopied ? "--color-success" : "",
      label: isLinkCopied ? "Copied!" : "Copy link",
      onClick: () => {
        navigator.clipboard.writeText(`${BASE_URL}posts/${post.id}`);
        setIsLinkCopied(true);
      },
    },
    {
      label: "Cancel",
      onClick: () => setShowOptions(false),
    },
  ];

  const handleAddComment = () => {
    const date = new Date();
    const commentToAdd = {
      id: idGenerator(),
      date: date,
      comment: comment,
      disliked: false,
      dislikes: 0,
      liked: false,
      likes: 0,
      user: user,
    };
    setCurrentComments(currentComments.concat(commentToAdd));
    setComment("");
  };

  let checkLiked =
    currentLikes &&
    currentLikes.length > 0 &&
    currentLikes.find((e) => e.id === user.id);
  let checkDisliked =
    currentDislikes &&
    currentDislikes.length > 0 &&
    currentDislikes.find((e) => e.id === user.id);

  const handleLike = () => {
    if (!checkLiked) {
      setCurrentLikes((currentLikes) => [...currentLikes, user]);
    } else if (checkLiked) {
      setCurrentLikes((l) => l.filter((item) => item.id !== user.id));
    }
    if (checkDisliked) {
      setCurrentDislikes((l) => l.filter((item) => item.id !== user.id));
    }
  };

  const handleDislike = () => {
    if (!checkDisliked) {
      setCurrentDislikes((currentDislikes) => [...currentDislikes, user]);
    } else if (checkDisliked) {
      setCurrentDislikes((l) => l.filter((item) => item.id !== user.id));
    }
    if (checkLiked) {
      setCurrentLikes((l) => l.filter((item) => item.id !== user.id));
    }
  };

  return (
    <div className="post" key={key}>
      <Overlay hide={() => setShowOptions(false)} show={showOptions}>
        <div className="menu-overlay">
          <div className="menu-overlay__options">
            {menuOptions.map((option, i) => (
              <div
                className={`menu-overlay__option ${
                  option.className ? option.className : ""
                }`}
                key={i}
                onClick={option.onClick}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      </Overlay>
      <Overlay hide={() => setShowShare(false)} show={showShare}>
        <ShareBox hide={() => setShowShare(false)} user={user} post={post} />
      </Overlay>
      <InstaHeader
        date={post?.date}
        isFollowed={followed}
        setShowOptions={setShowOptions}
        setIsFollowed={setFollowed}
        showOptions={showOptions}
        post={post}
        user={post?.user}
        isPost={true}
      />
      {reported ? (
        <div className="reported-post" onClick={() => setReported(!reported)}>
          <div className="reported-text">Reported</div>
          <div className="reported-undo">
            undo
            <i className="fa fa-undo" aria-hidden="true" />
          </div>
        </div>
      ) : (
        <>
          {checkIsVideo(post.media) ? (
            <Video
              controls={false}
              autoplay={false}
              muted={false}
              src={post.media}
            />
          ) : (
            <ImageComponent
              //className={true}
              //key={true}
              //onClick={true}
              //onLoad={true}
              src={post?.media}
            />
          )}
          <InstaOptions
            handleDislike={handleDislike}
            handleLike={handleLike}
            isDisLiked={currentDislikes ? checkDisliked : false}
            isLiked={currentLikes ? checkLiked : false}
            dislikes={currentDislikes.length}
            likes={currentLikes.length}
            setShowShare={setShowShare}
            showShare={showShare}
            setShowComments={setShowComments}
            showComments={showComments}
            setSaved={setSaved}
            saved={saved}
            post={post}
            user={post?.user}
          />
          <div className="post__description">
            <p className="--bold --mt-qter">
              This is a description about the vid
            </p>
          </div>
          <Comments
            className="--mt-1"
            comments={currentComments.sort((b, a) => a.date - b.date)}
            max={2}
            user={user}
          />
          <span
            className="--pointer --mt-qter"
            onClick={() => setShowComments(!showComments)}
          >
            View all comments
          </span>
          <Input
            className="post__input"
            type="emoji"
            placeholder="Add a comment..."
            value={comment}
            onChange={setComment}
            onEnter={handleAddComment}
          />
        </>
      )}
    </div>
  );
};

export default Post;
