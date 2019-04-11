import React, { Component } from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { submitEntry } from "../../utils/api/api";
import { addEntry } from "../../actions";

const NewDeckView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`;

const Input = styled.TextInput`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border-radius: 6px;
  align-items: center;
  border: 2px solid black;
`;

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };
  static navigationOptions = {
    title: "New Cards"
  };

  handleSubmit() {
    const { question, answer } = this.state;
    const { item } = this.props;
    item.questions.push({ question, answer });
    this.props.dispatch(
      addEntry({
        [item.key]: item
      })
    );
    submitEntry({ key: item.key, entry: item });
    this.props.navigation.goBack();
    this.setState({ question: "", answer: "" });
  }

  render() {
    const { question, answer } = this.state;
    return (
      <NewDeckView behavior={"padding"}>
        <Input
          placeholder="Question"
          value={question}
          onChangeText={text => this.setState({ question: text })}
        />
        <Input
          placeholder="Answer"
          value={answer}
          onChangeText={text => this.setState({ answer: text })}
        />
        <Button
          onPress={() => this.handleSubmit()}
          title="Submit"
          disabled={question.trim().length === 0 || answer.trim().length === 0}
          accessibilityLabel="Create a new Deck"
        />
      </NewDeckView>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    item: state[props.navigation.getParam("key")]
  };
}

export default connect(mapStateToProps)(AddCard);
