import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {DashStyle} from './style';
import {ScrollView} from 'react-native-gesture-handler';
import Poster from '../../Assets/Poster/poster';
// import Navigation from '../Shared/Navigation';

const Stack = createStackNavigator();

export default function Dashboard(props, Poster) {
  const seeDetail = () => {
    props.navigation.navigate('Detail');
  };
  // const movieList = async () => {
  //   const respond = await axios
  //     .get(Source.movdb + Source.latestMov + Source.mykey)
  //     .then((result) => result.data)
  //     .catch((err) => {
  //       console.log(err);
  //       return null;
  //     });
  //   if (respond) {
  //   } else {
  //     console.log('Failed to load');
  //   }
  // };

  // useEffect(() => {
  //   movieList();
  // }, []);

  return (
    <View>
      <Text
        style={{
          fontSize: 40,
          backgroundColor: 'red',
          color: 'whitesmoke',
          alignSelf: 'center',
          marginBottom: 10,
          borderRadius: 5,
        }}>
        {' '}
        RNFlix{' '}
      </Text>
      <ScrollView>
        <Text>Popular Movies</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={DashStyle.popMov}>
          <TouchableOpacity onPress={seeDetail}>
            <Image style={DashStyle.img} source={props.film} />
            <Text> {props.title}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={seeDetail}>
            <Image
              style={DashStyle.img}
              source={require('../../Assets/Images/mrbean.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={seeDetail}>
            <Image
              style={DashStyle.img}
              source={require('../../Assets/Images/mrbean.jpg')}
            />
          </TouchableOpacity>
        </ScrollView>
        <Text>New Release</Text>
        <View style={DashStyle.popMov}>
          <TouchableOpacity onPress={seeDetail}>
            <Image
              style={DashStyle.img}
              source={require('../../Assets/Images/mrbean.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={seeDetail}>
            <Image
              style={DashStyle.img}
              source={require('../../Assets/Images/mrbean.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={seeDetail}>
            <Image
              style={DashStyle.img}
              source={require('../../Assets/Images/mrbean.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={seeDetail}>
            <Image
              style={DashStyle.img}
              source={require('../../Assets/Images/mrbean.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={seeDetail}>
            <Image
              style={DashStyle.img}
              source={require('../../Assets/Images/mrbean.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={seeDetail}>
            <Image
              style={DashStyle.img}
              source={require('../../Assets/Images/mrbean.jpg')}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
