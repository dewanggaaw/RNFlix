import React from 'react';
import Dashboard from '../../Features/Dashboard/Dashboard';

const film = (props) => {
  return (
    <View>
      <Poster
        title="Mr. Bean The Movie"
        poster={require('../../Assets/Images/mrbean.jpg')}
      />
    </View>
  );
};
