import appConfig from "@/config";

export const openEmailSupport = (subject, body) => {
    const mailto = `mailto:${appConfig.supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.open(mailto, '_blank');
}