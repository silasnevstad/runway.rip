import appConfig from "@/config"; // your existing config.js

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

    const siteUrl = `https://${appConfig.domainName}`;

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
                    url: `${siteUrl}/logo.png`, // adjust this default image as needed
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
            images: [`${siteUrl}/og-image.png`],
        },
    };
}

/**
 * Renders JSON‑LD schema tags.
 * Pass an object (or array) of schema data.
 */
export function renderSchemaTags(schemaData) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}