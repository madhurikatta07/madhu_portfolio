import emailjs from "@emailjs/browser";

/**
 * Sends contact form data using EmailJS
 * @param {HTMLFormElement} formElement - Form DOM element reference
 * @returns {Promise} EmailJS response promise
 */
export const sendContactEmail = async (formElement) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not configured.");
    }

    return emailjs.sendForm(serviceId, templateId, formElement, publicKey);
};
