/* eslint-disable react/prop-types */
import { Controller, useFormContext } from "react-hook-form"
import { Container, ErrorInfo, Input } from "./inputText.styles"
import { useContext } from "react"
import { ModeContext } from "../../contexts/toggle-mode.context"

const InputText = ({required, ...props}) => {
    const {isOn} = useContext(ModeContext)
    const {
        control,
        formState: {errors}
    } = useFormContext()

    return(
        <Container $required={required}>
            <Controller
                name={props.label}
                control={control}
                rules={{required: true}}
                render={({field}) => (
                    <>
                        <label style={{display: "none"}} htmlFor={props.label} />
                        <Input
                            {...field}
                            id={props.label}
                            placeholder={props.placeholder}
                            $nightMode={isOn}
                        />
                        {errors[props.label] && (
                            <ErrorInfo $nightMode={isOn}>{errors[props.label].message}</ErrorInfo>
                        )}
                    </>
                )}
            />
        </Container>
    )
}

export default InputText