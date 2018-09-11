import React, { Component } from 'react'
import {StyleSheet, View, RefreshControl} from 'react-native'
import {
  Container,
  Content,
  Icon
} from 'native-base'
import {connect} from 'react-redux'
import getSaleQuery from '../../utils/queries/getAllSales'
import CardComponent from './../../components/Card'
import CategoriesHeader from './../../components/CategoriesHeader'
import PTRView from 'react-native-pull-to-refresh'

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
    const commit = {
      payload: data,
      type: 'SET_ACTIVE_DETAIL'
    }
    this.props.dispatch(commit)
    this.props.navigation.navigate('SaleDetail')
  }
  _refresh = () => new Promise((resolve) => {
    console.log('is refreshing')
    setTimeout(()=>{resolve()}, 2000)
  })
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
        <PTRView onRefresh={this._refresh}>
          <CategoriesHeader/>
          <Content>
            <View style={styles.layout}>
              {
                this.props.sales.map((sale, index) => <CardComponent key={index} pressed={() => this.goToDetail(sale)} data={sale}/>)
              }
            </View>
          </Content>
        </PTRView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    minHeight: 300,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'flex-start',
    flexWrap: 'wrap'
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