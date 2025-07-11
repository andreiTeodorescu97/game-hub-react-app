import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setisExpanded] = useState(false);
  const limit = 300;
  if(!children) return null;
  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }
  const summary = isExpanded ? children : children.substring(0, 300) + "...";
  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setisExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
