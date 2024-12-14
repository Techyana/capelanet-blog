import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CommentSection.module.scss';

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Fetch comments from the server
    axios.get('/api/comments').then(response => {
      setComments(response.data);
    });

    // Check if the user is logged in
    axios.get('/api/user').then(response => {
      if (response.data.loggedIn) {
        setIsLoggedIn(true);
        setUsername(response.data.username);
      } else {
        setUsername('Guest' + Math.floor(Math.random() * 1000));
      }
    });
  }, []);

  const handleCommentSubmit = () => {
    const commentData = {
      username,
      comment: newComment,
      date: new Date().toISOString(),
    };

    // Post the new comment to the server
    axios.post('/api/comments', commentData).then(response => {
      setComments([...comments, response.data]);
      setNewComment('');
    });
  };

  return (
    <div className="comment-section">
      <h3 className="text-xl font-bold mb-2 text-gray-700">Comments</h3>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p className="comment-username">{comment.username}</p>
            <p className="comment-date">{new Date(comment.date).toLocaleString()}</p>
            <p className="comment-text">{comment.comment}</p>
          </div>
        ))}
      </div>
      <div className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="comment-input"
        />
        <button onClick={handleCommentSubmit} className="comment-submit">
          Submit
        </button>
      </div>
      {!isLoggedIn && (
        <div className="sign-up-prompt">
          <p>Want to use your profile username? <a href="/signup">Sign up</a> or <a href="/signin">Sign in</a>.</p>
        </div>
      )}
    </div>
  );
};

export default CommentSection;