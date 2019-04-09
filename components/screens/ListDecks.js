import React, { Component } from "react";
import { Text, FlatList } from "react-native";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { receiveEntries } from "../../actions";
import { getEntries } from "../../utils/api/api";

const ListView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: stretch;
  justify-content: flex-start;
`;

const Button = styled.TouchableOpacity`
  padding: 40px;
  align-items: center;
  border-style: solid;
  border-color: gray;
  border-width: 0.5;
  font-weight: bold;
`;

class ListDecks extends Component {
  static navigationOptions = {
    title: "List Decks"
  };
  componentDidMount() {
    getEntries().then(r => this.props.dispatch(receiveEntries(r)));
  }

  _item = ({ item }) => (
    <Button
      key={item.key}
      onPress={() =>
        this.props.navigation.navigate("DetailsDeck", { key: item.key })
      }
    >
      <Text>{item.key}</Text>
      <Text>{item.questions.length} cards</Text>
    </Button>
  );

  render() {
    const { decks } = this.props;

    return (
      <ListView>
        <FlatList data={decks} extraData={decks} renderItem={this._item} />
      </ListView>
    );
  }
}

function mapStateToProps(state, props) {
  state = state ? Object.values(state) : [];
  return {
    decks: state,
    ...props
  };
}

export default connect(mapStateToProps)(ListDecks);
