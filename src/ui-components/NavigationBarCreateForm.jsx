/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { NavigationBar } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NavigationBarCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    photo: "",
    about: "",
    blog: "",
    connect: "",
  };
  const [photo, setPhoto] = React.useState(initialValues.photo);
  const [about, setAbout] = React.useState(initialValues.about);
  const [blog, setBlog] = React.useState(initialValues.blog);
  const [connect, setConnect] = React.useState(initialValues.connect);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPhoto(initialValues.photo);
    setAbout(initialValues.about);
    setBlog(initialValues.blog);
    setConnect(initialValues.connect);
    setErrors({});
  };
  const validations = {
    photo: [],
    about: [],
    blog: [],
    connect: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          photo,
          about,
          blog,
          connect,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new NavigationBar(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "NavigationBarCreateForm")}
      {...rest}
    >
      <TextField
        label="Photo"
        isRequired={false}
        isReadOnly={false}
        value={photo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              photo: value,
              about,
              blog,
              connect,
            };
            const result = onChange(modelFields);
            value = result?.photo ?? value;
          }
          if (errors.photo?.hasError) {
            runValidationTasks("photo", value);
          }
          setPhoto(value);
        }}
        onBlur={() => runValidationTasks("photo", photo)}
        errorMessage={errors.photo?.errorMessage}
        hasError={errors.photo?.hasError}
        {...getOverrideProps(overrides, "photo")}
      ></TextField>
      <TextField
        label="About"
        isRequired={false}
        isReadOnly={false}
        value={about}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              photo,
              about: value,
              blog,
              connect,
            };
            const result = onChange(modelFields);
            value = result?.about ?? value;
          }
          if (errors.about?.hasError) {
            runValidationTasks("about", value);
          }
          setAbout(value);
        }}
        onBlur={() => runValidationTasks("about", about)}
        errorMessage={errors.about?.errorMessage}
        hasError={errors.about?.hasError}
        {...getOverrideProps(overrides, "about")}
      ></TextField>
      <TextField
        label="Blog"
        isRequired={false}
        isReadOnly={false}
        value={blog}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              photo,
              about,
              blog: value,
              connect,
            };
            const result = onChange(modelFields);
            value = result?.blog ?? value;
          }
          if (errors.blog?.hasError) {
            runValidationTasks("blog", value);
          }
          setBlog(value);
        }}
        onBlur={() => runValidationTasks("blog", blog)}
        errorMessage={errors.blog?.errorMessage}
        hasError={errors.blog?.hasError}
        {...getOverrideProps(overrides, "blog")}
      ></TextField>
      <TextField
        label="Connect"
        isRequired={false}
        isReadOnly={false}
        value={connect}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              photo,
              about,
              blog,
              connect: value,
            };
            const result = onChange(modelFields);
            value = result?.connect ?? value;
          }
          if (errors.connect?.hasError) {
            runValidationTasks("connect", value);
          }
          setConnect(value);
        }}
        onBlur={() => runValidationTasks("connect", connect)}
        errorMessage={errors.connect?.errorMessage}
        hasError={errors.connect?.hasError}
        {...getOverrideProps(overrides, "connect")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
