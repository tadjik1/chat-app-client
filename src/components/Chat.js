import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import { fetchMessages } from '../store/actions';

export const WebsocketConnected = Symbol('WebsocketConnected');
export const WebsocketDisconnected = Symbol('WebsocketDisconnected');
export const NewMessage = Symbol('NewMessage');

let socket = null;

function Chat({token, messages, isWebsocketConnected, dispatch, fetchMessages}) {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    socket = io(`http://localhost:3001?token=${token}`);
  
    fetchMessages();

    socket.on('connect', () => {
      console.log('connect');
      dispatch({type: WebsocketConnected});
    });

    socket.on('disconnect', () => {
      console.log('disconnect');
      dispatch({type: WebsocketDisconnected});
    });
    
    socket.on('system_message', message => {
      console.log('system_message', message);
      dispatch({type: NewMessage, message});
    });
  
    socket.on('user_message', message => {
      console.log('user_message', message);
      dispatch({type: NewMessage, message});
    });
  }, []);
  
  function onSubmit(event) {
    event.preventDefault();
  
    if (!isWebsocketConnected) return;
    if (!message) return;
    
    socket.emit('message', message);
    setMessage('');
  }
  
  return (
    <main className="container">
      <div style={{minHeight: '100vh'}} className="row justify-content-center">
        <div className="col col-md-6" style={{display: 'flex', flexDirection: 'column'}}>
          <div className="my-4" style={{flexGrow: 1}}>
            {messages.fetching &&
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            }
            {!messages.fetching && messages.list.length === 0 &&
              <p className="text-muted">Сообщений пока нет</p>
            }
            {messages.list.map(message => {
              return (
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">{message.text}</p>
                    <p className="card-text text-muted">Timothy, 10:29</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            onSubmit={onSubmit}
            className="form-inline form-row text-center my-4">
            <input
              type="text"
              value={message}
              disabled={!isWebsocketConnected}
              onChange={event => setMessage(event.target.value)}
              className="form-control col"
              placeholder="message" />
            <button
              disabled={!isWebsocketConnected}
              type="submit"
              className="btn btn-info">Send</button>
          </form>
        </div>
      </div>
    </main>
  );
}

function mapStateToProps(state) {
  return {
    token: state.token,
    messages: state.messages,
    isWebsocketConnected: state.isWebsocketConnected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ fetchMessages }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
