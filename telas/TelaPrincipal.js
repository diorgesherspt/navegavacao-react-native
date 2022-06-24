import react from "react";
import {View,Text,Button,TextInput} from "react-native";
import Estilos from "../estilos/Estilos"
const TelaPrincipal = ({ navigation }) => {
    return(
<View style={Estilos.container}>
<Text style={Estilos.paragrafo}>Tela Principal</Text>
<Text>Teste</Text>

<Button title="Aperte aqui" onPress={() =>
       navigation.navigate('Dois', { name: 'Dois' })
      } />
</View>
    );
};

export default TelaPrincipal;