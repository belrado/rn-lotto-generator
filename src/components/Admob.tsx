import React from 'react';
import {BannerAd, BannerAdSize, TestIds} from "react-native-google-mobile-ads";
import {Platform, StyleSheet, View} from "react-native";

const unitID = Platform.select({
    ios: 'ca-app-pub-7870643659439302~3078316171',
    android: 'ca-app-pub-7870643659439302~4918576107',
}) || '';

const adUnitId = __DEV__ ? TestIds.BANNER:unitID;

export default function Admob() {
    console.log('unitID', unitID)
    return (
        <View style={styles.adMob}>
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    adMob: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
