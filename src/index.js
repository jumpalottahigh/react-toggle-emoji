import React from 'react'

const style = {
  border: 'none',
  width: '60px',
  height: '60px',
  fontSize: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: '1rem',
  backgroundColor: '#d2d2d2',
  cursor: 'pointer',
  borderRadius: '50%',
  boxShadow:
    '0px 7px 18px rgba(0, 0, 0, 0.25), 0px 7px 10px rgba(0, 0, 0, 0.22)'
}

export default class ToggleEmoji extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  render() {
    const { open } = this.state
    return (
      <button
        style={style}
        onClick={() => {
          this.setState(prev => ({ open: !prev.open }))
        }}
      >
        {open ? '📖' : '📘'}
      </button>
    )
  }
}
