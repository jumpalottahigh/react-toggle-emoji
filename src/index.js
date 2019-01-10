import React from 'react'
import styled from 'styled-components'

const sizes = {
  small: {
    width: 48,
    height: 48,
    fontSize: 28
  },
  default: {
    width: 64,
    height: 64,
    fontSize: 36
  },
  large: {
    width: 80,
    height: 80,
    fontSize: 48
  }
}

const emojiList = {
  book: {
    open: '📖',
    close: '📘'
  },
  glasses: {
    open: '😍',
    close: '😎'
  },
  laugh: {
    open: '🤣',
    close: '😂'
  },
  horse: {
    open: '🦄',
    close: '🐴'
  },
  skull: {
    open: '☠',
    close: '💀'
  },

  hand: {
    open: '👍',
    close: '👎'
  },
  shoe: {
    open: '👠',
    close: '👡'
  },
  sound: {
    open: '🔊',
    close: '🔈'
  },
  mailbox: {
    open: '📭',
    close: '📫'
  },
  moon: {
    open: '🌕',
    close: '🌑'
  },
  fire: {
    open: '🔥',
    close: '💧'
  },
  arrow: {
    open: '⬇',
    close: '⬆'
  }
}

const Button = styled.button`
  cursor: pointer;
  transition: 125ms;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${sizes.default.width}px;
  height: ${sizes.default.height}px;
  font-size: ${sizes.default.fontSize}px;
  background-color: ${props => (props.bgColor ? props.bgColor : '#fff')};
  box-shadow: ${props =>
    props.noShadow
      ? 'none'
      : 'rgba(0, 0, 0, 0.2) 0px 1px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 3px 1px -2px;'};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '50%')};
  border: ${props => (props.border ? props.border : 'none')};

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  &.small {
    width: ${sizes.small.width}px;
    height: ${sizes.small.height}px;
    font-size: ${sizes.small.fontSize}px;
  }

  &.large {
    width: ${sizes.large.width}px;
    height: ${sizes.large.height}px;
    font-size: ${sizes.large.fontSize}px;
  }
`

export default class ToggleEmoji extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  render() {
    const { open } = this.state
    const { size, emojiSet, customEmojiOpen, customEmojiClose } = this.props

    let emojiOpen = emojiList.book.open
    let emojiClose = emojiList.book.close

    // Set emoji based on emojiSet
    if (Object.keys(emojiList).includes(emojiSet)) {
      emojiOpen = emojiList[emojiSet].open
      emojiClose = emojiList[emojiSet].close
    }

    // Set emoji based on custom emoji
    if (customEmojiOpen && customEmojiClose) {
      emojiOpen = customEmojiOpen
      emojiClose = customEmojiClose
    }

    return (
      <Button
        {...this.props}
        className={size}
        onClick={() => {
          this.setState(prev => ({ open: !prev.open }))
        }}
      >
        {open ? emojiOpen : emojiClose}
      </Button>
    )
  }
}
