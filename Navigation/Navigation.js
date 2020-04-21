// Navigation/Navigation.js
import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Search from '../Components/Search'
import FilmDetail from "../Components/FilmDetail";
import FilmItem from "../Components/FilmItem";
import Test from "../Components/Test";
import Favorites from '../Components/Favorites';

const Stack = createStackNavigator();
const StackF = createStackNavigator();

function StackSearch() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Search"
                component={Search}
                options={{ title: 'Search' }}
            />

            <Stack.Screen
                name="FilmItem"
                component={FilmItem}
                options={{ title: 'FilmItem' }}
            />
            <Stack.Screen
                name="FilmDetail"
                component={FilmDetail}
                options={{ title: 'FilmDetail' }}
            />
            <Stack.Screen
                name="Test"
                component={Test}
                options={{ title: 'Test' }}
            />
        </Stack.Navigator>

    );
}
function StackFavorites() {
    return (

        <StackF.Navigator>
            <StackF.Screen
                name="Favorites"
                component={Favorites}
                options={{ title: 'Favorites' }}
            />

            <StackF.Screen
                name="FilmDetail"
                component={FilmDetail}
                options={{ title: 'FilmDetail' }}
            />
            
        </StackF.Navigator>

    );
}


const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {

                        if (route.name === 'Search') {
                            return <Image
                                source={require('../Images/ic_search.png')}
                                style={styles.icon} /> // On applique un style pour les redimensionner comme il faut

                        } else if (route.name === 'Favorites') {
                            return <Image
                                source={require('../Images/ic_favorite.png')}
                                style={styles.icon} /> // On applique un style pour les redimensionner comme il faut

                        }


                    },
                })}
                tabBarOptions={{
                    activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
                    inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
                    showLabel: false, // On masque les titres
                    showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
                }}
            >
                <Tab.Screen name="Search" component={StackSearch}    />
                <Tab.Screen name="Favorites" component={StackFavorites}   />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})
//export default MyStack;
export default App;
