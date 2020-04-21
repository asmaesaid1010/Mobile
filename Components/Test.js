// Components/FilmItem.js

import React from 'react'
import { View, Text } from 'react-native'

class Test extends React.Component {

  constructor() {
    super();
  } 
  render() {
    const { postId, otherParam } = this.props.route.params;

    //  console.log(this.props)
    return (
      <View >


        <Text> hhhhhhhhhhhi is a test   </Text>

        <Text>Post id is: {postId}</Text>
        <Text>{otherParam}</Text>
      </View>
    )
  }
}

export default Test;