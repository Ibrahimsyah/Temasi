import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import CardPermohonan from '../../../components/CardPermohonan';
import FABPermohonan from '../../../components/FABPermohonan';
import { TYPE_PLASMA } from '../../../configs/ItemTypes';
import style from './style';

const NotFoundImage = require('../../../assets/images/notFound.png');

const NotFound = () => {
    return <>
        <View style={style.notFoundContainer}>
            <Image source={NotFoundImage} style={style.notFoundImage} />
            <Text style={style.notFoundText}>
                Anda atau kerabat anda membutuhkan bantuan isolasi mandiri? Segera buat permohonan dan temukan orang baik yang akan membantu anda
            </Text>
        </View>
    </>;
};

export default () => {
    const [data, setData] = useState(Array(10).fill(0));
    return <>
        <ScrollView style={style.container} contentContainerStyle={style.contentContainer}>
            <Text style={style.title}>Permohonan Anda</Text>
            {!data.length ? <NotFound /> : data.map((_, index) => (
                <CardPermohonan type={TYPE_PLASMA} key={index} />
            ))}
        </ScrollView>
        <FABPermohonan />
    </>;
};
