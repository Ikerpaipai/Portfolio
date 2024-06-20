import { useForm, FormProvider } from "react-hook-form"
import { FormContainer, Row } from "./form.styles";
import InputText from "../input/inputText.component";
import TextArea from "../input/textArea.component";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { useContext } from "react";
import { ModeContext } from "../../contexts/toggle-mode.context";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from "sonner";

const defaultValues = {
    prenom: "",
    nom: "",
    email: "",
    societe: "",
    message: ""
}

const Form = () => {
    const [t] = useTranslation("global")
    const {isOn} = useContext(ModeContext)
    const validationSchema = Yup.object().shape({
        prenom: Yup.string()
            .required(t("contact.form.prenom.required"))
            .min(2, t("contact.form.prenom.min"))
            .max(10, t("contact.form.prenom.max")),
        nom: Yup.string()
            .required(t("contact.form.nom.required"))
            .min(2, t("contact.form.nom.min"))
            .max(10, t("contact.form.nom.max")),
        email: Yup.string()
            .required(t("contact.form.email.required"))
            .email(t("contact.form.email.email")),
        societe: Yup.string(),
        message: Yup.string()
            .required(t("contact.form.message.required"))
            .min(10, t("contact.form.message.min")),
      });

    const methods = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(validationSchema),
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const {handleSubmit, reset} = methods

    const onSubmit = async () => {
        const form = document.querySelector("form");
        
        if (form) {
            const promise = () => new Promise((resolve) => setTimeout(() => resolve(), 2000));

            emailjs
            .sendForm('service_kdoe1rg', 'template_tf592bv', form, '3DL7QGV6bCa_lZuL5')
            .then(
                toast.promise(promise, {
                    loading: t("toast.message.loading"),
                    success: () => {
                        reset(defaultValues)
                        return t("toast.message.success");
                    },
                    error: t("toast.message.error"),
                }),
            );
        }
    };

    return(
        <FormProvider {...methods}>
            <Toaster position="bottom-right" richColors closeButton/>
            <FormContainer onSubmit={handleSubmit(onSubmit)} $nightMode={isOn}>
                <Row>
                    <InputText label="prenom" required placeholder={t("contact.form.prenom.placeholder")} />
                    <InputText label="nom" required placeholder={t("contact.form.nom.placeholder")} />
                </Row>
                <InputText label="email" required placeholder={t("contact.form.email.placeholder")} />
                <InputText label="societe" placeholder={t("contact.form.societe.placeholder")}/>
                <TextArea label="message" placeholder={t("contact.form.message.placeholder")} />
                <div style={{textAlign: "end"}}>
                    <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.formButton} $nightMode={isOn}>Envoyer</Button>
                </div>
            </FormContainer>
        </FormProvider>
    )
}

export default Form