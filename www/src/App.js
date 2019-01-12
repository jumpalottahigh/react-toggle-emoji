import React, { Component } from 'react'
import ToggleEmoji from 'react-toggle-emoji'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>React Toggle Emoji Buttons:</h2>
        <p>Try them out by clicking the buttons below</p>
        <div
          style={{
            display: 'flex',
            padding: '0 2rem',
            justifyContent: 'space-around'
          }}
        >
          <ToggleEmoji emojiSet="" customEmojiOpen="" customEmojiClose="" />
        </div>
        <br />
        <br />
        <br />
        <hr />
        <h2>Size:</h2>
        <div
          style={{
            display: 'flex',
            padding: '0 2rem',
            justifyContent: 'space-between'
          }}
        >
          <ToggleEmoji
            size="small"
            emojiSet=""
            customEmojiOpen=""
            customEmojiClose=""
          />
          <ToggleEmoji emojiSet="" customEmojiOpen="" customEmojiClose="" />
          <ToggleEmoji
            size="large"
            emojiSet=""
            customEmojiOpen=""
            customEmojiClose=""
          />
        </div>
        <br />
        <br />
        <br />
        <hr />
        <h2>Background color:</h2>
        <div
          style={{
            display: 'flex',
            padding: '0 2rem',
            justifyContent: 'space-between'
          }}
        >
          <ToggleEmoji
            bgColor="skyblue"
            emojiSet="sound"
            customEmojiOpen=""
            customEmojiClose=""
          />
          <ToggleEmoji
            bgColor="tomato"
            emojiSet="sound"
            customEmojiOpen=""
            customEmojiClose=""
          />
          <ToggleEmoji
            bgColor="mediumpurple"
            emojiSet="sound"
            customEmojiOpen=""
            customEmojiClose=""
          />
        </div>
        <br />
        <br />
        <br />
        <hr />
        <h2>Border radius:</h2>
        <div
          style={{
            display: 'flex',
            padding: '0 2rem',
            justifyContent: 'space-between'
          }}
        >
          <ToggleEmoji
            emojiSet="mailbox"
            borderRadius="10%"
            customEmojiOpen=""
            customEmojiClose=""
          />
          <ToggleEmoji
            emojiSet="mailbox"
            borderRadius="32%"
            customEmojiOpen=""
            customEmojiClose=""
          />
          <ToggleEmoji
            emojiSet="mailbox"
            borderRadius="50%"
            customEmojiOpen=""
            customEmojiClose=""
          />
        </div>
        <br />
        <br />
        <br />
        <hr />
        <h2>Border size and color:</h2>
        <div
          style={{
            display: 'flex',
            padding: '0 2rem',
            justifyContent: 'space-between'
          }}
        >
          <ToggleEmoji
            emojiSet="horse"
            border="1px solid cornflowerblue"
            customEmojiOpen=""
            customEmojiClose=""
          />
          <ToggleEmoji
            emojiSet="horse"
            border="3px solid darkorange"
            customEmojiOpen=""
            customEmojiClose=""
          />
          <ToggleEmoji
            emojiSet="horse"
            border="2px solid forestgreen"
            customEmojiOpen=""
            customEmojiClose=""
          />
        </div>
        <br />
        <br />
        <br />
        <hr />
        <h2>Predefined emoji sets:</h2>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            padding: '0 2rem',
            justifyContent: 'space-evenly'
          }}
        >
          <ToggleEmoji
            emojiSet="glasses"
            customEmojiOpen=""
            customEmojiClose=""
          />
          <ToggleEmoji
            emojiSet="skull"
            customEmojiOpen=""
            customEmojiClose=""
          />
          <ToggleEmoji
            emojiSet="laugh"
            customEmojiOpen=""
            customEmojiClose=""
          />
          <ToggleEmoji emojiSet="hand" customEmojiOpen="" customEmojiClose="" />
          <ToggleEmoji emojiSet="fire" customEmojiOpen="" customEmojiClose="" />
        </div>
        <br />
        <br />
        <br />
        <hr />
        <h2>Custom emoji:</h2>
        <p>Put whatever you like in them.</p>
        <div
          style={{
            display: 'flex',
            padding: '0 2rem',
            justifyContent: 'space-evenly'
          }}
        >
          <ToggleEmoji customEmojiClose="👓" customEmojiOpen="🕶" />
        </div>
        <div style={{ height: '40px' }} />
      </div>
    )
  }
}

export default App
