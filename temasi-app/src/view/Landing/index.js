import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import Carousel from 'react-native-looped-carousel'
import ButtonPrimary from '../../component/ButtonPrimary';
import config from './index.config'
import style from './style'

const { width, height } = Dimensions.get('window');

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
        <View style={style.landingView}>
            <Carousel {...config.carouselConfig}>
                {config.carouselItems.map(item => <LandingItem key={item.id} {...item} />)}
            </Carousel>
            <ButtonPrimary onClick={() => { }}>Lanjutkan</ButtonPrimary>
        </View>
    </>
}