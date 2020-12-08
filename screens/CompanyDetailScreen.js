import React from 'react';
import {View,StyleSheet,Text,ScrollView,Image,Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

const CompanyDetailScreen = (props) => {
    const comId = props.navigation.getParam('comId');
    const company = useSelector(store => store.stocks.comDetail).find(com => com.id === comId);

    return(
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.imageContainer}>
                    <Image resizeMethod='resize' style={styles.image} source={{uri: company.imageUrl}}/>
                </View>
                <View style={styles.shortInfoContainer}>
                    <Text style={styles.shortInfoText}>Stock Exchange :- {company.exchange}</Text>
                    <Text style={styles.shortInfoText}>Assert Type :- {company.assertType}</Text>
                    <Text style={styles.shortInfoText}>Country :- {company.country}</Text>
                    <Text style={styles.shortInfoText}>Industry :- {company.industry}</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.desTitle}>detail</Text>
                    <Text style={styles.desText}>{company.description}</Text>
                </View>
            </View>
        </ScrollView>
    )
};

CompanyDetailScreen.navigationOptions = navData => {
    const comName = navData.navigation.getParam('comName');
    return{
        headerTitle: comName
    }
}

const styles = StyleSheet.create({
    screen: {

    },
    detailContainer: {
        alignItems: 'center',
        paddingVertical: 20
    },
    shortInfoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    shortInfoText: {
        fontFamily: 'nunito-light',
        fontSize: 16
    },
    desTitle: {
        fontFamily: 'raleway',
        fontSize: 22
    },
    desText: {
        textAlign: 'center',
        fontFamily: 'raleway-italic'
    },
    imageContainer: {

    },
    image: {
        width: '100%',
        height: Dimensions.get('screen').height * 0.4
    }
});

export default CompanyDetailScreen;