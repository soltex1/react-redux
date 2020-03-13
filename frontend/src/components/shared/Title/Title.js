import React from 'react'

const titleStyle = (titleSize, marginTop) => ({
  width: '100%',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 3,
  marginTop: marginTop || 45,
  minWidth: '0',
  display: 'table',
  opacity: 1,
  color: 'black',
  fontSize: titleSize || 25
})

const subtitleStyle = {
  textAlign: 'center',
  width: '100%',
  minWidth: '0',
  display: 'table',
  fontFamily: `'Open Sans', sans-serif`,
  opacity: 0.6,
  color: 'black',
  fontSize: 18
}

const Title = ({ title, titleSize, subTitle = null, marginTop = null, style }) => {
  return ([
    <p key="title" style={Object.assign(titleStyle(titleSize, marginTop), style)}>{title}</p>,
    subTitle && <span key="subtitle" style={subtitleStyle}>{subTitle} </span>
  ])
}

export default Title
