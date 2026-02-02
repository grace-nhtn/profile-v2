import React from 'react';
import { Typography } from 'antd';
import { Education as EducationType } from '../../model/cv';
import { translations } from '../../constants/translations';
import { useLanguage } from '../../hooks/useLanguage';
import './Education.scss';

const { Text, Title } = Typography;

interface EducationProps {
  education: EducationType;
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="section">
      <h2 className="section-title">{t.education}</h2>
      <Title level={4}>{education.school}</Title>
      <Text strong>{education.major}</Text>
      <br />
      <Text type="secondary">
        {education.period.start} - {education.period.end}
      </Text>
      {education.gpa && (
        <>
          <br />
          <Text type="secondary">GPA: {education.gpa}</Text>
        </>
      )}
    </div>
  );
};
