import React from 'react';
import {View, Image, Text} from 'react-native';
import {DashStyle} from '../../Features/Dashboard/style';
import Dashboard from '../../Features/Dashboard/Dashboard';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Film = (props) => {
  return (
    <View style={{marginHorizontal: 8}}>
      <TouchableOpacity onPress={props.onTap}>
        <Image
          style={props.full ? DashStyle.imgFull : DashStyle.img}
          source={require('../../Assets/Images/mrbean.jpg')}
        />
        <Text>{props.movie.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Film;
