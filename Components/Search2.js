// Components/Search.js
import React from 'react'
import { StyleSheet, FlatList, View, TextInput, Button, ActivityIndicator } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

// Helpers/filmsData.js

const films = [
    {
        id: 181808,
        vote_average: 7.2,
        title: "Star Wars VIII - Les derniers Jedi",
        poster_path: "",
        original_title: "Star Wars: The Last Jedi",
        overview: "Nouvel épisode de la saga. Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de choquantes révélations sur le passé…",
        release_date: "2017-12-13"
    },
    {
        id: 181809,
        vote_average: 8.1,
        title: "La Guerre des étoiles",
        poster_path: "",
        original_title: "Star Wars",
        overview: "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l’Étoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au cœur des montagnes désertiques de Tatooine...",
        release_date: "1977-05-25"
    }
]



class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
        this.state = {
            films: [],
            isLoding: false
        }
    }
    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size="large" color="#0000ff" />
              {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
            </View>
          )
        }
      }
    _loadFilms() {
        this.setState({ isLoding: true })
        if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
                this.setState({
                    films: data.results

                   , isLoding: false
                })
            })
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
    }

    render() {
        console.log("RENDER")
        return (
            <View style={styles.main_container}>
               
                
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._loadFilms()}

                />
                <Button title='Rechercher' onPress={() => this._loadFilms()} />

                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
})

export default Search