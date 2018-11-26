

import React, { Component } from 'react';

import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator, ImageBackground } from 'react-native';

import { StackNavigator } from 'react-navigation';



// Criando classe Login Activity.
class LoginActivity extends Component {

  // Configurando o título da atividade de login.
  static navigationOptions =
   {
      title: 'Login do aluno',
      headerStyle: {
        fontFamily: 'Merriweather-BoldItalic',
        backgroundColor: 'rgba(198, 40, 40,1.0)',
        fontWeight: 'bold',
      },
   };
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserEmail: '',
      UserPassword: ''
 
    }
 
  }
 
UserLoginFunction = () =>{
 
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 
 
fetch('http://192.168.1.6/ReactPHP/projetoCrudFinalBackend/LoginAluno.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email_aluno: UserEmail,
 
    senha_aluno: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

        // Se a mensagem de resposta do servidor for igual a Data Matched
       if(responseJson === 'Data Matched')
        {

      //Em seguida, abra a atividade Perfil e envie o email do usuário para a atividade do perfil.
           
            this.props.navigation.navigate('Segundo');

        }
        else{

          Alert.alert(responseJson);
        }

      }).catch((error) => {
        console.error(error);
      });
 
 
  }
/*
  limpaInput(){
    inputTeste.clear();
  }
 */
  render() {
    return (
      //parte de configuração da imagem de fundo

 <ImageBackground source={require('./imagens/ima_mario.jpg')}style={styles.container}>

      <View style={styles.tansparenciaConteiner}>
       
       {/* parte de layout do formulario */} 
        <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 7, color:'#130f40', paddingTop: 50,fontFamily:'Muli-Black',}}>Digite seu Login e Senha: </Text>
        <TextInput

          //Adicionando dicas na entrada de texto usando o marcador de posição.
          placeholder="Entre com o e-mail"
          ref={input => inputTeste = input }
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Fazendo o Under line transparente.
         // underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
       
 
        <TextInput
          
          //Adicionando dicas na entrada de texto usando o marcador de posição.
          placeholder="Entre com a senha"
          ref={input => inputTeste = input }
          onChangeText={UserPassword => this.setState({UserPassword})}
 
          // Tornar a linha inferior transparente.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
 
          secureTextEntry={true}
        />
          
        <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UserLoginFunction} >
          <Text style={styles.TextStyle}> CLIQUE AQUI PARA LOGAR </Text>
        </TouchableOpacity>
  
        {/* 
      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.limpaInput.bind(this)} >
            <Text style={styles.TextStyle}>LIMPAR </Text>
      </TouchableOpacity>
   */}
              
  </View>
</ImageBackground>   
    );
  }
} 

/*------------- Parte de inserir usuario / pagina 1-----------------*/
class MainActivity extends Component {

  static navigationOptions =
  {
     title: 'Tela inicial',
     
     headerStyle: {
      backgroundColor: 'rgba(198, 40, 40,1.0)',
      fontWeight: 'bold',
    },
    
  };

constructor(props) {

   super(props)

   this.state = {

     TextInput_Nome_Aluno: '',
     TextInput_Classe_Aluno: '',
     TextInput_Telefone_Aluno: '',
     TextInput_Email_Aluno: '',
     TextInput_Senha_Aluno: '',

   }

 }

  //função que insere um aluno noservidor
 InserirAlunoNoServidor = () =>{
        {/* responsavel por fazer a conexão com backend */}
      fetch('http://192.168.1.6/ReactPHP/projetoCrudFinalBackend/InserirAluno.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({  //espera o return de string

        nome_aluno : this.state.TextInput_Nome_Aluno,

        classe_aluno : this.state.TextInput_Classe_Aluno,

        telefone_aluno : this.state.TextInput_Telefone_Aluno,

        email_aluno: this.state.TextInput_Email_Aluno,

        senha_aluno: this.state.TextInput_Senha_Aluno

      })

      }).then((response) => response.json())
          .then((responseJson) => {

            // Mostrando a mensagem de resposta proveniente do servidor após a inserção de registros.
            Alert.alert(responseJson);

          }).catch((error) => {
            console.error(error);
          });

}

/*----------- Parte de paginação e lista de usuario pagina2-----------------*/

static navigationOptions =
{
   title: 'Cadastro do Aluno',

   headerStyle: {
    backgroundColor: 'rgba(198, 40, 40,1.0)',
    fontWeight: 'bold',
  },
 
};


 MostarlistaDeAlunosNoServidor = () =>
  {
    this.props.navigation.navigate('Terceiro'); //pagina 3.
    
  }
/*
  limpaInput(){
    this.inputTeste.clear();
  }
*/
 render() {
  const {goBack} = this.props.navigation;
   return (
     // parte referente ao layout da primeira tela.
<ImageBackground source={require('./imagens/ima_mario.jpg')}style={styles.container}>

<View style={styles.tansparenciaConteiner}>

         {/* parte de layout do formulario */} 
    <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 7, color:'#130f40', paddingTop: 50,}}> Registro do estudante: </Text>
 
       <TextInput
         
         placeholder="Insira o nome do aluno"
         ref={input => this.inputTeste = input }
         onChangeText={ TextInputValue => this.setState({ TextInput_Nome_Aluno : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

      <TextInput
         
         placeholder="Digite a turma do aluno"
         ref={input => this.inputTeste = input }
         onChangeText={ TextInputValue => this.setState({ TextInput_Classe_Aluno : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

      <TextInput
         
         placeholder="Digite o número de telefone do aluno"
         ref={input => this.inputTeste = input }
         onChangeText={ TextInputValue => this.setState({ TextInput_Telefone_Aluno : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

       <TextInput

         placeholder="Insira o email do aluno"
         ref={input => this.inputTeste = input }
         onChangeText={ TextInputValue => this.setState({ TextInput_Email_Aluno : TextInputValue }) }

         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

       <TextInput

        placeholder="Digite sua senha"
        ref={input => this.inputTeste = input }
        onChangeText={ TextInputValue => this.setState({ TextInput_Senha_Aluno : TextInputValue }) }

        underlineColorAndroid='transparent'

        style={styles.TextInputStyleClass}
      />

        {/* layout dos botões */}
      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InserirAlunoNoServidor} >

        <Text style={styles.TextStyle}> INSERIR O REGISTRO DO ALUNO AO SERVIDOR </Text>

      </TouchableOpacity>

      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.MostarlistaDeAlunosNoServidor} >

        <Text style={styles.TextStyle}> MOSTRAR TODOS OS REGISTROS DE ESTUDANTES </Text>

      </TouchableOpacity>
 {/* 
      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.limpaInput.bind(this)} >
            <Text style={styles.TextStyle}>LIMPAR </Text>
      </TouchableOpacity>
   */}
      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={ () => goBack(null)} >
            <Text style={styles.TextStyle}>Clique aqui para sair do Sistema </Text>
      </TouchableOpacity>

  </View>
</ImageBackground>          
   );
 }
}
/*----------- Parte de mostrar lista de usuario pagina2-----------------*/
  //criação da classe que lista os usuarios
class ListarAlunosActivity extends Component {

  constructor(props) { 

    super(props);

    this.state = {

      isLoading: true

    }
  }

  static navigationOptions =
  {
     title: 'Lista de alunos cadastrados',

     headerStyle: {
        backgroundColor: 'rgba(198, 40, 40,1.0)',
        fontWeight: 'bold',
      },

     
  };

  componentDidMount() {
          {/* responsavel por fazer a conexão com backend */}
       return fetch('http://192.168.1.6/ReactPHP/projetoCrudFinalBackend/ListarAluno.php')
         .then((response) => response.json())
         .then((responseJson) => {
           let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
           this.setState({
             isLoading: false,
             dataSource: ds.cloneWithRows(responseJson),
           }, function() {
             // Neste bloco você pode fazer algo com novo estado.
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }
      // busca os dados pelo id do usuario no banco e carrega todas as informações dele no formulario para atualizar.
     GetStudentIDFunction=(id,nome_aluno, classe_aluno, telefone_aluno, email_aluno, senha_aluno)=>{

          this.props.navigation.navigate('Quarto', { 

            ID : id,
            NOME : nome_aluno,
            CLASSE : classe_aluno,
            TELEFONE : telefone_aluno,
            EMAIL : email_aluno,
            SENHA: senha_aluno

          });

     }

     ListViewItemSeparator = () => {
       return (
         <View
           style={{
             height: 5,
             width: "100%",
             backgroundColor: "#00b894",
           }}
         />
       );
     }

     render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
   
      return (

<ImageBackground source={require('./imagens/ima_mario2.jpg')}style={styles.container}>

  <View style={styles.tansparenciaConteiner}>
   
        <View style={styles.MainContainer_For_Show_StudentList_Activity}>
   
          <ListView
   
            dataSource={this.state.dataSource}
   
            renderSeparator= {this.ListViewItemSeparator}
   
            renderRow={ (rowData) => <Text style={styles.rowViewContainer} 

                      onPress={this.GetStudentIDFunction.bind(
                        this, rowData.id,
                         rowData.nome_aluno, 
                         rowData.classe_aluno, 
                         rowData.telefone_aluno, 
                         rowData.email_aluno,
                         rowData.senha_aluno
                         )} > 

                      {rowData.nome_aluno} 
                      
                      </Text> }
   
          />
   
        </View>
  </View>
</ImageBackground> 
      );
    }

}

/*------------- Parte de editar usuario / pagina 3-----------------*/

    //criação da classe responsavel por editar usario.
class EditarAlunoActivity extends Component {
  
  constructor(props) {
    
       super(props)
    
       this.state = {
    
         TextInput_ID: '',
         TextInput_Nome_Aluno: '',
         TextInput_Classe_Aluno: '',
         TextInput_Telefone_Aluno: '',
         TextInput_Email_Aluno: '',
         TextInput_Senha_Aluno: '',
    
       }
    
     }

     componentDidMount(){

      // Detalhes do aluno recebido enviados da atividade anterior e definidos no estado.
      this.setState({ 
        TextInput_ID : this.props.navigation.state.params.ID,
        TextInput_Nome_Aluno: this.props.navigation.state.params.NOME,
        TextInput_Classe_Aluno: this.props.navigation.state.params.CLASSE,
        TextInput_Telefone_Aluno: this.props.navigation.state.params.TELEFONE,
        TextInput_Email_Aluno: this.props.navigation.state.params.EMAIL,
        TextInput_Senha_Aluno:
        this.props.navigation.state.params.SENHA,
      })

     }
  
    static navigationOptions =
    {
       title: 'Edição de registro',

       headerStyle: {
        backgroundColor: 'rgba(198, 40, 40,1.0)',
        fontWeight: 'bold',
      },
    };

    EditarRegistroAluno = () =>{
              {/* responsavel por fazer a conexão com backend */}
            fetch('http://192.168.1.6/ReactPHP/projetoCrudFinalBackend/EditarAluno.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
      
              id : this.state.TextInput_ID,

              nome_aluno : this.state.TextInput_Nome_Aluno,
      
              classe_aluno : this.state.TextInput_Classe_Aluno,
      
              telefone_aluno : this.state.TextInput_Telefone_Aluno,
      
              email_aluno: this.state. TextInput_Email_Aluno,

              senha_aluno: this.state.TextInput_Senha_Aluno
      
            })
      
            }).then((response) => response.json())
                .then((responseJson) => {
      
                  // Mostrando a mensagem de resposta proveniente dos registros de atualização do servidor.
                  Alert.alert(responseJson);
      
                }).catch((error) => {
                  console.error(error);
                });
      
      }


    DeletarRegistroAluno = () =>{
        
          fetch('http://192.168.1.6/ReactPHP/projetoCrudFinalBackend/DeletarAluno.php', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
        
            id : this.state.TextInput_ID
        
          })
        
          }).then((response) => response.json())
          .then((responseJson) => {
        
            // Mostrando a mensagem de resposta proveniente do servidor após a inserção de registros.
            Alert.alert(responseJson);
        
          }).catch((error) => {
             console.error(error);
          });

          this.props.navigation.navigate('Segundo');

      }
/*
      limpaInput(){
        this.inputTeste.clear();
      }
*/
        //Parte responsavel pelo layout Editar registro
    render() {
      const {goBack} = this.props.navigation;
      return (
     
        <ImageBackground source={require('./imagens/ima_mario.jpg')}style={styles.container}>

        <View style={styles.tansparenciaConteiner}>
   
           {/* parte de layout do formulario */} 
        <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 7, color:'#130f40', paddingTop: 50,}}> Editar Registro do aluno: </Text>
    
          <TextInput
            
            placeholder="Editar o nome do aluno"
            ref={input => this.inputTeste = input }
            value={this.state.TextInput_Nome_Aluno}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Nome_Aluno : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
         <TextInput
            
            placeholder="Editar a classe do aluno"
            ref={input => this.inputTeste = input }
            value={this.state.TextInput_Classe_Aluno}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Classe_Aluno : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
         <TextInput
            
            placeholder="Editar o telefone do aluno"
            ref={input => this.inputTeste = input }
            value={this.state.TextInput_Telefone_Aluno}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Telefone_Aluno : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
   
          <TextInput 
   
            placeholder="Editar o e-mail do aluno"
            ref={input => this.inputTeste = input }
            value={this.state.TextInput_Email_Aluno}
   
            onChangeText={ TextInputValue => this.setState({ TextInput_Email_Aluno : TextInputValue }) }
   
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />

          <TextInput

            placeholder="Editar a senha nova do Aluno"
            ref={input => this.inputTeste = input }
            value={this.state.TextInput_Senha_Aluno}

            onChangeText={ TextInputValue => this.setState({
              TextInput_Senha_Aluno: TextInputValue }) }

            underlineColorAndroid='transparent'

            style={styles.TextInputStyleClass}
          />

            {/* botão responsavel por fazer a chamada da classe Editar */}
         <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.EditarRegistroAluno} >
   
            <Text style={styles.TextStyle}> ATUALIZAR O REGISTRO DO ALUNO </Text>
   
         </TouchableOpacity>
           {/* botão responsavel por fazer a chamada da classe Deletar */}
         <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeletarRegistroAluno} >
   
            <Text style={styles.TextStyle}> DELETAR O REGISTRO ATUAL </Text>
   
         </TouchableOpacity>
    
         {/* 
      <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.limpaInput.bind(this)} >
            <Text style={styles.TextStyle}>LIMPAR </Text>
      </TouchableOpacity>
   */}
        <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={ () => goBack(null)} >
            <Text style={styles.TextStyle}>Clique aqui para voltar a lista </Text>
        </TouchableOpacity>
   
  </View>
</ImageBackground>           
      );
    }

}
    //Parte responsavel pela paginação.
export default MyNewProject = StackNavigator(

  {

    Primeiro: {screen:LoginActivity},
   
    Segundo: { screen: MainActivity },

    Terceiro: { screen: ListarAlunosActivity },

    Quarto: { screen: EditarAlunoActivity }
    

  });

const styles = StyleSheet.create({
container: {
  flex: 1,
  width: '100%',
  height:'100%'
},
tansparenciaConteiner: {
  flex: 1,
  backgroundColor: 'rgba(47,163,218, .4)'
},

  MainContainer_For_Show_StudentList_Activity :{
    
    flex:1,
    paddingTop:  20,
    marginLeft: 10,
    marginRight: 5
    
    },

  TextInputStyleClass: {

  textAlign: 'center',
  width: '90%',
  marginBottom: 7,
  marginLeft: 10,
  height: 40,
  borderWidth: 1,
  borderColor: 'rgba(198, 40, 40,1.0)',
  borderRadius: 5 ,

  },

  TouchableOpacityStyle: {

    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    marginLeft: 10,
    width: '90%',
    backgroundColor: '#00BCD4'

  },

  TextStyle:{
    color:'#fff',
    textAlign:'center',
  },

  rowViewContainer: {
    fontSize: 23,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'rgba(198, 40, 40,1.0)'
  }

});