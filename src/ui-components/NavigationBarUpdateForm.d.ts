/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NavigationBar } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NavigationBarUpdateFormInputValues = {
    photo?: string;
    about?: string;
    blog?: string;
    connect?: string;
};
export declare type NavigationBarUpdateFormValidationValues = {
    photo?: ValidationFunction<string>;
    about?: ValidationFunction<string>;
    blog?: ValidationFunction<string>;
    connect?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavigationBarUpdateFormOverridesProps = {
    NavigationBarUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    about?: PrimitiveOverrideProps<TextFieldProps>;
    blog?: PrimitiveOverrideProps<TextFieldProps>;
    connect?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NavigationBarUpdateFormProps = React.PropsWithChildren<{
    overrides?: NavigationBarUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    navigationBar?: NavigationBar;
    onSubmit?: (fields: NavigationBarUpdateFormInputValues) => NavigationBarUpdateFormInputValues;
    onSuccess?: (fields: NavigationBarUpdateFormInputValues) => void;
    onError?: (fields: NavigationBarUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NavigationBarUpdateFormInputValues) => NavigationBarUpdateFormInputValues;
    onValidate?: NavigationBarUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NavigationBarUpdateForm(props: NavigationBarUpdateFormProps): React.ReactElement;
