import React, { Fragment, useState } from "react";
import { Divider, List } from "react-native-paper";

import Spacer, {
  directions,
  sizes,
} from "../../../../components/spacer/spacer.component";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components";

const Accordion = styled(List.Accordion)`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
  background: ${({ theme }) => theme.colors.bg.primary};
`;

const AccordionIcon = styled(MaterialCommunityIcons)`
  font-size: ${({ theme }) => theme.sizes[2]};
`;

export default function RestaurantMenu({ restaurantMenu }) {
  const [currentAccordion, setCurrentAccordion] = useState(0);

  return (
    <List.AccordionGroup expandedId={currentAccordion}>
      {restaurantMenu.sections.map((section, index) => (
        <Fragment key={`section-${section.id}`}>
          <Accordion
            id={index}
            onPress={() => setCurrentAccordion(index)}
            title={section.title}
            left={({ color, style }) => (
              <AccordionIcon
                name={section.icon_name}
                color={color}
                style={style}
              />
            )}
          >
            {section.items.map((item, index) => (
              <Fragment key={`menu-section-${section.id}-item-${index}`}>
                <List.Item title={item.name} />
                <Divider />
              </Fragment>
            ))}
          </Accordion>
          <Spacer direction={directions.top} size={sizes.medium} />
        </Fragment>
      ))}
    </List.AccordionGroup>
  );
}
