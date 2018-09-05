import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import {
  Container,
  Content,
  Icon
} from 'native-base'
import {connect} from 'react-redux'
import getSaleQuery from '../../utils/queries/getAllSales'
import CardComponent from './../../components/Card'
import CategoriesHeader from './../../components/CategoriesHeader'

class Home extends Component {
  static navigationOptions = () => {
    return {
      title: 'Inicio',
      tabBarIcon: ({ tintColor}) => {
        return <Icon name="home" style={{color: tintColor}}/>
      }
    }
  }
  goToDetail = (data) => {
    this.props.navigation.navigate('SaleDetail')
  }
  async componentDidMount () {
    let data = await getSaleQuery()
    data = await data.json()
    console.log(data.data.sales)
    this.props.dispatch({
      type: 'SET_SALES',
      payload: data.data.sales
    })
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CategoriesHeader/>
          <View style={styles.layout}>
            {
              this.props.sales.map((sale, index) => <CardComponent key={index} pressed={() => this.goToDetail(sale)} data={sale}/>)
            }
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

function mapStateToProps(state, props) {
  return {
    ...props,
    sales: state.app.sales
  }
}

export default connect(mapStateToProps)(Home)