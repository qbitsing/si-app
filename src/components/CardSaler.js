import React from 'react'
import {Text, Card, CardItem, H3} from 'native-base'
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import {Poppins, PoppinsMedium, PoppinsThin, PoppinsBold} from '../utils/Fonts'
import LinearGradient from 'react-native-linear-gradient'

function CardSaler(props) {
    const data = {}
    const source = {
        uri: 'https://http2.mlstatic.com/celular-libre-iphone-x-64gb-entrega-inmediata-D_NQ_NP_796192-MCO26287680141_112017-F.jpg'
      }
    return (
      <View>
        <TouchableOpacity>
          <Card>
            <CardItem cardBody>
              <View style={styles.body}>
                <View>
                  <Image style={styles.image} source={source} />
                  <View style={styles.contentGradient}>
                    <Text style={styles.state}>ACTIVA</Text>
                  </View>
                </View>
                <View style={styles.info}>
                  <View>
                    <Text note style={styles.category}>Subcategoría > {data.brand || 'brand'}</Text>
                    <Text note style={styles.description}>{data.description || 'Lorem ipsum dolor sit amet consectetur adipiscing elit, senectus turpis volutpat.'}</Text>
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.value}>$1'800.000</Text>
                    <Text style={styles.value}>nmarias</Text>
                  </View>
                  <Text note style={{fontFamily: PoppinsThin}}>Cierra en 2h</Text>
                </View>
              </View>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    state: {
      fontFamily: PoppinsBold,
      color: 'rgba(255,255,255,.7)'
    },
    contentGradient: {
      position: 'absolute',
      bottom: 0,
      flex: 1,
      left:0,
      right: 0,
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,.7)'
    },
    gradient: {
      height: 60,
      bottom: 0,
      left: 0,
      right: 0,
      position: 'absolute'
    },
    image: {
      flex: 1,
      width: 150,
      height: 200
    },
    description: {
      fontFamily: PoppinsThin
    },
    category: {
      fontFamily: Poppins
    },
    value: {
      fontFamily: PoppinsMedium
    },
    body: {
      flex: 1,
      paddingHorizontal: 5,
      flexDirection: 'row'
    },
    info: {
      flex: 1,
      paddingLeft: 10,
      paddingBottom: 10
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

export default CardSaler
