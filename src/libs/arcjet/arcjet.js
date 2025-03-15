import arcjet, { shield, detectBot, tokenBucket } from '@arcjet/next';
import appConfig from "@/config";
import {NextResponse} from "next/server";

const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ['ip.src'], // Track requests by IP
    rules: [
        // Block common attacks
        shield({ mode: appConfig.arcjet.mode }),
        // Bot detection rule – allow common search engines only
        detectBot({
            mode: appConfig.arcjet.mode,
            allow: ['CATEGORY:SEARCH_ENGINE', 'STRIPE_WEBHOOK'],
        }),
        // Rate limiting rule (adjust parameters as needed)
        tokenBucket({
            mode: appConfig.arcjet.mode,
            refillRate: 5,
            interval: 10,
            capacity: 10,
        }),
    ],
});

/**
 * Checks if the incoming request should be protected by Arcjet.
 * Returns a NextResponse if the request is denied, or null if allowed.
 *
 * @param {Request} request
 * @returns {Promise<NextResponse|null>}
 */
export async function arcjetHandleRequest(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Determine if protection should be applied based on config settings
    const shouldProtect =
        appConfig.arcjet.enabled &&
        (appConfig.arcjet.globalProtection ||
            appConfig.arcjet.protectedRoutes.some((route) => pathname.startsWith(route)));

    if (!shouldProtect) {
        return null;
    }

    const decision = await aj.protect(request);
    if (decision.isDenied()) {
        if (decision.reason.isRateLimit()) {
            return NextResponse.json(
                { error: 'Too Many Requests', reason: decision.reason },
                { status: 429 }
            );
        } else if (decision.reason.isBot()) {
            return NextResponse.json(
                { error: 'No bots allowed', reason: decision.reason },
                { status: 403 }
            );
        } else {
            return NextResponse.json(
                { error: 'Forbidden', reason: decision.reason },
                { status: 403 }
            );
        }
    }
    return null;
}

export default aj;