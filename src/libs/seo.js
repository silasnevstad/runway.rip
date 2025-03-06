import appConfig from "@/config";

/**
 * Returns default SEO metadata.
 * Options can override the defaults on a per‑page basis.
 */
export function getSEOTags(options = {}) {
    const {
        title = appConfig.appName,
        description = appConfig.appDescription,
        canonicalUrlRelative = "/",
    } = options;

    const siteUrl = `https://${appConfig.domain}`;

    return {
        title,
        description,
        alternates: { canonical: siteUrl + canonicalUrlRelative },
        openGraph: {
            title,
            description,
            url: siteUrl + canonicalUrlRelative,
            siteName: appConfig.appName,
            type: "website",
            images: [
                {
                    url: `${siteUrl}/logo.png`,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: appConfig.socialMedia.twitter || "",
            title,
            description,
            images: [`${siteUrl}/logo.png`],
        },
    };
}

/**
 * Renders JSON‑LD schema tags.
 * Uses default schema data if none is provided.
 */
export function getSchemaTags({ schemaData = {} }) {
    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: appConfig.appName,
        url: `https://${appConfig.domain}`,
        logo: `https://${appConfig.domain}/logo.png`,
    };

    const schema = { ...defaultSchema, ...schemaData };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}