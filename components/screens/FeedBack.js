import React, { Component } from "react";
import styled from "styled-components/native";
import ButtonHighLight from "../common/ButtonHighLight";
import ProgressCircle from "react-native-progress-circle";
import {
  clearLocalNotification,
  setLocalNotification
} from "../../utils/notify";

const FeedBackView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px;
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

class FeedBack extends Component {
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { navigation, length, correct, handleResetQuiz } = this.props;
    const percentage = correct * (100 / length);
    return (
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
          Correct:
          <Number>
            {correct} / {length}
          </Number>
        </Correct>
        <Incorrect>
          Incorrect:
          <Number>
            {length - correct} / {length}
          </Number>
        </Incorrect>
        <ButtonHighLight
          title="Try Again"
          color="black"
          onPress={() => handleResetQuiz()}
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

export default FeedBack;
