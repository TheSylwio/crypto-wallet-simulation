import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import { NewThunkDispatch } from '../redux/actions';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

export const loadFromStorage = (key: string, fn: (arg0: any) => any, parseJSON = false) => async (dispatch: NewThunkDispatch) => {
  await storage.load({ key }).then(data => {
    if (parseJSON) {
      dispatch(fn(JSON.parse(data)));
      return;
    }

    dispatch(fn(data));
  }).catch(({ name, message }) => {
    if (name === 'NotFoundError') return;
    else console.error(message);
  });
};

export const saveIntoStorage = async (key: string, data: any, parseToJSON = false) => {
  const dataToSave = parseToJSON ? JSON.stringify(data) : data;

  await storage.save({ key, data: dataToSave, expires: null });
};

export default storage;