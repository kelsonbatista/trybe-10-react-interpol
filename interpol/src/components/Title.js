import React from 'react';

class Title extends React.Component {

  render() {
    console.log(this.props);
    const {title} = this.props;
    return <h1 className='titulo'>{title}</h1>
  }
}

export default Title;