import React from 'react';

import './chat.css';

export default function Chat() {
  return (
    <main className="container">
      <div className="chat">
        <div className="chat-history">
          <ul className="messages">
            <li className="clearfix">
              <div className="message-data">
                <span className="message-data-time">19:35</span>
                <span className="message-data-name">Сергей Зеленов</span>
              </div>
              <div className="message message-my">asdfasdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">19:35</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdfsadf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">19:35</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data align-right"><span className="message-data-time">19:36</span><span
                className="message-data-name">example1</span></div>
              <div className="message message-other">asdfasdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data align-right"><span className="message-data-time">19:36</span><span
                className="message-data-name">example1</span></div>
              <div className="message message-other">adfasdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">19:37</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdfasdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">19:39</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdfasdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">19:40</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdfasdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">19:46</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">sdfasdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">19:47</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">aasdfasdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">19:47</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">123123</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">19:59</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">sadf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">20:23</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdfasdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">20:24</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdfasdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">20:24</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">20:24</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">20:25</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdfasdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">20:25</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">20:25</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">20:25</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdfasdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">20:25</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">asdf</div>
            </li>
            <li className="clearfix">
              <div className="message-data"><span className="message-data-time">20:31</span><span
                className="message-data-name">Сергей Зеленов</span></div>
              <div className="message message-my">sfasdfasdf</div>
            </li>
          </ul>
        </div>
        <form className="chat-message clearfix"><textarea id="message" placeholder="Type your message"
                                                          rows="3"></textarea>
          <button>Send</button>
        </form>
      </div>
    </main>
  );
}
