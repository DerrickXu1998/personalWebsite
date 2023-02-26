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
export declare type HeroLayout1CreateFormInputValues = {
    Header?: string;
    Headline?: string;
    Content?: string;
    Button?: string;
    image?: string;
};
export declare type HeroLayout1CreateFormValidationValues = {
    Header?: ValidationFunction<string>;
    Headline?: ValidationFunction<string>;
    Content?: ValidationFunction<string>;
    Button?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayout1CreateFormOverridesProps = {
    HeroLayout1CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Header?: PrimitiveOverrideProps<TextFieldProps>;
    Headline?: PrimitiveOverrideProps<TextFieldProps>;
    Content?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeroLayout1CreateFormProps = React.PropsWithChildren<{
    overrides?: HeroLayout1CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HeroLayout1CreateFormInputValues) => HeroLayout1CreateFormInputValues;
    onSuccess?: (fields: HeroLayout1CreateFormInputValues) => void;
    onError?: (fields: HeroLayout1CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HeroLayout1CreateFormInputValues) => HeroLayout1CreateFormInputValues;
    onValidate?: HeroLayout1CreateFormValidationValues;
} & React.CSSProperties>;
export default function HeroLayout1CreateForm(props: HeroLayout1CreateFormProps): React.ReactElement;
