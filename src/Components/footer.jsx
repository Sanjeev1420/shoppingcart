import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id='footerCnt'>
        <footer className='bg-body-tertiary text-center text-lg-start'>
          <div
            className='text-center p-3'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2022 Copyright:
            <a className='text-body' href='#'>
              shopeasy.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
