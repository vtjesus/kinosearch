import { createSlice } from "@reduxjs/toolkit";
import { AvatarGenerator } from "random-avatar-generator";
import {
  adjectives,
  names,
  uniqueNamesGenerator,
} from "unique-names-generator";

type UserSliceType = {
  name: string;
  avatar: string;
};

const userInitialState: UserSliceType = {
  name: "",
  avatar: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {
    generateUser: (state) => {
      const generator = new AvatarGenerator();
      const name = uniqueNamesGenerator({
        dictionaries: [adjectives, names],
        separator: " ",
        style: "capital",
      });
      state.name = name;
      state.avatar = generator.generateRandomAvatar(name);
    },
  },
});

export const userActions = {
  ...userSlice.actions,
};
