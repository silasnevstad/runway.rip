import appConfig from "@/config";

export const openEmailSupport = (subject, body) => {
    const mailto = `mailto:${appConfig.emails.support}`;
    const subjectParam = subject ? `subject=${encodeURIComponent(subject)}` : '';
    const bodyParam = body ? `body=${encodeURIComponent(body)}` : '';


    // Open email client
    window.open(`${mailto}?${subjectParam}&${bodyParam}`, '_blank');
}