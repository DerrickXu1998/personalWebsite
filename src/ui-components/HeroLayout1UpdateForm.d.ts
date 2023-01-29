/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeroLayout1 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HeroLayout1UpdateFormInputValues = {
    Header?: string;
    Headline?: string;
    Content?: string;
    Button?: string;
    image?: string;
};
export declare type HeroLayout1UpdateFormValidationValues = {
    Header?: ValidationFunction<string>;
    Headline?: ValidationFunction<string>;
    Content?: ValidationFunction<string>;
    Button?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayout1UpdateFormOverridesProps = {
    HeroLayout1UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Header?: PrimitiveOverrideProps<TextFieldProps>;
    Headline?: PrimitiveOverrideProps<TextFieldProps>;
    Content?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeroLayout1UpdateFormProps = React.PropsWithChildren<{
    overrides?: HeroLayout1UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    heroLayout1?: HeroLayout1;
    onSubmit?: (fields: HeroLayout1UpdateFormInputValues) => HeroLayout1UpdateFormInputValues;
    onSuccess?: (fields: HeroLayout1UpdateFormInputValues) => void;
    onError?: (fields: HeroLayout1UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HeroLayout1UpdateFormInputValues) => HeroLayout1UpdateFormInputValues;
    onValidate?: HeroLayout1UpdateFormValidationValues;
} & React.CSSProperties>;
export default function HeroLayout1UpdateForm(props: HeroLayout1UpdateFormProps): React.ReactElement;
