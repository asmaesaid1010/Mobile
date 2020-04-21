// Components/Search.js
import React from 'react'
import { StyleSheet, FlatList, View, TextInput, Button, Text } from 'react-native'
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


class Search1 extends React.Component {



    constructor(props) {
        super(props)
        this._films = []
    }

    _loadFilms() {
        getFilmsFromApiWithSearchedText("star").then(data => {
            this._films = data.results
            this.forceUpdate()
        })
    }



    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film' />
                <Button title='Rechercher' onPress={() => this._loadFilms()} />
                <FlatList
                    data={this._films}
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
        marginBottom: 10,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search1