import React, { Component } from "react";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { submitEntry } from "../../utils/api/api";
import { addEntry } from "../../actions";

const NewDeckView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.Text`
  padding-bottom: 10px;
  align-items: center;
  text-align: center;
  font-size: 50px;
`;

const Input = styled.TextInput`
  margin-bottom: 10px;
  padding: 10px;
  margin: 20px;
  width: 90%;
  border-radius: 6px;
  align-items: center;
  border: 2px solid black;
`;
const Button = styled.Button``;

class AddDeck extends Component {
  state = {
    text: ""
  };
  static navigationOptions = {
    title: "New Decks"
  };

  handleSubmit() {
    const { text } = this.state;
    const key = text;
    const newDeck = { key, questions: [] };
    this.props.dispatch(
      addEntry({
        [key]: newDeck
      })
    );
    submitEntry({ key, entry: newDeck });
    this.props.navigation.navigate("ListDecks");
    this.setState({ text: "" });
  }

  render() {
    const { text } = this.state;
    return (
      <NewDeckView behavior={"padding"}>
        <Title>What is the title of your new deck?</Title>
        <Input
          placeholder="Deck Title"
          value={text}
          onChangeText={text => this.setState({ text })}
        />
        <Button
          onPress={() => this.handleSubmit()}
          title="Submit"
          disabled={text.trim().length === 0}
          accessibilityLabel="Create a new Deck"
        />
      </NewDeckView>
    );
  }
}

export default connect()(AddDeck);
