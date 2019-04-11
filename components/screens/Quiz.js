import React, { Component } from "react";
import { Button, Text } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/native";
import ButtonHighLight from "../common/ButtonHighLight";
import FeedBack from "./FeedBack";
import PropTypes from "prop-types";

const QuizView = styled.View`
  display: flex;
  background-color: #fff;
`;

const Content = styled.View`
  justify-content: center;
  height: 100%;
`;

const ButtonGroup = styled.View`
  padding: 60px;
`;

const NumberCard = styled.Text`
  margin: 10px;
  font-size: 16px;
`;

const Title = styled.Text`
  padding-bottom: 10px;
  align-items: center;
  text-align: center;
  font-size: 50px;
`;

class Quiz extends Component {
  state = {
    question: 0,
    showAnswer: false,
    correct: 0
  };

  handleResetQuiz = () =>
    this.setState({
      question: 0,
      correct: 0
    });

  render() {
    const { navigation, item } = this.props;
    const { question, showAnswer, correct } = this.state;
    return question < item.questions.length ? (
      <QuizView>
        <NumberCard>
          {question + 1} / {item.questions.length}
        </NumberCard>
        <Content>
          <Title>
            {showAnswer
              ? item.questions[question].answer
              : item.questions[question].question}
          </Title>
          <Button
            title={showAnswer ? "Question" : "Show Answer"}
            color="red"
            onPress={() => this.setState({ showAnswer: !showAnswer })}
          />
          <ButtonGroup>
            <ButtonHighLight
              title="Correct"
              underlayColor="darkseagreen"
              color="green"
              onPress={() =>
                this.setState({
                  question: question + 1,
                  correct: correct + 1
                })
              }
            />
            <ButtonHighLight
              title="Incorrect"
              underlayColor="darksalmon"
              color="red"
              onPress={() =>
                this.setState({
                  question: question + 1
                })
              }
            />
          </ButtonGroup>
        </Content>
      </QuizView>
    ) : (
      <FeedBack
        navigation={navigation}
        length={item.questions.length}
        correct={correct}
        handleResetQuiz={this.handleResetQuiz}
      />
    );
  }
}

Quiz.navigationOptions = ({ navigation }) => ({
  title: "Quiz"
});

Quiz.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    item: state[props.navigation.getParam("key")]
  };
}

export default connect(mapStateToProps)(Quiz);
