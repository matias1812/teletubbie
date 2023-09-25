import { create } from "zustand";
import { supabaseClient } from "../../supabase";
import { token } from "./user";
import { CardInfo } from "../../routers/auth/login/Interface";

interface useContextType {
  user: token["data"]["session"] | undefined;
  setUser: () => void;
  isLogged: () => boolean;
}

type StatePost = {
  post: CardInfo[];
  setPost: (newPost: CardInfo[]) => void;
};

type StateImage = {
  selectedImage: string | null;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const AuthContext = create<useContextType>((set, get) => ({
  user: undefined,

  isLogged: () => {
    return !get().user;
  },

  setUser: async () => {
    const token = (await supabaseClient.auth.getSession()) as unknown as token;

    set({ user: token.data.session });
  },
}));

export const PostContext = create<StatePost>((set) => ({
  post: [],
  setPost: (newPost) => set({ post: newPost }),
}));

export const handleContext = create<StateImage>((set) => ({
  selectedImage: null,
  handleImageChange: (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      set({ selectedImage: imageUrl });
    }
  },
}));
