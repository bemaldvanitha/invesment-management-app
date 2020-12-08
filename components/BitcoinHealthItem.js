import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const colors = ['#00E685','#73EFBB','#BFEFDB','#FFAC70','#FF4D4D'];

const BitcoinHealthItem = (props) => {
    const itemRank = props.fcasRate;
    let itemColor;

    if(itemRank === 'Superb'){
        itemColor = colors[0];
    }else if(itemRank === 'Attractive'){
        itemColor = colors[1];
    }else if(itemRank === 'Basic'){
        itemColor = colors[2];
    }else if(itemRank === 'Caution'){
        itemColor = colors[3];
    }else{
        itemColor = colors[4];
    }

   return(
       <View style={{...styles.box,backgroundColor: itemColor}}>
           <View style={styles.main}>
               <Text style={styles.headers}>{props.name}</Text>
               <Text style={styles.headers}>{props.symbol}</Text>
           </View>
           <View style={styles.scoresBox}>
               <View style={styles.row}>
                   <Text style={styles.label}>FCAS Score    </Text>
                   <Text style={styles.detailText}>{props.fcasScore}</Text>
               </View>
               <View style={styles.row}>
                   <Text style={styles.label}>Dev Score    </Text>
                   <Text style={styles.detailText}>{props.devScore}</Text>
               </View>
               <View style={styles.row}>
                   <Text style={styles.label}>Market Score    </Text>
                   <Text style={styles.detailText}>{props.marketScore}</Text>
               </View>
           </View>
       </View>
   )
}

const styles = StyleSheet.create({
    box: {
        marginVertical: 10,
        paddingVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        shadowRadius: 5,
        shadowOpacity: 0.26,
        shadowColor: 'black',
        shadowOffset: {
            width: 2,
            height: 0
        },
        elevation: 6
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10
    },
    scoresBox: {
        alignItems: 'center'
    },
    headers: {
        fontFamily: 'raleway-bold',
        fontSize: 16
    },
    detailText: {
        fontFamily: 'nunito',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    label: {
        fontFamily: 'nunito-light'
    }
});

export default BitcoinHealthItem;