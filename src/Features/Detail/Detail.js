import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import * as Source from '../../Utility/source';

export default function Detail(props) {
  const [movDetail, setMovDetail] = useState({});
  const getMovDetail = async () => {
    const respond = await axios
      .get(Source.movdb + Source.detailMov(props.route.params) + Source.mykey)
      .then((result) => result.data)
      .catch((err) => {
        console.log(err);
        return null;
      });
    console.log(respond);
    if (respond) {
      setMovDetail(respond);
    } else {
      console.log('Failed to load');
    }
  };

  useEffect(() => {
    getMovDetail();
  }, []);
  return (
    <View>
      <Text>{movDetail.overview}</Text>
    </View>
  );
}
