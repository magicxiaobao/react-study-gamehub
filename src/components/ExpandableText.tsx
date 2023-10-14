import {useState} from "react";
import {Button, Text} from "@chakra-ui/react";

interface Props {
  text: string
}

export const ExpandableText = ({text}: Props) => {

  const [expanded, setExpanded] = useState(false)
  const limit = 300
  if (text.length <= limit) return <Text>{text}</Text>
  const children = !expanded ? text.substring(0, limit) : text
  return (
    <>
      <Text>{children}
        <Button fontWeight="bold" marginLeft={1} colorScheme="yellow" size="xs"
                onClick={() => setExpanded(!expanded)}>{expanded ? 'less' : 'show more'}</Button>
      </Text>

    </>
  );
};
