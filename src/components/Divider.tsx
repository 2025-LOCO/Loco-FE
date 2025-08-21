import styled from "styled-components";

const DividerComp = styled.div<{
  $height?: string;
  $maxWidth?: string;
  $backgroundColor?: string;
}>`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth};
  height: "0";
  border-top: ${({ $height, $backgroundColor }) =>
    `${$height} solid ${$backgroundColor}`};
  margin: 0 auto;
  border-radius: 9999px;
`;

interface DividerProps {
  height?: string;
  maxWidth?: string;
  backgroundColor?: string;
}

export default function Divider({
  height = "3px",
  maxWidth = "500px",
  backgroundColor = "var(--color-sub600)",
}: DividerProps) {
  return (
    <>
      <DividerComp
        $height={height}
        $maxWidth={maxWidth}
        $backgroundColor={backgroundColor}
      />
    </>
  );
}
