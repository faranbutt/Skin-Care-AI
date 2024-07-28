import { StyleSheet } from "react-native";

export const homeStyles  = StyleSheet.create({
    container:{
        flex:1,
        fontFamily: 'Belleza_400Regular',
        
    },
    logoContainer:{
       
       width:'100%',
       height:'50%',
       flex:1,
       backgroundColor:'#52769F',
       justifyContent:"flex-end",
       alignItems:'flex-end',
       padding:10
    },
    formContainer:{
        width:'100%',
       height:'50%',
       flex:1,
       backgroundColor:'#52769F',
    },
    logo:{
        width:"100%",
        height:"90%"

        
    }
    ,
    titleContainer:{
        height:'20%',
    
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontFamily: 'Belleza_400Regular',
        fontSize:30,
    },
    emailContainer:{
        height:'80%',
        justifyContent:'center',
        alignItems:'center'
    },
    emaildivContainer:{
        width:'80%',
        height:'50%',
        borderBlockColor:"blue",
        borderWidth:2,
        borderCurve:'circular',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',

    },
    email:{
        fontFamily: 'Belleza_400Regular',
        marginTop:10
    },
    emailInput:{
        fontFamily: 'Belleza_400Regular',
        borderWidth:2,
        borderColor:'#03898F',
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:2,
        width:300,
    },
    
})