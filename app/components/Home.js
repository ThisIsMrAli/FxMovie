// @flow
import ffmpeg from 'fluent-ffmpeg';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  componentDidMount() {
    // ffmpeg('C:/Users/Mr.Ali/Downloads/Video/bird.avi')
    //   .videoCodec('libx264')
    //   .audioCodec('libmp3lame')
    //   .size('320x240')
    //   .on('error', err => {
    //     console.log(err);
    //   })
    //   .on('end', () => {
    //     console.log('Processing finished !');
    //   })
    //   .save('C:/Users/Mr.Ali/Downloads/Video/bird.mp4');

    ffmpeg()
      .input('C:/Users/Mr.Ali/Downloads/Video/bird.avi')
      .input('C:/Users/Mr.Ali/Downloads/Video/flame.avi')
      .mergeToFile('C:/Users/Mr.Ali/Downloads/Video/bird.avi');
  }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
