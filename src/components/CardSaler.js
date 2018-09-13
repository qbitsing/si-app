import React from 'react'
import {Text, Card, CardItem, H3} from 'native-base'
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native'

function CardSaler () {
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
                <Image style={styles.image} source={source}/>
              </View>
              <View style={styles.info}>
                  <View>
                    <Text note>Subcategoría > {data.brand || 'brand'}</Text>
                    <Text note>{data.description || 'Lorem ipsum dolor sit amet consectetur adipiscing elit, senectus turpis volutpat.'}</Text>
                  </View>
                  <View style={styles.content}>
                    <H3>$1'800.000</H3>
                    <Text>nmarias</Text>
                  </View>
                  <Text note>Cierra en 2h</Text>
              </View>
            </View>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      width: 150,
      height: 200
    },
    body: {
      flex: 1,
      paddingHorizontal: 5,
      flexDirection: 'row'
    },
    info: {
      flex: 1,
      paddingLeft: 10,
      paddingBottom: 10,
    },
    content: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

export default CardSaler