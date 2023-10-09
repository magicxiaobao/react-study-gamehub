import usePlatforms from "./UsePlatforms.ts";

const usePlatform = (id?: number) => {
  const {data: platforms} = usePlatforms()
  return platforms.find(p => p.id === id);
}

export default usePlatform
