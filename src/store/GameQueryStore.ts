import {create} from 'zustand'

export interface GameQuery {
  genreId?: number,
  platformId?: number,
  sortOrder?: string;
  searchText?: string;
}


interface GameQueryStore {
  gameQuery: GameQuery,
  setGenreId: (genreId: number) => void,
  setPlatformId: (platformId: number) => void,
  setSortOrder: (sortOrder: string) => void,
  setSearchText: (searchText: string) => void
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {},
  setGenreId: (genreId: number) => set((state) => ({gameQuery: {...state.gameQuery, genreId}})),
  setPlatformId: (platformId: number) => set((state) => ({gameQuery: {...state.gameQuery, platformId}})),
  setSortOrder: (sortOrder: string) => set((state) => ({gameQuery: {...state.gameQuery, sortOrder}})),
  setSearchText: (searchText: string) => set(() => ({gameQuery: {searchText}}))
}));

export default useGameQueryStore
