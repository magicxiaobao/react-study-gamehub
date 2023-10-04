import useData from "./UseData.tsx";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  return useData<Platform>("/platforms/lists/parents");
};

export default usePlatform;
