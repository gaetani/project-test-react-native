import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,  Form, Item, Input, Label } from 'native-base';
import Style from './style';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import { Actions } from 'react-native-router-flux';
import { doLogin } from '../../actions/login'

const validate = values => {
  const error = {};
  error.email = "";
  error.password = "";
  var ema = values.email;
  var pw = values.password;
  if (values.email === undefined) {
    ema = "";
  }
  if (values.password === undefined) {
    pw = "";
  }
  if (ema.length < 8 && ema !== "") {
    error.email = "too short";
  }
  if (!ema.includes("@") && ema !== "") {
    error.email = "@ not included";
  }
  if (pw.length > 12) {
    error.password = "max 11 characters";
  }
  if (pw.length < 5 && pw.length > 0) {
    error.password = "Weak";
  }
  return error;
};

class LoginPage extends Component {
  static propTypes = {
    doLogin: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.renderInput = this.renderInput.bind(this);
  }

  doLogin(name) {
    console.log(name);
    this.props.doLogin(name);
  }
  renderInput({
    input,
    label,
    type,
    meta: { touched, error, warning },
    inputProps
  }) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError}>
        <Icon active name={input.name === "email" ? "person" : "unlock"} />
        <Input
          placeholder={input.name === "email" ? "Email" : "Senha"}
          {...input}
        />
        {hasError
          ? <Item style={{ borderColor: "transparent" }}>
              <Icon active style={{ color: "red", marginTop: 5 }} name="bug" />
              <Text style={{ fontSize: 15, color: "red" }}>{error}</Text>
            </Item>
          : <Text />}
      </Item>
    );
  }

  render() {
    
    const { handleSubmit } = Actions.Home
    return (
      <Container style={Style.viewStyle}>
        <Content>
            <View>
              <Form onSubmit={handleSubmit}>
                <Image 
                    style={Style.image}
                    source={(require('../../../img/tree-with-thin-branches-covered-by-leaves.png'))}
                />
            
              <Field name="email" component={this.renderInput} />
              <Field name="password" component={this.renderInput} />
              <Button
                style={Style.btn}
                type="submit"
              >
                <Text>Entrar</Text>
              </Button>
              </Form>
            </View>
        </Content>
        <Footer>
          <FooterTab>
              <Left style={Style.mt15}>
                    <Text>Esqueceu sua senha?</Text>
              </Left>
              <Right style={Style.mb20}>
                  <Text>Criar uma conta</Text>
              </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const LoginSwag = reduxForm(
  {
    form: "LoginPage",
    validate
  },
)(LoginPage);

export default connect(({routes}) => ({routes}))(LoginSwag);