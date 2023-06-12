import * as FileSystem from "expo-file-system";

export const addPlace = (title, image) => {
    return async dispatch => {
      const fileName = image.split("/").pop();
      const Path = FileSystem.documentDirectory + fileName;
      try {
        FileSystem.moveAsync({
          from: image,
          to: Path,
        });
      } catch (error) {
        console.log(error.message);
        throw error;
      }
      dispatch({ type: ADD_PLACE, payload: { title, image: Path } });
    };
  };