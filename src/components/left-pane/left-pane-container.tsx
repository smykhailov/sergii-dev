import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const titleHeight = 35;

const LeftPaneContainer: FC<
  PropsWithChildren<{
    title: string;
    offsetTop: number;
  }>
> = props => {
  const theme = useTheme();
  const [displayShadow, setShouldDisplayShadow] = useState(false);
  const containerEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerEl.current?.scrollTo(0, props.offsetTop - titleHeight);
  }, [containerEl, props.offsetTop]);

  return (
    <Container>
      <TitleContainer
        style={
          displayShadow
            ? { boxShadow: theme.colors.shadow, zIndex: 100 }
            : { zIndex: 100 }
        }
      >
        <Title>{props.title}</Title>
      </TitleContainer>
      <ContentContainer
        ref={containerEl}
        onScroll={e =>
          setShouldDisplayShadow((e.target as HTMLElement).scrollTop > 0)
        }
      >
        {props.children}
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  lineHeight: "1.4em",
}));

const TitleContainer = styled.div(props => ({
  height: titleHeight,
  paddingLeft: 8,
  paddingRight: 8,
  borderBottom: props.theme.colors.border,
}));

const Title = styled.h3(() => ({
  lineHeight: "35px",
  paddingLeft: 12,
  paddingRight: 12,
  textTransform: "uppercase",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "inherit",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}));

const ContentContainer = styled.div(() => ({
  height: "calc(100vh - 61px)",
  overflowY: "auto",
}));

export default LeftPaneContainer;
