/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { HeroLayout1 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function HeroLayout1UpdateForm(props) {
  const {
    id: idProp,
    heroLayout1,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Header: "",
    Headline: "",
    Content: "",
    Button: "",
    image: "",
  };
  const [Header, setHeader] = React.useState(initialValues.Header);
  const [Headline, setHeadline] = React.useState(initialValues.Headline);
  const [Content, setContent] = React.useState(initialValues.Content);
  const [Button, setButton] = React.useState(initialValues.Button);
  const [image, setImage] = React.useState(initialValues.image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = heroLayout1Record
      ? { ...initialValues, ...heroLayout1Record }
      : initialValues;
    setHeader(cleanValues.Header);
    setHeadline(cleanValues.Headline);
    setContent(cleanValues.Content);
    setButton(cleanValues.Button);
    setImage(cleanValues.image);
    setErrors({});
  };
  const [heroLayout1Record, setHeroLayout1Record] = React.useState(heroLayout1);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(HeroLayout1, idProp)
        : heroLayout1;
      setHeroLayout1Record(record);
    };
    queryData();
  }, [idProp, heroLayout1]);
  React.useEffect(resetStateValues, [heroLayout1Record]);
  const validations = {
    Header: [],
    Headline: [],
    Content: [],
    Button: [],
    image: [],
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
          Header,
          Headline,
          Content,
          Button,
          image,
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
          await DataStore.save(
            HeroLayout1.copyOf(heroLayout1Record, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "HeroLayout1UpdateForm")}
      {...rest}
    >
      <TextField
        label="Header"
        isRequired={false}
        isReadOnly={false}
        value={Header}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Header: value,
              Headline,
              Content,
              Button,
              image,
            };
            const result = onChange(modelFields);
            value = result?.Header ?? value;
          }
          if (errors.Header?.hasError) {
            runValidationTasks("Header", value);
          }
          setHeader(value);
        }}
        onBlur={() => runValidationTasks("Header", Header)}
        errorMessage={errors.Header?.errorMessage}
        hasError={errors.Header?.hasError}
        {...getOverrideProps(overrides, "Header")}
      ></TextField>
      <TextField
        label="Headline"
        isRequired={false}
        isReadOnly={false}
        value={Headline}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Header,
              Headline: value,
              Content,
              Button,
              image,
            };
            const result = onChange(modelFields);
            value = result?.Headline ?? value;
          }
          if (errors.Headline?.hasError) {
            runValidationTasks("Headline", value);
          }
          setHeadline(value);
        }}
        onBlur={() => runValidationTasks("Headline", Headline)}
        errorMessage={errors.Headline?.errorMessage}
        hasError={errors.Headline?.hasError}
        {...getOverrideProps(overrides, "Headline")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        value={Content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Header,
              Headline,
              Content: value,
              Button,
              image,
            };
            const result = onChange(modelFields);
            value = result?.Content ?? value;
          }
          if (errors.Content?.hasError) {
            runValidationTasks("Content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("Content", Content)}
        errorMessage={errors.Content?.errorMessage}
        hasError={errors.Content?.hasError}
        {...getOverrideProps(overrides, "Content")}
      ></TextField>
      <TextField
        label="Button"
        isRequired={false}
        isReadOnly={false}
        value={Button}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Header,
              Headline,
              Content,
              Button: value,
              image,
            };
            const result = onChange(modelFields);
            value = result?.Button ?? value;
          }
          if (errors.Button?.hasError) {
            runValidationTasks("Button", value);
          }
          setButton(value);
        }}
        onBlur={() => runValidationTasks("Button", Button)}
        errorMessage={errors.Button?.errorMessage}
        hasError={errors.Button?.hasError}
        {...getOverrideProps(overrides, "Button")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Header,
              Headline,
              Content,
              Button,
              image: value,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || heroLayout1)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || heroLayout1) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
