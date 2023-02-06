import React from 'react';

import {Text, Row} from '@/shared/components';
import theme from '@/assets/theme';

interface SectionHeaderWithTotalProps {
  title: string;
  total: number;
}

const TitleWithTotalSectionHeader = ({
  title,
  total,
}: SectionHeaderWithTotalProps) => (
  <Row
    spaceBetween
    style={{
      paddingVertical: 10,
      paddingHorizontal: 2,
      backgroundColor: theme.background,
    }}>
    <Text type="big">{title}</Text>
    <Text type="big">{`Total: R$ ${total}`}</Text>
  </Row>
);

export default TitleWithTotalSectionHeader;
