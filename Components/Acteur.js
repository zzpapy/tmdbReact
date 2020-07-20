// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { getImageFromApi, getActor } from '../API/TMDBApi'
import FilmItem from './FilmItem'
import moment from 'moment'

class Acteur extends React.Component {

    constructor(props) {
       
        super(props)
        this.state = {
          actor: undefined, // Pour l'instant on n'a pas les infos du film, on initialise donc le film à undefined.
          isLoading: true // A l'ouverture de la vue, on affiche le chargement, le temps de récupérer le détail du film
        }
        this._displayDetailForFilm = this._displayDetailForFilm.bind(this)
    }
    
    componentDidMount(){
        getActor(this.props.route.params.actorId).then(data => {
          this.setState({
            actor: data,
            isLoading: false
          })
        })        
    }
    
    // shouldComponentUpdate(){
    //     // console.log(this.props.route.params.idFilm,"tete")
    //     getActor(this.props.route.params.actorId).then(data => {
    //         this.setState({
    //           actor: data,
    //           isLoading: false
    //         })
    //     })    
    //     return true
    
    //   }
      shouldComponentUpdate(nextProps,nextState){
        // console.log(this.props.route.params.idFilm,"tete")
        if(this.props.route.params.idFilm === nextProps.route.params.idFilm){
          return true
        }
        else{
            getActor(this.props.route.params.actorId).then(data => {
                this.setState({
                  actor: data,
                  isLoading: false
                })
            })    
          return true
        }
    
      }
      
    _displayDetailForFilm = (idFilm) => {
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
      }
      ListViewItemSeparator = () => {
        return (
          //List Item separator View
          <View
            style={{ height: 0.5, width: '100%', backgroundColor: '#606070' }}
          />
        );
      };
    headingList = () => {
        const actor = this.state.actor
        return (
            <View style={{flex:1, flexDirection:'row', width: '100%', height: 'auto',backgroundColor: 'white'}}>
                    <View >
                        <Text>{ actor.name }</Text>
                        <Image
                                style={styles.image}
                                source={{uri: getImageFromApi(actor.profile_path)}}
                            />
                        <Text>{moment(actor.birthday).format('DD-MM-YYYY')}</Text>
                        <Text>Nombres de film : {actor.movie_credits.cast.length}</Text>
                    </View>
                    <View >
                        <Text>{actor.biography}</Text>
                    </View>                   
            </View>
        )
    }
   
    
    _affichActor(){
        const actor = this.state.actor
        if(actor !== undefined){
            return (  <View> 
                    <FlatList 
                        ListHeaderComponent= {this.headingList}
                        ItemSeparatorComponent={this.ListViewItemSeparator}
                        data={actor.movie_credits.cast}
                        extraData={this.props.favoritesFilm}
                        // stickyHeaderIndices={[0]}
                        // On utilise la prop extraData pour indiquer à notre FlatList que d’autres données doivent être prises en compte si on lui demande de se re-rendre
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) =>
                            <FilmItem
                            film={item}
                            // Ajout d'une props isFilmFavorite pour indiquer à l'item d'afficher un 🖤 ou non
                            // isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
                            displayDetailForFilm={this._displayDetailForFilm}
                            />
                        }
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            if (this.page < this.totalPages) { // On vérifie également qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
                                this._loadFilms()
                            }
                        }}
                    />
                    </View>
              
            
            )
        }
    }
    render() {
        return (
                <View>
                    {this._affichActor()}
                </View>
        )
    }
}

const styles = StyleSheet.create({
   
    image: {
      width: 120,
      height: 180,
      margin: 5
    }
})

export default Acteur