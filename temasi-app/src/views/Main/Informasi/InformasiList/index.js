import React, { useEffect, useState } from 'react';
import rssParser from 'react-native-rss-parser';
import { ActivityIndicator, ScrollView, Text } from 'react-native';
import CardBerita from '../../../../components/CardBerita';
import api from '../../../../providers/api';
import style from './style';
import { useNavigation } from '@react-navigation/core';

export default () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const navigation = useNavigation();

  const onNewsClick = url => {
    navigation.navigate('InformasiDetail', { url });
  };

  useEffect(() => {
    const fetchNewsData = async () => {
      const data = await api.get('https://covid19.go.id/feed/berita');
      const parsed = await rssParser.parse(data);
      setNews(parsed.items);
      setLoading(false);
    };

    fetchNewsData();
  }, []);

  return (
    <>
      <ScrollView style={style.container}>
        <Text style={style.title}>Informasi</Text>
        <Text style={style.description}>
          Temukan informasi terpercaya mengenai COVID-19
        </Text>
        {loading && <ActivityIndicator size="small" />}
        {news.map((item, index) => (
          <CardBerita
            key={index}
            onClick={() => onNewsClick(item.id)}
            title={item.title}
            timestamp={item.published}
            image={item.enclosures[0].url}
          />
        ))}
      </ScrollView>
    </>
  );
};
