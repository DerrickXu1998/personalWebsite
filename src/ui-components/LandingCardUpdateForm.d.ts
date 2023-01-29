/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LandingCard } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LandingCardUpdateFormInputValues = {
    Header?: string;
    Headline?: string;
    Content?: string;
    Button?: string;
    image?: string;
};
export declare type LandingCardUpdateFormValidationValues = {
    Header?: ValidationFunction<string>;
    Headline?: ValidationFunction<string>;
    Content?: ValidationFunction<string>;
    Button?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LandingCardUpdateFormOverridesProps = {
    LandingCardUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Header?: PrimitiveOverrideProps<TextFieldProps>;
    Headline?: PrimitiveOverrideProps<TextFieldProps>;
    Content?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LandingCardUpdateFormProps = React.PropsWithChildren<{
    overrides?: LandingCardUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    landingCard?: LandingCard;
    onSubmit?: (fields: LandingCardUpdateFormInputValues) => LandingCardUpdateFormInputValues;
    onSuccess?: (fields: LandingCardUpdateFormInputValues) => void;
    onError?: (fields: LandingCardUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LandingCardUpdateFormInputValues) => LandingCardUpdateFormInputValues;
    onValidate?: LandingCardUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LandingCardUpdateForm(props: LandingCardUpdateFormProps): React.ReactElement;
