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
export declare type NavigationBarCreateFormInputValues = {
    photo?: string;
    about?: string;
    blog?: string;
    connect?: string;
};
export declare type NavigationBarCreateFormValidationValues = {
    photo?: ValidationFunction<string>;
    about?: ValidationFunction<string>;
    blog?: ValidationFunction<string>;
    connect?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavigationBarCreateFormOverridesProps = {
    NavigationBarCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    about?: PrimitiveOverrideProps<TextFieldProps>;
    blog?: PrimitiveOverrideProps<TextFieldProps>;
    connect?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NavigationBarCreateFormProps = React.PropsWithChildren<{
    overrides?: NavigationBarCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NavigationBarCreateFormInputValues) => NavigationBarCreateFormInputValues;
    onSuccess?: (fields: NavigationBarCreateFormInputValues) => void;
    onError?: (fields: NavigationBarCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NavigationBarCreateFormInputValues) => NavigationBarCreateFormInputValues;
    onValidate?: NavigationBarCreateFormValidationValues;
} & React.CSSProperties>;
export default function NavigationBarCreateForm(props: NavigationBarCreateFormProps): React.ReactElement;
