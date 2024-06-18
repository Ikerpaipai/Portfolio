/* eslint-disable react/prop-types */
import { Controller, useFormContext } from "react-hook-form"
import { Container, ErrorInfo, Input } from "./textArea.styles"
import { useContext } from "react"
import { ModeContext } from "../../contexts/toggle-mode.context"

const TextArea = ({...props}) => {
    const {isOn} = useContext(ModeContext)
    const {
        control,
        formState: {errors}
    } = useFormContext()

    return(
        <Container>
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

export default TextArea