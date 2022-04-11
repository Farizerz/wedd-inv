import React, { useState, useEffect } from 'react';
import './guestbook.css';
import { FaComments as Comment } from 'react-icons/fa';
import axios from 'axios';

const Guestbook = () => {
  const [message, setMessage] = useState([]);
  const [nama, setNama] = useState();
  const [komentar, setKomentar] = useState();


  useEffect(() => {
    selectMessage();
  }, []);

  const selectMessage = async () => {
    const response = await axios.get(`http://192.168.204.1:5000/`);
    const jsonData = await response.data;
    setMessage(jsonData);
  }

  const sendMessage = async e => {
    e.preventDefault();
    try {
      await axios.post(`http://192.168.204.1:5000/guestbook/post`, {
        nama: nama,
        komentar: komentar
      });
    } catch (err) {
      console.error(err.message);
    }
    window.location = "/";
    scrollToBottom();
  }

  const scrollToBottom = () => {
    var body = document.body,
    html = document.documentElement;
  
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    window.scrollTo({
      top: height,
      behavior: 'smooth'
    });
  }

  return (
    <div className='guestbook'>
      <div className='guestbook-bg'>
        { /* intro */ }
          <div className='guestbook-intro'>
            <p className='guestbook-title'>Guestbook</p>
            <p className='guestbook-subtitle'>Leave a Message / Wishes for us...</p>
            <button className='guestbook-button' onClick={scrollToBottom}><Comment /> Write your wish...</button>
            <div className='guestbook-dash'></div>
          </div>

        { /* komentar */ }
          <div className='guestbook-message'>
            {
              message.map((comments) => (
                <div key = {comments.id}>
                  <p className='guestbook-name'>{comments.nama}</p>
                  <p className='guestbook-comment'>{comments.komentar}</p>
                </div>
              ))
            }
          </div>

        { /* Send a message */ }
        <div className='guestbook-sendMessage'>
          <form onSubmit={ sendMessage }>
            <input 
              type="text" 
              className='guestbook-inputName' 
              placeholder='Name'
              value={nama}
              onChange={e => setNama(e.target.value)}
              required
            />
            <textarea 
              className='guestbook-inputMessage' 
              placeholder='Write a message' 
              value={komentar}
              onChange={e => setKomentar(e.target.value)}
              required
            />
            <button className='guestbook-submit' type='submit'>Send Wish</button>
          </form>
        </div>

        <div className='guestbook-footer'>
          <p className='guestbook-thanks'>Thank You</p>
          <p className='guestbook-title'>Ajeng & Denny</p>
        </div>
        
      </div>
    </div>
  )
}

export default Guestbook;