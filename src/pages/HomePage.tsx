import React from "react";
import { FirstPage } from "./FirstPage";
import { SecondPage } from "./SecondPage";
import { ThirdPage } from "./ThirdPage";
import { FourthPage } from "./FourthPage";
import { FifthPage } from "./FifthPage";
import { SixthPage } from "./SixthPage";
import {
  Masthead,
  MastheadBrand,
  MastheadMain,
  MastheadToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  SkipToContent,
} from "@patternfly/react-core";
import BarsIcon from "@patternfly/react-icons/dist/esm/icons/bars-icon";

interface NavOnSelectProps {
  groupId: number | string;
  itemId: number | string;
  to: string;
}

export const PageStickySectionGroup: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onNavSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    selectedItem: NavOnSelectProps
  ) => {
    typeof selectedItem.itemId === "number" &&
      setActiveItem(selectedItem.itemId);
  };

  const masthead = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>XML</MastheadBrand>
      </MastheadMain>
    </Masthead>
  );

  const pageNav = (
    <Nav onSelect={onNavSelect}>
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0}>
          Введение в XML
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1}>
          Основные элементы XML
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2}>
          Атрибуты и пространства имен
        </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3}>
          Валидация XML
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4}>
          XML-словари
        </NavItem>
        <NavItem itemId={5} isActive={activeItem === 5}>
          Применение XML
        </NavItem>
      </NavList>
    </Nav>
  );

  const sidebar = (
    <PageSidebar>
      <PageSidebarBody>{pageNav}</PageSidebarBody>
    </PageSidebar>
  );

  const mainContainerId = "main-content";

  const pageSkipToContent = (
    <SkipToContent href={`#${mainContainerId}`}>Skip to content</SkipToContent>
  );

  const pages = [
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    SixthPage,
  ];

  return (
    <Page
      header={masthead}
      sidebar={sidebar}
      isManagedSidebar
      skipToContent={pageSkipToContent}
      mainContainerId={mainContainerId}
      isBreadcrumbWidthLimited
      isBreadcrumbGrouped
      groupProps={{
        stickyOnBreakpoint: { default: "top" },
      }}
    >
      <PageSection>{pages[activeItem]}</PageSection>
    </Page>
  );
};
