import React from 'react'
import { Image, Text, View, StatusBar } from 'react-native'
import Carousel from 'react-native-looped-carousel'
import ButtonPrimary from '../../components/ButtonPrimary';
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
    return <>
        <StatusBar {...config.statusBarStyle} />
        <View style={style.landingView}>
            <Carousel {...config.carouselConfig}>
                {config.carouselItems.map(item => <LandingItem key={item.id} {...item} />)}
            </Carousel>
            <ButtonPrimary onClick={() => { }}>Lanjutkan</ButtonPrimary>
        </View>
    </>
}