import { AsyncStorage } from "react-native";
import { DECKS_STORAGE_KEY } from "./_decks";

export function submitEntry({ entry, key }) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({ [key]: entry })
  );
}

export function removeEntry(key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
  });
}

export function getEntries() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(data => JSON.parse(data));
}
