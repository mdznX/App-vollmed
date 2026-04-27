import { Pressable, StyleSheet, Text } from "react-native";

// Declaração das constantes para estilização
const BG_BUTTON = "#00213D"; 
const TEXT_PRIMARY = "#FFFFFF";

// Exportação do componente de reuso
export default function ButtonForm({ textButton}) {
    return (
        <Pressable style={styles.button}>
            <Text  style={styles.title}>
              
                { textButton ? textButton : "Não Informado"}
                
            </Text>
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: BG_BUTTON,
        color: TEXT_PRIMARY,
        borderRadius:5,
        alignItems:"center",
        marginHorizontal:50,
    },
    title: {
        color: TEXT_PRIMARY,
        marginVertical: 2,
        Textalign:"center",
        paddingVertical: 4,
    }

})

