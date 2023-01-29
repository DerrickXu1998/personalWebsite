/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LandingCardCreateFormInputValues = {
    Header?: string;
    Headline?: string;
    Content?: string;
    Button?: string;
    image?: string;
};
export declare type LandingCardCreateFormValidationValues = {
    Header?: ValidationFunction<string>;
    Headline?: ValidationFunction<string>;
    Content?: ValidationFunction<string>;
    Button?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LandingCardCreateFormOverridesProps = {
    LandingCardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Header?: PrimitiveOverrideProps<TextFieldProps>;
    Headline?: PrimitiveOverrideProps<TextFieldProps>;
    Content?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LandingCardCreateFormProps = React.PropsWithChildren<{
    overrides?: LandingCardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LandingCardCreateFormInputValues) => LandingCardCreateFormInputValues;
    onSuccess?: (fields: LandingCardCreateFormInputValues) => void;
    onError?: (fields: LandingCardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LandingCardCreateFormInputValues) => LandingCardCreateFormInputValues;
    onValidate?: LandingCardCreateFormValidationValues;
} & React.CSSProperties>;
export default function LandingCardCreateForm(props: LandingCardCreateFormProps): React.ReactElement;
