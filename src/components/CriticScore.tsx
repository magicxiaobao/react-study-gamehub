import {Badge} from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({score}: Props) => {
  const color = score > 90 ? "green" : score > 75 ? "yellow" : "";
  return (
    <Badge fontSize="14px" colorScheme={color} borderRadius={1} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore
