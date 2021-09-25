import { useNavigation, StackActions } from '@react-navigation/native';
import React from 'react'
import { Image, Text, View, StatusBar } from 'react-native'
import Carousel from 'react-native-looped-carousel'
import ButtonPrimary from '../../components/ButtonPrimary';
import { APP_FIRST_USE } from '../../configs/storage';
import storage from '../../providers/storage';
import config from './index.config'
import style from './style'

const LandingItem = props => {
    const { image, title, description } = props
    return <>
        <View style={style.landingItemContainer}>
            <Image source={image} style={style.landingImage} />
            <Text style={style.landingTitle}>{title}</Text>
            <Text style={style.landingDesc}>{description}</Text>
        </View>
    </>
}

export default () => {
    const navigation = useNavigation()

    const onButtonClick = () => {
        storage.setData(APP_FIRST_USE, false)
        const navAction = StackActions.replace('HomeScreen')
        navigation.dispatch(navAction)
    }

    return <>
        <StatusBar {...config.statusBarStyle} />
        <View style={style.landingView}>
            <Carousel {...config.carouselConfig}>
                {config.carouselItems.map(item => <LandingItem key={item.id} {...item} />)}
            </Carousel>
            <ButtonPrimary onClick={onButtonClick}>Lanjutkan</ButtonPrimary>
        </View>
    </>
}