import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'start',
      },
      title:{
        fontWeight: "bold",
        fontSize:40,
        color:"#000000",
        marginBottom: 40,
      },
      inputView:{
        width:"80%",
        backgroundColor:"#E6E6E6",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:'black'
      },
      text:{
        fontSize:20,
      },
      Btn:{
        width:"20%",
        backgroundColor:"#50A8DE",
        borderRadius:25,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:30
    },
});