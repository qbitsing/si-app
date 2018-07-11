import React, {Component} from 'react'
import http from '../utils/http'
import {Text} from 'native-base'

class SaleDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
    this.getData()
  }

  async getData() {
    const saleId = this.props.navigation.getParam('saleId', 0)
    // MAKE REQUEST
    let data = {
      photos: [
        'https://store.storeimages.cdn-apple.com/4666/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-2017?wid=305&hei=358&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1515602510472',
        'https://i.kinja-img.com/gawker-media/image/upload/s--FPy3RYSo--/c_scale,f_auto,fl_progressive,q_80,w_800/cur9iivisdrebdoigjna.jpg',
        'https://icdn9.digitaltrends.com/image/apple-iphone-x-17-1500x1000.jpg',
        'https://www.ordenadorpolitico.com/wp-content/uploads/2018/05/iphone-x-54.jpg'
      ],
      quantity: 3,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ducimus ad quidem, ullam exercitationem atque itaque aliquam, praesentium beatae consequuntur nisi totam suscipit repellendus a? Laudantium accusamus',
      timeLeft: '4h',
      bids: [
        {
          user: 'narias',
          values: [
            { value: 1800000, date: '5 min' },
            { value: 2000000, date: '60 min' }
          ]
        },
        {
          user: 'appleco',
          values: [
            { value: 1820000, date: '20 min' }
          ]
        },
        {
          user: 'otherman',
          values: [
            { value: 1920000, date: '50 min' },
            { value: 2100000, date: '82 min' }
          ]
        }
      ]
    }
    this.setState({
      data
    })
  }

  render() {
    return <Text>Hola</Text>
  }
}

export default SaleDetail
