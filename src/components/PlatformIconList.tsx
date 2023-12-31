import {HStack, Icon} from "@chakra-ui/react";
import {FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox,} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {IconType} from "react-icons";
import {Platform} from "../services/platformService.ts";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          color="gray.500"
          key={platform.slug}
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList
