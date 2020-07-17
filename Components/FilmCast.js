// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity,FlatList } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import ActorDetail from './ActorDetail'

class FilmCast extends React.Component {
    _displayDetailForActor = (actorId) => {
        let actor = getImageFromApi(actorId)
        this.props.navigation.navigate("Acteur", { actorId: actorId })
        // this.props.navigation.pop()
      }
  render() {

    return (
            <View>
                <FlatList
                        numColumns={3}
                        data={this.props.route.params.cast.cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (          
                            <ActorDetail actor={item} displayDetailForActor={this._displayDetailForActor} />
                                    
                        )}
                            
                    />
            </View>
    )
  }
}


export default FilmCast