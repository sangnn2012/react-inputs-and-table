import { ReactNode } from 'react';

interface BaseInputProps {
    label: string,
    isRequired: boolean,
    children?: ReactNode
};

export default BaseInputProps;