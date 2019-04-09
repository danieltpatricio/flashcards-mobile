import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import styled from "styled-components/native";
import ButtonHighLight from "../common/ButtonHighLight";

const DetailsView = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 50px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 50px;
`;

const SubTitle = styled.Text`
  font-size: 25px;
  color: gray;
`;

const Header = styled.View`
  flex: 1;
  align-items: center;
`;

const ButtonGroup = styled.View``;

class DetailsDeck extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("key")
  });

  render() {
    const { navigation, item, length } = this.props;
    return (
      <DetailsView>
        <Header>
          <Title>{item.key}</Title>
          <SubTitle>{length} cards</SubTitle>
        </Header>
        <ButtonGroup>
          <ButtonHighLight
            title="Add Card"
            colorText="gray"
            underlayColor="lightgray"
            styled={{ border: "1px solid lightgray" }}
            onPress={() => navigation.navigate("AddCard", { key: item.key })}
          />
          <ButtonHighLight
            title="Start Quiz"
            color="black"
            disabled={length < 1}
            onPress={() => navigation.navigate("Quiz", { key: item.key })}
          />
        </ButtonGroup>
      </DetailsView>
    );
  }
}
function mapStateToProps(state, props) {
  const item = state[props.navigation.getParam("key")];
  const length = item.questions.length;
  return {
    item,
    length
  };
}

export default connect(mapStateToProps)(DetailsDeck);
