import {StyleSheet} from "react-native";

const Estilos = StyleSheet.create({
    paragrafo: {
        color: "yellow",
        textAlign:"center",
        textDecorationColor: "yellow",
        fontSize:50,
        textShadowColor: "red",
        textShadowRadius: 1,
        margin: 10
      },
      container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        //paddingTop: StatusBar.currentHeight,
        backgroundColor: "green",
        padding: 20}
});

export default Estilos;