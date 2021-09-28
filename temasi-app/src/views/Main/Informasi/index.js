import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import CardBerita from '../../../components/CardBerita';
import style from './style';

export default () => {
    return <>
        <ScrollView style={style.container}>
            <Text style={style.title}>Informasi</Text>
            <Text style={style.description}>Temukan informasi terpercaya mengenai COVID-19</Text>
            {Array(5).fill(0).map((_, index) => <CardBerita key={index} />)}
        </ScrollView>
    </>;
};
