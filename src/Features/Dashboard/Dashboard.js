import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {DashStyle} from './style';
import {ScrollView} from 'react-native-gesture-handler';
import Film from '../../Assets/Poster/poster';
import axios from 'axios';
import * as Source from '../../Utility/source';
// import Navigation from '../Shared/Navigation';

const Stack = createStackNavigator();

export default function Dashboard(props) {
  const [topRatedMov, setTopRatedMov] = useState([]);

  const seeDetail = (id) => {
    props.navigation.navigate('Detail', id);
  };
  const movieList = async () => {
    const respond = await axios
      .get(Source.movdb + Source.topRated + Source.mykey)
      .then((result) => result.data)
      .catch((err) => {
        console.log(err);
        return null;
      });
    if (respond) {
      setTopRatedMov(respond.results);
    } else {
      console.log('Failed to load');
    }
  };

  useEffect(() => {
    movieList();
  }, []);

  return (
    <ScrollView>
      <Text>Top Rated Movies</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        data={topRatedMov}
        renderItem={({item}) => {
          return (
            <Film movie={item} full={false} onTap={() => seeDetail(item.id)} />
          );
        }}
      />
      <Text>Popular Movies</Text>
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item) => item.id.toString()}
        data={topRatedMov}
        renderItem={({item}) => {
          return (
            <Film movie={item} full={true} onTap={() => seeDetail(item.id)} />
          );
        }}
      />
    </ScrollView>
  );
}

// <View>
//   <Text
//     style={{
//       fontSize: 40,
//       backgroundColor: 'red',
//       color: 'whitesmoke',
//       alignSelf: 'center',
//       marginBottom: 10,
//       borderRadius: 5,
//     }}>
//     {' '}
//     RNFlix{' '}
//   </Text>
//   <ScrollView>
//     <Text>Popular Movies</Text>
//     <ScrollView
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       style={DashStyle.popMov}>
//       <Film movie={{title: 'Johnny English'}} onTap={seeDetail} />
//       <TouchableOpacity onPress={seeDetail}>
//         <Image style={DashStyle.img} source={props.film} />
//         <Text> {props.title}</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={seeDetail}>
//         <Image
//           style={DashStyle.img}
//           source={require('../../Assets/Images/mrbean.jpg')}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={seeDetail}>
//         <Image
//           style={DashStyle.img}
//           source={require('../../Assets/Images/mrbean.jpg')}
//         />
//       </TouchableOpacity>
//     </ScrollView>
//     <Text>New Release</Text>
//     <View style={DashStyle.popMov}>
//       <TouchableOpacity onPress={seeDetail}>
//         <Image
//           style={DashStyle.img}
//           source={require('../../Assets/Images/mrbean.jpg')}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={seeDetail}>
//         <Image
//           style={DashStyle.img}
//           source={require('../../Assets/Images/mrbean.jpg')}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={seeDetail}>
//         <Image
//           style={DashStyle.img}
//           source={require('../../Assets/Images/mrbean.jpg')}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={seeDetail}>
//         <Image
//           style={DashStyle.img}
//           source={require('../../Assets/Images/mrbean.jpg')}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={seeDetail}>
//         <Image
//           style={DashStyle.img}
//           source={require('../../Assets/Images/mrbean.jpg')}
//         />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={seeDetail}>
//         <Image
//           style={DashStyle.img}
//           source={require('../../Assets/Images/mrbean.jpg')}
//         />
//       </TouchableOpacity>
//     </View>
//   </ScrollView>
// </View>
