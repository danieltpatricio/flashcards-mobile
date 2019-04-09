import React, { Component } from "react";
import { Button, Text } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/native";
import ButtonHighLight from "../common/ButtonHighLight";
import ProgressCircle from "react-native-progress-circle";

import {
  clearLocalNotification,
  setLocalNotification
} from "../../utils/notify";

const QuizView = styled.View`
  display: flex;
  background-color: #fff;
`;

const FeedBackView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px;
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

const Correct = styled.Text`
  padding-top: 10px;
  font-size: 16px;
  color: green;
`;
const Incorrect = styled.Text`
  padding-top: 10px;
  padding-bottom: 50px;
  font-size: 16px;
  color: red;
`;
const Number = styled.Text`
  color: black;
`;

class DetailsDeck extends Component {
  state = {
    question: 0,
    showAnswer: false,
    correct: 0
  };

  static navigationOptions = ({ navigation }) => ({
    title: "Quiz"
  });

  render() {
    const { navigation, item } = this.props;
    const { question, showAnswer, correct } = this.state;
    const percentage = correct * (100 / item.questions.length);
    question > item.questions.length &&
      clearLocalNotification().then(setLocalNotification);
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
      <FeedBackView>
        <ProgressCircle
          percent={percentage}
          radius={100}
          borderWidth={10}
          color={parseInt(percentage) > 70 ? "green" : "red"}
          shadowColor="#999"
          bgColor="#fff"
        >
          <Title>{parseInt(percentage)}%</Title>
        </ProgressCircle>
        <Correct>
          Correct:{" "}
          <Number>
            {correct} / {item.questions.length}
          </Number>
        </Correct>
        <Incorrect>
          Incorrect:{" "}
          <Number>
            {item.questions.length - correct} / {item.questions.length}
          </Number>
        </Incorrect>
        <ButtonHighLight
          title="Try Again"
          color="black"
          onPress={() =>
            this.setState({
              question: 0,
              correct: 0
            })
          }
        />
        <ButtonHighLight
          title="Back"
          colorText="gray"
          underlayColor="lightgray"
          styled={{ border: "1px solid lightgray" }}
          onPress={() => navigation.goBack()}
        />
      </FeedBackView>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    item: state[props.navigation.getParam("key")]
  };
}

export default connect(mapStateToProps)(DetailsDeck);
